import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Icon_travelMe_home} from '../../../assets';

export default function home() {
  return (
  <View>
    <View style={styles.bagianAtas}>
      <Icon_travelMe_home style={styles.logo}/>
      <Text style={styles.textTravelme}>TravelMe</Text>
    </View>
    <View>
      <Text style={styles.explore}>Explore Bandung!</Text>
    </View>
  </View>);
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
  }
});
