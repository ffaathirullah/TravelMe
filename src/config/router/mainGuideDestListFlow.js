import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import listDest from '../../screen/mainGuide/destination';
import listDestination from '../../screen/mainGuide/listDestinations';
import listDetail from '../../screen/mainGuide/listDetail';
import mapViewGuide from '../../screen/mainGuide/guideMap';

const Stack = createStackNavigator();

export default function mainGuideDestListFlow() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="list" component={listDest} />
      <Stack.Screen name="lists" component={listDestination} />
      <Stack.Screen name="detail" component={listDetail} />
      <Stack.Screen name="guideMap" component={mapViewGuide} />
    </Stack.Navigator>
  );
}
