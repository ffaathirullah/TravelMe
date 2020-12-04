import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import {Icon_travelMe_home, Icon_Search, Image_Air_Terjun, Image_Gunung} from '../../../assets';
import {BottomIcon, Category} from '../../../components';

export default function home({navigation, props}) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.bagianAtas}>
        <Icon_travelMe_home style={styles.logo}/>
        <Text style={styles.textTravelme}>TravelMe</Text>
        <View style={{
            alignItems: 'center',
            flexDirection: 'row',
            height: 40,
            width: 130,
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,.1)'
          }}>
          <Image source={require('../../../assets/png/iconLocation.png')} style={{
              height: 13,
              width: 13,
              resizeMode: 'cover',
              marginHorizontal: 8
            }}/>
          <Text>Text lokasi</Text>
        </View>
      </View>
      <View styles={styles.search}>
        <TextInput placeholder="Cari Tempat Wisata, Cafe, dst" style={styles.txtInput}/>
        <Icon_Search style={styles.searchIcon}/>
      </View>

      <View style={styles.layanan}>
        <View style={styles.iconLayanan}>
          <BottomIcon title="Hutan Raya" type="layanan"/>
          <BottomIcon title="Air Terjun" type="layanan"/>
          <BottomIcon title="Gunung" type="layanan"/>
          <BottomIcon title="Danau" type="layanan"/>
          <BottomIcon title="Museum" type="layanan"/>
          <BottomIcon title="Peternakan" type="layanan"/>
          <BottomIcon title="Bukit" type="layanan"/>
          <BottomIcon title="Perkebunan" type="layanan"/>
        </View>
      </View>

      <View style={{
          flex: 1,
          backgroundColor: 'white',
          paddingTop: 16
        }}>
        <Text style={{
            fontSize: 15,
            fontWeight: '700',
            paddingHorizontal: 20
          }}>
          Rekomendasi Tempat
        </Text>

        <View style={{
            height: 130,
            marginTop: 16
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity  onPress={() => navigation.navigate('listDetail')}>
            <Category navigation={navigation} imageUri={require('../../../assets/image/image.jpg')} name="Air Terjun"/ >
            </TouchableOpacity>
            <TouchableOpacity>
            <Category imageUri={require('../../../assets/image/image2.jpg')} name="Gunung"/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Category imageUri={require('../../../assets/image/image.jpg')} name="Air Terjun"/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Category imageUri={require('../../../assets/image/image2.jpg')} name="Gunung"/>
            </TouchableOpacity>
          </ScrollView>
        </View>

      </View>
    </View>
  </ScrollView>);
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

container: {
flex : 1,
backgroundColor: 'white'
  },
  bagianAtas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  logo: {
    width: windowWidth * 0.06666666666,
    height: windowHeight * 0.03078817733
  },
  textTravelme: {
    fontSize: 20,
    color: '#2D929A',
    fontWeight: 'bold',
    marginLeft: -120
  },
  explore: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 10,
    height: windowHeight * 0.05911330049,
    width: windowWidth * 0.912,
    marginTop: windowHeight * 0.03201970443,
    marginLeft: windowWidth * 0.04533333333,
    marginRight: windowWidth * 0.04533333333
  },
  search: {
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    height: windowHeight * 0.05911330049,
    top: windowHeight * 0.04077832512,
    right: windowWidth * 0.04533333333,
    alignSelf: 'flex-end'
  },
  layanan: {
    paddingLeft: windowWidth * 0.04533333333,
    paddingRight: windowWidth * 0.04533333333
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight * 0.02955665024,
    flexWrap: 'wrap'
  }
});
