import {array} from 'prop-types';
import React, {useEffect} from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';

import {Gap} from '../../components/atom';

export default function listDest() {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>
        Destinasi di daerah mu
      </Text>

      {[...Array(9)].map((a, idx) => (
        <View key={idx} style={styles.itemListContainer}>
          <Image
            source={require('../../assets/png/blackScreen.jpg')}
            style={{
              height: 80,
              width: 80,
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

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              alignSelf: 'flex-end',
              position: 'absolute',

              right: 40,
              top: 0,
              bottom: 0,
              width: 40,
              // position: 'absolute',
              backgroundColor: '#ff6da0',
            }}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              alignSelf: 'flex-end',
              position: 'absolute',

              right: 0,
              top: 0,
              bottom: 0,
              width: 40,
              // position: 'absolute',
              backgroundColor: '#a5faf0',
            }}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  itemListContainer: {
    left: 0,
    right: 0,
    height: 120,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    marginTop: 18,
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 10,
  },
});
