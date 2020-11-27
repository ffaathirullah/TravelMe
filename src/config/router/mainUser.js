import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import home from '../../screen/mainUser/home/home';
import map from '../../screen/mainUser/map/map';
import profile from '../../screen/mainUser/profile/profile';

const MainUser = createBottomTabNavigator();

export default function mainUser() {
  return (
    <MainUser.Navigator headerMode="none">
      <MainUser.Screen name="home" component={home} />
      <MainUser.Screen name="map" component={map} />
      <MainUser.Screen name="profile" component={profile} />
    </MainUser.Navigator>
  );
}
