import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {Gap} from '../../../components';
import {withFirebase} from '../../../config/firebase/firebaseContext';
import fireStore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ItemRender = ({item, firebase, index}) => {
  const [guideInfo, setGuideInfo] = useState({});
  const [requestStatus, setRequestStatus] = useState({});

  const myRequest = useSelector((state) => state.myRequest);
  const myUid = auth().currentUser.uid;

  const subscribePath = fireStore()
    .collection('user')
    .doc(myUid)
    .collection('myRequest')
    .doc(item.uidGuide);

  const cancelFunc = async () => {
    await firebase.doUserOrderToHistoryGuide(myUid, item.uidGuide, 'cancel');
  };

  useEffect(() => {
    firebase.doGetCurrentUserInfo(item.uidGuide).then((a) => setGuideInfo(a));

    const subscribe = subscribePath.onSnapshot((doc) =>
      setRequestStatus(doc.data()),
    );

    return () => {
      subscribe;
    };
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        // justifyContent: 'center',
        left: 0,
        right: 0,
        borderColor: '#000',
        borderWidth: 0.2,
        borderRadius: 10,
        flexDirection: 'row',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: guideInfo?.profileImage}}
          style={{height: 80, width: 80, resizeMode: 'cover', borderRadius: 25}}
        />
        <Gap width={10} />
        <View>
          <Text>{guideInfo.name}</Text>
          <Gap height={10} />
          <Text style={{textTransform: 'capitalize'}}>
            {myRequest[index]?.status == 'request'
              ? 'Menunggu konfirmasi'
              : 'Disetujui'}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexWrap: 'wrap',
          paddingHorizontal: 10,
          right: 0,
          position: 'absolute',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Text>status</Text>
      </View>
    </View>
  );
};

function onOrder({firebase, navigation}) {
  const [histodyData, setHistodyData] = useState([]);

  const myUid = auth().currentUser.uid;

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () =>
      firebase.doUserGetHistory(myUid).then((a) => setHistodyData(a)),
    );
    return () => {
      subscribe;
    };
  }, [navigation]);

  console.log(histodyData);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}>
      <FlatList
        data={histodyData}
        keyExtractor={(item) => item.uidGuide}
        renderItem={({item, index}) => (
          <ItemRender item={item} firebase={firebase} index={index} />
        )}
      />
    </View>
  );
}

export default withFirebase(onOrder);

const styles = StyleSheet.create({});
