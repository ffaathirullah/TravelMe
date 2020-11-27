import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

import {InputText, Gap, Link, Button} from '../../components';

export default function login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Gap height={15} />
        <InputText type="username" placeholder="username" iconName="user" />
        <Gap height={15} />
        <InputText type="password" placeholder="password" iconName="lock" />
        <Gap height={15} />
        <Button
          prior="primary"
          title="Login"
          width={250}
          onpress={() => navigation.navigate('user')}
        />

        <Gap height={15} />
        <Link
          onPress={() => navigation.push('forgot')}
          text={'Forgotten Password ?'}
        />
        <Gap height={15} />
        <View style={{height: 1, backgroundColor: '#a0a0a0', width: 300}} />
        <Gap height={15} />
        <Button
          prior="secondary"
          title="Register"
          width={150}
          onpress={() => navigation.navigate('user')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
