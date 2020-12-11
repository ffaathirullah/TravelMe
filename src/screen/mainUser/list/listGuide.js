import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import StarRating from 'react-native-star-rating';
import {useSelector} from 'react-redux';
import {Gap} from '../../../components';
import {withFirebase} from '../../../config/firebase/firebaseContext';

import auth from '@react-native-firebase/auth';

const ItemRender = ({item, firebase, navigation, idPlace}) => {
  const [data, setData] = useState(null);
  const myUid = auth().currentUser.uid;
  const date = new Date().getTime();

  const myRequest = useSelector((state) => state.myRequest);

  const alreadyReq = myRequest.map((item) => item.uidGuide).includes(data?.id);

  useEffect(() => {
    firebase.doGetCurrentUserInfo(item.uid).then((a) => setData(a));
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigation.push('seekGuideProfile', {data})}
      style={{
        flexDirection: 'row',
        marginVertical: 7,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: '#fff',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: data?.profileImage}}
          style={{height: 60, width: 60, borderRadius: 20}}
        />
        <View style={{marginLeft: 10, justifyContent: 'center'}}>
          <Text>{data?.name || 'nama Guide'}</Text>
          <Gap height={7} />
          <StarRating
            disabled={true}
            maxStars={5}
            rating={data?.rating || 0}
            starSize={20}
            fullStarColor={'#ffa000'}
          />
        </View>
      </View>
      <View style={{alignSelf: 'center', position: 'absolute', right: 10}}>
        <TouchableOpacity
          onPress={() => firebase.doUserReqGuide(myUid, data.id, idPlace, date)}
          disabled={alreadyReq}
          style={{
            width: 100,
            backgroundColor: alreadyReq ? '#909090' : '#2D929A',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text numberOfLines={2} style={{textAlign: 'center', color: '#fff'}}>
            {alreadyReq ? 'Permintaan Terkirim' : 'Kirim Permintaan'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

function listGuide({route, firebase, navigation}) {
  const {data, idPlace} = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
      }}>
      <Text style={{fontSize: 20, textTransform: 'capitalize'}}>
        Daftar Guide di {'DATA NAMA TEMPAT'}
      </Text>
      <Gap height={20} />
      <FlatList
        keyExtractor={(item, idx) => idx.toString()}
        data={data}
        renderItem={({item}) => (
          <ItemRender
            item={item}
            firebase={firebase}
            navigation={navigation}
            idPlace={idPlace}
          />
        )}
      />
    </View>
  );
}

export default withFirebase(listGuide);

const styles = StyleSheet.create({});
