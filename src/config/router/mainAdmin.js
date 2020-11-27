import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import home from '../../screen/mainAdmin/home';

const MainAdmin = createBottomTabNavigator();

export default function mainAdmin() {
  return (
    <MainAdmin.Navigator headerMode="none">
      <MainAdmin.Screen name="home" component={home} />
    </MainAdmin.Navigator>
  );
}
