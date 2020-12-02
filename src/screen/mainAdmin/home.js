import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withFirebase} from '../../config/firebase/firebaseContext';

import {SharedElement} from 'react-navigation-shared-element';

const ItemList = (props, navigation) => {
  const {data} = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.push('detailPlace', {myId: props.id, data})}>
      <View
        style={{
          marginVertical: 4,
          borderWidth: 0.2,
          borderColor: '#000',
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderRadius: 7,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <SharedElement id={`item.${props.id}.photo`}>
            <View
              style={[
                styles.image,
                {
                  width: 70,
                  height: 70,
                  backgroundColor: 'black',
                  marginHorizontal: 10,
                },
              ]}
            />
          </SharedElement>
          <Text>{data.name}</Text>
        </View>

        <View style={{}}>
          <Text>{data.prov} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function home({firebase, navigation}) {
  const [listRequest, setListRequest] = useState(null);
  useEffect(() => {
    firebase.doAdminGetRequestLocation().then((a) => setListRequest(a));
  }, []);
  return (
    <View>
      <FlatList
        style={{margin: 20}}
        data={listRequest}
        keyExtractor={(a) => a.id}
        renderItem={({item}) => ItemList(item, navigation)}
      />
    </View>
  );
}

export default withFirebase(home);

const styles = StyleSheet.create({});
