import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import listDest from '../../screen/mainGuide/listDest';
import listDestination from '../../screen/mainGuide/listDestinations';
import listDetail from '../../screen/mainGuide/listDetail';

const Stack = createStackNavigator();

export default function mainGuideDestListFlow() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="list" component={listDest} />
      <Stack.Screen name="lists" component={listDestination} />
      <Stack.Screen name="detail" component={listDetail} />
    </Stack.Navigator>
  );
}
