import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import login from '../../screen/auth/login';
import register from '../../screen/auth/register';
import forgot from '../../screen/auth/forgotPassword';

const Auth = createStackNavigator();

export default function auth() {
  return (
    <Auth.Navigator headerMode="none">
      <Auth.Screen name="login" component={login} />
      <Auth.Screen name="register" component={register} />
      <Auth.Screen name="forgot" component={forgot} />
    </Auth.Navigator>
  );
}
