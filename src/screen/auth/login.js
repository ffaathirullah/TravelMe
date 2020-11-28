import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button as Tombol,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {withFirebase} from '../../config/firebase/firebaseContext';

import {InputText, Gap, Link, Button} from '../../components';

function login({navigation, firebase}) {
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Error, setError] = useState('');
  const dispatch = useDispatch();

  const loginFunc = async () => {
    if (Email == null || Password == null) {
      setError('Please Fill Username & Password');
    } else {
      try {
        const authStatus = await firebase.doAuthLoginUser(Email, Password);
        const myRole = authStatus;
        if (!myRole.exists) {
          setError('Username of Password is incorrect');
        } else {
          dispatch({type: 'LOGINADMINUSER', payload: myRole.data().role});
        }
      } catch (error) {
        setError(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textError}>{Error} </Text>
        <Gap height={15} />
        <InputText
          type="username"
          placeholder="username"
          iconName="user"
          onChangeText={(mail) => setEmail(mail)}
        />
        <Gap height={15} />
        <InputText
          type="password"
          placeholder="password"
          iconName="lock"
          onChangeText={(pass) => setPassword(pass)}
        />
        <Gap height={15} />
        <Button
          prior="primary"
          title="Login"
          width={250}
          onpress={() => loginFunc()}
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
          onpress={() => navigation.push('register')}
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
  textError: {
    color: 'red',
  },
});
