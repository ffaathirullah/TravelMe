import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import auth from './auth';
import mainAdmin from './mainAdmin';
import mainUser from './mainUser';

const Stack = createStackNavigator();

export default function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="auth" component={auth} />
        <Stack.Screen name="user" component={mainUser} />
        <Stack.Screen name="admin" component={mainAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
