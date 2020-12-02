import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Gap} from '../../components/atom';

const {width, height} = Dimensions.get('window');

export default function profile() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: 110,
          width,
          elevation: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>Profile</Text>
      </View>
      <View
        style={{
          height: 260,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 120,
            width: 120,
            borderRadius: 60,
            backgroundColor: 'black',
          }}
        />
        <Gap height={7} />
        <Text>Role user</Text>
        <Gap height={7} />
        <Text>Nama User</Text>
        <Gap height={7} />
        <Text>contact user</Text>
        <Gap height={7} />
        <Text>Rating User</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
