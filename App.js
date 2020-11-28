import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FirebaseContext, {
  withFirebase,
} from './src/config/firebase/firebaseContext';
import FirebaseInstance from './src/config/firebase/firebaseInstance';
import {Provider} from 'react-redux';
import store from './src/config/redux/store/store';

import Router from './src/config/router/index';

function App() {
  return (
    <FirebaseContext.Provider value={new FirebaseInstance()}>
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router />
        </View>
      </Provider>
    </FirebaseContext.Provider>
  );
}

export default withFirebase(App);
