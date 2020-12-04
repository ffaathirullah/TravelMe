import React, {Fragment, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {withFirebase} from '../firebase/firebaseContext';

import auth from './auth';
import mainAdmin from './mainAdmin';
import mainUser from './mainUser';
import mainGuide from './mainGuide';
import settingScreen from '../../screen/setting/settingScreen';

const Stack = createStackNavigator();

function index({firebase}) {
  const myRole = useSelector((state) => state.authReducer.type);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase
      .doCheckRole()
      .then((RoleUser) =>
        dispatch({type: 'LOGINADMINUSER', payload: RoleUser}),
      );
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {myRole == null ? (
          <Stack.Screen name="auth" component={auth} />
        ) : myRole == 'user' ? (
          <Stack.Screen name="user" component={mainUser} />
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
