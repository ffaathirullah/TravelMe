import React, {Fragment, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {withFirebase} from '../firebase/firebaseContext';

import SplashScreen from '../../screen/Splash/SplashScreen';
import auth from './auth';
import mainAdmin from './mainAdmin';
import mainUser from './mainUser';
import dibatalkanRoute from './dibatalkanRoute';
import SelesaiRoute from './SelesaiRoute';
import pesananRouter from './pesananRouter';
import mainGuide from './mainGuide';
import settingScreen from '../../screen/setting/settingScreen';
import listScreen from '../../screen/mainUser/list/listScreen';
import listDetail from '../../screen/mainUser/list/listDetail';
import listGuide from '../../screen/mainUser/list/listGuide';
import seekGuideProfile from '../../screen/mainUser/profile/seekGuideProfile';

const Stack = createStackNavigator();
function index({firebase}) {
  const myRole = useSelector((state) => state.authReducer.type);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {myRole == 'splash' ? (
          <Stack.Screen name="splash" component={SplashScreen} />
        ) : myRole == null ? (
          <Stack.Screen name="auth" component={auth} />
        ) : myRole == 'user' ? (
          <>
            <Stack.Screen name="user" component={mainUser} />
            <Stack.Screen name="listScreen" component={listScreen} />
            <Stack.Screen name="listDetail" component={listDetail} />
            <Stack.Screen name="listGuide" component={listGuide} />
            <Stack.Screen
              name="seekGuideProfile"
              component={seekGuideProfile}
            />
            <Stack.Screen name="dibatalkanRoute" component={dibatalkanRoute} />
            <Stack.Screen name="SelesaiRoute" component={SelesaiRoute} />
            <Stack.Screen name="pesananRouter" component={pesananRouter} />
          </>
        ) : myRole == 'admin' ? (
          <Stack.Screen name="admin" component={mainAdmin} />
        ) : (
          <>
            <Stack.Screen name="guide" component={mainGuide} />
            <Stack.Screen name="setting" component={settingScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withFirebase(index);
