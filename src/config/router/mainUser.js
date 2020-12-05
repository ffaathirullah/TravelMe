import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../../components';

import home from '../../screen/mainUser/home/home';
import pesanan from '../../screen/mainUser/pesanan/pesanan';
import profile from '../../screen/mainUser/profile/profile';

const MainUser = createBottomTabNavigator();

export default function mainUser() {
  return (
    <MainUser.Navigator headerMode="none"  tabBar={(props) => <BottomNavigator {...props} />}>
      <MainUser.Screen name="Home" component={home} />
      <MainUser.Screen name="Pesanan" component={pesanan} />
      <MainUser.Screen name="Profile" component={profile} />
    </MainUser.Navigator>
  );
}
