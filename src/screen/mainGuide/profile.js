import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap} from '../../components/atom';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {withFirebase} from '../../config/firebase/firebaseContext';
import FeatherIcon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

const WorkPlaceCard = ({item, prov, city, firebase}) => {
  const [Data, setData] = useState({});
  useEffect(() => {
    firebase
      .doGuideGetPlaceInfo(prov, city, item.idWorkPlace)
      .then((a) => setData(a));
  }, []);

  console.log(Data);

  return (
    <View style={styles.workPlaceCardContainer}>
      <TouchableOpacity
        onPress={() =>
          firebase.doGuideMinPlaceWork(prov, city, item.idWorkPlace)
        }
        style={{
          position: 'absolute',
          top: 5,
          right: 7,
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: 'red',
        }}>
        <FeatherIcon name="trash" size={20} />
      </TouchableOpacity>
      <Image
        source={require('../../assets/png/dummyPemandangan.png')}
        style={{height: 60, width: 60}}
      />
      <Gap width={10} />
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{Data.name}</Text>
        <Gap height={10} />
        <Text style={{textTransform: 'capitalize'}}>
          {Data.prov}, {Data.city}
        </Text>
      </View>
    </View>
  );
};

function profile({navigation, firebase}) {
  const userInfo = useSelector((state) => state.userInfo);
  const workPlace = useSelector((state) => state.workPlace);

  const dispatch = useDispatch();

  const logoutFunc = async () => {
    const logoutProc = await firebase.doLogout();
    if (logoutProc == 'logout') {
      dispatch({type: 'LOGOUTADMINUSER'});
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>Profile</Text>
        <View style={styles.settingContainer}>
          <TouchableOpacity onPress={() => navigation.push('setting')}>
            <MaterialIcon size={24} name="settings" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => logoutFunc()}>
            <MaterialIcon size={24} name="logout" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 260,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {userInfo.profileImage ? (
          <Image
            source={{uri: userInfo.profileImage && userInfo.profileImage}}
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
            }}
          />
        ) : (
          <View
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
              backgroundColor: 'black',
            }}
          />
        )}

        <Gap height={7} />
        <Text style={{color: '#767676', fontSize: 14}}>Guide</Text>
        <Gap height={7} />
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{userInfo.name}</Text>
        <Gap height={7} />
        <Text style={{fontSize: 14}}>{userInfo.contact} </Text>
        <Gap height={7} />
        <Text>Rating User</Text>
      </View>
      <Gap height={30} />

      <View style={{paddingHorizontal: 20}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Wilayah Kerja Saya
        </Text>
        <Gap height={15} />
        <FlatList
          scrollEnabled={false}
          data={workPlace}
          renderItem={({item}) => (
            <WorkPlaceCard
              item={item}
              prov={userInfo.prov}
              city={userInfo.city}
              firebase={firebase}
            />
          )}
          keyExtractor={(item) => item.idWorkPlace}
        />
      </View>

      <Gap height={30} />

      <View style={styles.reviewContainer}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Review</Text>
        <Gap height={15} />
        <View
          style={{
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            paddingHorizontal: 7,
            paddingVertical: 15,
            elevation: 3,
            marginVertical: 5,
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Nama pereview
            </Text>
            <Text>20/10/2020</Text>
          </View>
          <Text>Rating rating</Text>
          <Gap height={15} />
          <Text style={{letterSpacing: 1, fontSize: 16}} adjustsFontSizeToFit>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>

        <View
          style={{
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            paddingHorizontal: 7,
            paddingVertical: 15,
            elevation: 3,
            borderRadius: 10,
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Nama pereview 2
            </Text>
            <Text>20/10/2020</Text>
          </View>
          <Text>Rating rating</Text>
          <Gap height={15} />
          <Text style={{letterSpacing: 1, fontSize: 16}} adjustsFontSizeToFit>
            lorem 20
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default withFirebase(profile);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    height: 110,
    width,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewContainer: {paddingHorizontal: 20},
  settingContainer: {
    position: 'absolute',
    top: 10,
    right: 5,
    height: 40,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  workPlaceCardContainer: {
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    height: 100,
    paddingHorizontal: 7,
    paddingVertical: 15,
    elevation: 3,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
