import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

import guideScreen from '../../screen/mainGuide/home';
import listFlow from './mainGuideDestListFlow';
import profile from '../../screen/mainGuide/profile';
import {useDispatch, useSelector} from 'react-redux';
import {withFirebase} from '../firebase/firebaseContext';
import firestore from '@react-native-firebase/firestore';

import authFirebase from '@react-native-firebase/auth';

const Guide = createBottomTabNavigator();

function mainGuide({firebase, navigation}) {
  const dispatch = useDispatch();
  const myUid = authFirebase().currentUser?.uid;

  const placeWorkPath = firestore()
    .collection('user')
    .doc(myUid)
    .collection('workPlace');

  useEffect(() => {
    const getWorkPath = placeWorkPath.onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          dispatch({type: 'ADDMYWORKPLACE', payload: change.doc.data()});
        }

        if (change.type === 'removed') {
          dispatch({type: 'MINMYWORKPLACE', payload: change.doc.data()});
        }
      });
    });

    return () => {
      getWorkPath;
      dispatch({type: 'NULLWORKPLACE'});
    };
  }, []);

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () =>
      firebase
        .doGetCurrentUserInfo(myUid)
        .then((a) => dispatch({type: 'MYSTATUS', payload: a})),
    );

    return () => {
      subscribe;
      dispatch({type: 'NULLMYSTATUS'});
    };
  }, [navigation]);

  return (
    <Guide.Navigator
      // initialRouteName="listDest"
      headerMode={false}
      tabBarOptions={{activeTintColor: '#e91e63'}}>
      <Guide.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="home" color={color} size={size} />
          ),
        }}
        component={guideScreen}
      />
      <Guide.Screen
        name="listDest"
        options={{
          tabBarLabel: 'Destination',
          tabBarIcon: ({color, size}) => (
            <FAIcon name="location-arrow" color={color} size={size} />
          ),
        }}
        component={listFlow}
      />
      <Guide.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="user" color={color} size={size} />
          ),
        }}
        component={profile}
      />
    </Guide.Navigator>
  );
}

export default withFirebase(mainGuide);
