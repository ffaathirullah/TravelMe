import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Linking,
  Platform,
} from 'react-native';
import {Gap} from '../../components';
import MapView, {Marker} from 'react-native-maps';

const {height, width} = Dimensions.get('window');

export default function listDetail({route, navigation}) {
  const {type, index} = route.params;

  const OpenMap = (lat, lng) => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${lat},${lng}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
      style={{backgroundColor: 'white'}}>
      <View>
        <View>
          <Image
            source={require('../../assets/png/dummyPemandangan.png')}
            style={{height: 350, width}}
          />
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ff6da0',
                opacity: 0.8,
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
                opacity: 0.8,
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
            magni nemo expedita, sequi odit facilis alias.
          </Text>
        </View>
        <Gap height={15} />
        <View style={{marginHorizontal: 16}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            ulasan(10 orang)
          </Text>
          {[...Array(4)].map((item, idx) => (
            <View key={idx}>
              <Gap height={8} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  elevation: 3,
                  backgroundColor: '#fff',
                  height: 80,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('../../assets/png/userDefault.png')}
                  style={{
                    height: 40,
                    width: 40,
                    resizeMode: 'cover',
                    borderRadius: 20,
                    marginHorizontal: 10,
                  }}
                />
                <View>
                  <Text>nama review</Text>
                  <Text>rating</Text>
                  <Text>pesan</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View
        style={{
          width,
          height: 60,
          // elevation: 2,
          // borderTopColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          // borderTopWidth: 0.1,
          paddingHorizontal: 10,
          paddingVertical: 3,
        }}>
        <TouchableOpacity
          // onPress={() => navigation.push('guideMap')}
          onPress={() => OpenMap(-6.974027994937152, 107.63036776461826)}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            width: width - 20,
            borderColor: '#2D929A',
            height: 37,
            borderRadius: 7,
            paddingVertical: 7,
            paddingHorizontal: 5,
          }}>
          <Image
            source={require('../../assets/png/iconMap.png')}
            style={{height: 20, width: 20, marginHorizontal: 10}}
          />
          <Text style={{color: '#2D929A'}}>Lihat Peta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
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
  },
});
