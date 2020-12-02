import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import guideScreen from '../../screen/mainGuide/home';
import listDest from '../../screen/mainGuide/listDest';
import profile from '../../screen/mainGuide/profile';

const Guide = createBottomTabNavigator();

export default function mainGuide() {
  return (
    <Guide.Navigator headerMode={false}>
      <Guide.Screen name="home" component={guideScreen} />
      <Guide.Screen name="listDest" component={listDest} />
      <Guide.Screen name="profile" component={profile} />
    </Guide.Navigator>
  );
}
