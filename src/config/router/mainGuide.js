import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import guideScreen from '../../screen/guide/home';

const Guide = createStackNavigator();

export default function mainGuide() {
  return (
    <Guide.Navigator headerMode={false}>
      <Guide.Screen name="home" component={guideScreen} />
    </Guide.Navigator>
  );
}
