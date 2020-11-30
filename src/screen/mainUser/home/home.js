import React from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import {Icon_travelMe_home, Icon_Search} from '../../../assets';

export default function home() {
  return (
    <View style={styles.container}>
      <View style={styles.bagianAtas}>
        <Icon_travelMe_home style={styles.logo}/>
        <Text style={styles.textTravelme}>TravelMe</Text>
      </View>
      <View>
        <Text style={styles.explore}>Explore Bandung!</Text>
      </View>
      <View styles={styles.search}>
        <TextInput placeholder="Cari Tempat Wisata, Cafe, dst" style={styles.txtInput}/>
        <Icon_Search style={styles.searchIcon}/>
      </View>
    </View>);
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{
  flex: 1,
  backgroundColor: 'white'
},
  bagianAtas: {
    flexDirection: 'row',
    marginTop: windowHeight * 0.0184729064,
    marginLeft: windowWidth * 0.04533333333
  },
  logo: {
    width: windowWidth * 0.06666666666,
    height: windowHeight * 0.03078817733
  },
  textTravelme: {
    fontSize: 20,
    color: '#2D929A',
    fontWeight: 'bold'
  },
  explore: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: windowHeight * 0.04802955665,
    marginLeft: windowWidth * 0.04533333333
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 10,
    height: windowHeight * 0.05911330049,
    width: windowWidth * 0.912,
    marginTop: windowHeight * 0.03201970443,
    marginLeft: windowWidth * 0.04533333333,
    marginRight:  windowWidth * 0.04533333333,
},
search: {
  position: 'relative',
},
searchIcon: {
  position: 'absolute',
  height: windowHeight * 0.05911330049,
  top: windowHeight * 0.04077832512,
  right: windowWidth * 0.04533333333,
  alignSelf: 'flex-end',
}
});
