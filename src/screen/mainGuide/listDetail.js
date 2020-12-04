import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Gap} from '../../components';

const {height, width} = Dimensions.get('window');

export default function listDetail({route}) {
  const {type, index} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <Image
          source={require('../../assets/png/dummyPemandangan.png')}
          style={{height: 350, width}}
        />
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            width: 150,
            position: 'absolute',
            bottom: 0,
            right: 0,
            borderTopLeftRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            elevation: 1,
            overflow: 'hidden',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ff6da0',
              flex: 1,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              firebase
                .doAdminActionVerifPlaceAccept(data, myId)
                .then((a) => navigation.pop())
            }>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#a5faf0',
              flex: 1,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              firebase
                .doAdminActionVerifPlaceReject(myId)
                .then((a) => navigation.pop())
            }>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginVertical: 24, marginHorizontal: 16}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {type} {index}
        </Text>
        <Gap height={17} />
        <Text>jamBuka - jamTutup</Text>
        <Gap height={13} />
        <Text>Provinsi - Kota</Text>
      </View>

      <View style={{marginHorizontal: 16}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Deskripsi Singkat
        </Text>
        <Gap height={8} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel
          mollitia quae eius dignissimos, fugiat nesciunt veritatis laudantium
          magni nemo expedita, sequi odit facilis alias.{' '}
        </Text>
      </View>
      <View
        style={{
          width,
          bottom: 0,
          position: 'absolute',
          height: 60,
          elevation: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          // borderTopColor: '#000',
          borderTopWidth: 0.1,
        }}>
        <Image
          source={require('../../assets/png/iconMap.png')}
          style={{height: 20, width: 20, marginHorizontal: 10}}
        />
        <Text>Lihat Peta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
