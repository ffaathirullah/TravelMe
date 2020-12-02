import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Gap} from '../../components/atom';

const {width, height} = Dimensions.get('window');

export default function home() {
  return (
    <View style={{backgroundColor: '#fff', flex: 1, paddingHorizontal: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
          alignItems: 'center',
        }}>
        <Text style={styles.textTravelme}>TravelMe</Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            height: 40,
            width: 130,
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,.1)',
          }}>
          <Image
            source={require('../../assets/png/iconLocation.png')}
            style={{
              height: 13,
              width: 13,
              resizeMode: 'cover',
              marginHorizontal: 8,
            }}
          />
          <Text>Text lokasi</Text>
        </View>
      </View>
      <Gap height={35} />
      <View>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Dalam Proses</Text>
        <Gap height={16} />
        <View
          style={{
            left: 0,
            right: 0,
            height: 80,
            paddingHorizontal: 20,
            elevation: 3,
            borderRadius: 10,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>
              nama tempat tujuan
            </Text>
            <Gap height={5} />
            <Text>oleh: nama pemesan</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#2D929A',
                height: 25,
                width: 70,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff'}}>Selesai</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Gap height={30} />
      <View>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Pesanan Baru</Text>
        <Gap height={16} />
        <View
          style={{
            left: 0,
            right: 0,
            height: 80,
            backgroundColor: '#fff',
            elevation: 3,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>
              nama tempat tujuan
            </Text>
            <Gap height={5} />
            <Text>oleh: nama pemesan</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#2D929A',
                height: 25,
                width: 70,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff'}}>Terima</Text>
            </TouchableOpacity>
            <Gap height={5} />
            <TouchableOpacity
              style={{
                backgroundColor: '#EBEFEF',
                height: 25,
                width: 70,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Tolak</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textTravelme: {
    fontSize: 20,
    color: '#2D929A',
    fontWeight: 'bold',
  },
});
