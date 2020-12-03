import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Gap} from '../../components/atom';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

export default function profile() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: 110,
          width,
          elevation: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>Profile</Text>
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 5,
            height: 40,
            width: 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <MaterialIcon size={24} name="settings" />
          <MaterialIcon size={24} name="logout" />
        </View>
      </View>
      <View
        style={{
          height: 260,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 120,
            width: 120,
            borderRadius: 60,
            backgroundColor: 'black',
          }}
        />
        <Gap height={7} />
        <Text style={{color: '#767676', fontSize: 14}}>Role user</Text>
        <Gap height={7} />
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Nama User</Text>
        <Gap height={7} />
        <Text style={{fontSize: 14}}>asalcontact@mailnya.com</Text>
        <Gap height={7} />
        <Text>Rating User</Text>
      </View>
      <Gap height={30} />

      <View style={{paddingHorizontal: 20}}>
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
    </View>
  );
}

const styles = StyleSheet.create({});
