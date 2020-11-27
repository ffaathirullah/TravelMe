import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Router from './src/config/router/index';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Router />
    </View>
  );
}
