import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon_backstackManipulation} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const DEVICE_WIDTH = Dimensions.get('window').width;

function BackgroundCarousel(props) {
  scrollRef = React.createRef();
  const [state, setState] = useState({
    selectedIndex: 0,
  });

  setSelectedIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    setState({selectedIndex});
  };

  const navigation = useNavigation();
  const {images} = props;
  const {selectedIndex} = state;

  return (
    <View style={{height: '35%', width: '100%', backgroundColor: 'red'}}>
      <FlatList
        horizontal
        pagingEnabled
        onMomentumScrollEnd={setSelectedIndex}
        ref={scrollRef}
        data={images}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <Image style={styles.backgroundImage} source={{uri: item}} />
        )}
      />

      <View style={[styles.backstackView, styles.circleBackstack]}>
        <TouchableOpacity
          style={styles.backStack}
          onPress={() => {
            navigation.pop();
          }}>
          <Icon_backstackManipulation />
        </TouchableOpacity>
      </View>
      <View style={styles.circleDiv}>
        {images.map((image, i) => (
          <View
            style={[
              styles.whiteCircle,
              {opacity: i === selectedIndex ? 1 : 0.5},
            ]}
            key={image}
            active={i === selectedIndex}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: Dimensions.get('window').width,
  },
  circleDiv: {
    position: 'absolute',
    bottom: 55,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    borderColor: '#000',
    borderWidth: 0.1,
    margin: 5,
    backgroundColor: '#fff',
    elevation: 3,
  },
  backStack: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 8,
    top: 8,
  },
  circleBackstack: {
    backgroundColor: '#fff',
    width: 40,
    height: 38,
    borderRadius: 20,
    overflow: 'hidden',
  },
  backstackView: {
    position: 'absolute',
    elevation: 5,
    top: 20,
    left: 16,
  },
});

export default BackgroundCarousel;
