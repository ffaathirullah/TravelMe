import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';
import {withFirebase} from '../../config/firebase/firebaseContext';

import {Gap} from '../../components/atom';
import {firebase} from '@react-native-firebase/auth';

const {width, height} = Dimensions.get('window');

const headerIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

function detailPlace({route, navigation, firebase}) {
  const {myId, data} = route.params;

  console.log(data);
  return (
    <View style={{flex: 1}}>
      <View>
        <SharedElement id={`item.${myId}.photo`}>
          <View style={{width, height: 350, backgroundColor: 'red'}} />
        </SharedElement>
        <Animatable.View
          useNativeDriver={true}
          animation={headerIn}
          delay={150}
          easing="ease-in-back"
          duration={500}
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
          }}>
          <TouchableOpacity
            onPress={() =>
              firebase
                .doAdminActionVerifPlaceAccept(data, myId)
                .then((a) => navigation.pop())
            }>
            <Text>V</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              firebase
                .doAdminActionVerifPlaceReject(myId)
                .then((a) => navigation.pop())
            }>
            <Text>X</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>

      <View style={{marginVertical: 24, marginHorizontal: 16}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{data.name} </Text>
        <Gap height={17} />
        <Text>
          {data['open']} - {data['close']}
        </Text>
        <Gap height={13} />
        <Text>
          {data.prov} - {data.city}
        </Text>
      </View>

      <View style={{marginHorizontal: 16}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Deskripsi Singkat
        </Text>
        <Gap height={8} />
        <Text>{data.description}</Text>
      </View>
    </View>
  );
}

detailPlace.sharedElements = (route, otherRoute, showing) => {
  const {myId} = route.params;
  return [
    {
      id: `item.${myId}.photo`,
    },
  ];
};

export default withFirebase(detailPlace);

const styles = StyleSheet.create({});
