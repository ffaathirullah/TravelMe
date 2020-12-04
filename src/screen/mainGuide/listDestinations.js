import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Gap} from '../../components';

export default function listDestinations({route, navigation}) {
  const {type} = route.params;
  console.log(type);

  return (
    <ScrollView
      style={{paddingHorizontal: 15, flex: 1, backgroundColor: 'white'}}>
      <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
        Pilih Tempat Kerja Anda
      </Text>
      {[...Array(9)].map((a, idx) => (
        <TouchableOpacity
          onPress={() => navigation.push('detail', {type, index: idx})}
          key={idx}
          style={styles.itemListContainer}>
          <Image
            source={require('../../assets/png/dummyPemandangan.png')}
            style={{
              height: 80,
              width: 80,
              marginHorizontal: 10,
            }}
          />

          <View>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {type} {idx}
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
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemListContainer: {
    overflow: 'hidden',
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
