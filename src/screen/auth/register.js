import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Axios from 'axios';
import {withFirebase} from '../../config/firebase/firebaseContext';
import {InputText, Gap, Picker, Link, Button} from '../../components';

import ProvList from '../../utils/provList.json';

function register({navigation, firebase}) {
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Prov, setProv] = useState(null);
  const [City, setCity] = useState(null);
  const [CityList, setCityList] = useState(null);
  const [Contact, setContact] = useState(null);
  const [Role, setRole] = useState(null);
  const [Name, setName] = useState(null);
  const [Error, setError] = useState(null);

  const roleItems = [
    {label: 'Register as', value: null},
    {label: 'user', value: 'user'},
    {label: 'guide', value: 'guide'},
  ];

  const getCity = async () => {
    try {
      const {data} =
        Prov &&
        (await Axios.get(
          `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${Prov}`,
        ));

      const list = data?.kota_kabupaten?.map((data) => {
        return {label: data.nama, value: data.nama};
      });

      const fixlist = [{value: 'Your city', label: 'Your city'}, ...list];

      setCityList(fixlist);
    } catch (error) {}
  };

  const registerFunc = () => {
    if (Email && Password && Prov && City && Contact && Role && Name) {
      setError(null);
      firebase
        .doAuthCreateNewUser(
          Name,
          Email.trim(),
          Password,
          Contact,
          Role,
          Prov,
          City,
        )
        .then((a) => {
          if (a == 'error') {
            setError('The username already exists.');
          } else {
            navigation.popToTop();
          }
        });
    } else {
      setError('PLease fill the blank');
    }
  };

  useEffect(() => {
    getCity();
  }, [Prov]);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text>{Error && Error} </Text>
        <Text>{Email && Email} </Text>
        <InputText
          type="text"
          placeholder="name"
          iconName="user"
          onChangeText={(text) => setName(text)}
        />
        <Gap height={15} />
        <InputText
          type="text"
          placeholder="email"
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
        <InputText
          type="text"
          placeholder="Phone Number"
          iconName="smartphone"
          keyBoardType="numeric"
          onChangeText={(pass) => setContact(pass)}
        />
        <Gap height={15} />

        <Picker
          items={roleItems}
          onValueChange={(s) => setRole(s)}
          selectedValue={Role}
          iconName="user"
        />

        <Gap height={15} />
        <Picker
          items={ProvList.provinsi}
          onValueChange={(s) => setProv(s)}
          selectedValue={Prov}
          iconName="user"
        />

        <Gap height={15} />
        {CityList && (
          <Picker
            items={CityList}
            onValueChange={(s) => setCity(s)}
            selectedValue={City}
            iconName="user"
            enabled={Prov ? true : false}
          />
        )}
        <Gap height={15} />

        <Button
          prior="secondary"
          title="Register"
          width={250}
          onpress={() => registerFunc()}
        />
        <Gap height={15} />
      </View>
    </View>
  );
}

export default withFirebase(register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
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
