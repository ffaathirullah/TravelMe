import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components/atom';

export default function listDest() {
  return (
    <View style={{backgroundColor: '#fff', flex: 1, paddingHorizontal: 20}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>
        Destinasi di daerah mu
      </Text>
      <View
        style={{
          left: 0,
          right: 0,
          height: 120,
          flexDirection: 'row',
          borderRadius: 10,
          backgroundColor: 'white',
          elevation: 3,
          marginTop: 18,
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        {/* <Image /> */}
        <View
          style={{
            height: 80,
            width: 80,
            backgroundColor: 'black',
            marginHorizontal: 10,
          }}
        />

        <View>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            nama tempat tujuan
          </Text>
          <Gap height={10} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/png/iconClock.png')}
              style={{height: 14, width: 14, marginRight: 10}}
            />
            <Text>jam jadwal</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
