import React, {useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button as Tombol,
} from 'react-native';

import {withFirebase} from '../../config/firebase/firebaseContext';

import {InputText, Gap, Link, Button} from '../../components';

function login({navigation, firebase}) {
  return (
    <View style={styles.container}>
      <Tombol
        title="regis"
        onPress={() =>
          firebase
            .doAuthCreateNewUser(
              'test1@gmail.com',
              '1234678',
              'admin',
              'namaadmin',
            )
            .then((a) => console.log(a))
        }
      />
      <Tombol
        title="login"
        onPress={() =>
          firebase
            .doAuthLoginUser('test1@gmail.com', '1234678')
            .then((a) => console.log(a.data()))
        }
      />

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

export default withFirebase(login);

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
