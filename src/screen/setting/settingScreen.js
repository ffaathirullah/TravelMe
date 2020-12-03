import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Axios from 'axios';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import FaIcon from 'react-native-vector-icons/FontAwesome5';

import {withFirebase} from '../../config/firebase/firebaseContext';

import DocPicker from 'react-native-document-picker';

import {Gap} from '../../components';

const {width, height} = Dimensions.get('window');

function settingScreen({navigation, firebase}) {
  const [Name, setName] = useState('');
  const [Contact, setContact] = useState(null);
  const [ImageProfile, setImageProfile] = useState(null);
  const [ImageProfileBlob, setImageProfileBlob] = useState(null);
  const [Loading, setLoading] = useState(false);

  const pickeDocument = async () => {
    try {
      const res = await DocPicker.pick({
        type: [DocPicker.types.images],
      });
      setImageProfile(res.uri);
      const fileBlob = await fetch(res.uri).then((a) => a.blob());
      setImageProfileBlob(fileBlob);
    } catch (err) {
      if (DocPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const saveData = async () => {
    try {
      setLoading(true);
      const firebaseUpload = await firebase.doSettingChangePhoto(
        ImageProfileBlob,
        Name,
        Contact,
      );
      setLoading(false);
      navigation.push('guide');
    } catch (error) {}
  };

  useEffect(() => {
    firebase.doGetCurrentUserInfo().then((a) => {
      setName(a.name);
      setContact(a.contact);
      setImageProfile(a.profileImage);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>Setting</Text>
        <TouchableOpacity
          style={styles.saveContainer}
          onPress={() => saveData()}>
          <MaterialIcon
            size={24}
            name="save-alt"
            style={{marginHorizontal: 5}}
          />
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 260,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Image
            source={
              ImageProfile
                ? {uri: ImageProfile}
                : require('../../assets/png/userDefault.png')
            }
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
            }}
          />
          <TouchableOpacity
            onPress={() => pickeDocument()}
            style={styles.iconChangeImage}>
            <FaIcon name="exchange-alt" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <Gap height={7} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.4,
            borderBottomColor: '#000',
            width: 230,
          }}>
          <MaterialIcon
            name="drive-file-rename-outline"
            size={24}
            style={{marginVertical: 5}}
          />
          <TextInput
            value={Name}
            placeholder={Name}
            onChangeText={(text) => setName(text)}
            style={{width: 210}}
          />
        </View>
        <Gap height={7} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.4,
            borderBottomColor: '#000',
            width: 230,
          }}>
          <MaterialIcon
            name="drive-file-rename-outline"
            size={24}
            style={{marginVertical: 5}}
          />
          <TextInput
            value={Contact}
            placeholder={Contact}
            onChangeText={(text) => setContact(text)}
            style={{width: 210}}
          />
        </View>
      </View>
    </View>
  );
}

export default withFirebase(settingScreen);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    height: 110,
    width,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconChangeImage: {
    height: 30,
    width: 30,
    borderRadius: 12,
    backgroundColor: '#2D92cA',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  saveContainer: {
    position: 'absolute',
    top: 10,
    right: 5,
    height: 40,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
