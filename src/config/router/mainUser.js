import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../../components';

import home from '../../screen/mainUser/home/home';
import map from '../../screen/mainUser/map/map';
import profile from '../../screen/mainUser/profile/profile';

const MainUser = createBottomTabNavigator();

export default function mainUser() {
  return (
    <MainUser.Navigator headerMode="none"  tabBar={(props) => <BottomNavigator {...props} />}>
      <MainUser.Screen name="Home" component={home} />
      <MainUser.Screen name="Map" component={map} />
      <MainUser.Screen name="Profile" component={profile} />
    </MainUser.Navigator>
  );
}
