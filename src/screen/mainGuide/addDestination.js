import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocPicker from 'react-native-document-picker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {Gap} from '../../components';

export default function addDestination() {
  const [Title, setTitle] = useState('');
  const [Descr, setDescr] = useState('');
  const [Photo, setPhoto] = useState([]);
  const [date, setDate] = useState(new Date(1598051730000));
  const [dateEnd, setDateEnd] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [PickLat, setPickLat] = useState(0);
  const [PickLng, setPickLng] = useState(0);

  const pickDocument = async () => {
    try {
      const results = await DocPicker.pickMultiple({
        type: [DocPicker.types.images],
      });
      console.log(results);
      //   for (const res of results) {
      //     console.log(
      //       res.uri,
      //       res.type, // mime type
      //       res.name,
      //       res.size,
      //     );
      //   }
    } catch (err) {
      if (DocPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  //! Time Func //! Time Func //! Time Func //! Time Func //! Time Func
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowEnd(Platform.OS === 'ios');
    setDateEnd(currentDate);
  };

  const ShowPicker = () => {
    setShow(true);
  };
  const ShowPickerEnd = () => {
    setShowEnd(true);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 6,
          right: 7,
          height: 40,
          paddingHorizontal: 7,
          borderRadius: 7,
          backgroundColor: '#2D929A',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#fafafa',
          elevation: 3,
        }}>
        <Text style={{color: '#fff'}}>Kirim Request</Text>
      </TouchableOpacity>
      <Gap height={10} />
      <Text>Tambah destinasi wisata baru</Text>
      <Gap height={20} />
      <View style={styles.inputContainer}>
        <TextInput placeholder="nama tempat" style={{flexGrow: 1}} />
      </View>

      <Gap height={10} />
      <View style={styles.timeSection}>
        <TouchableOpacity
          onPress={() => ShowPicker()}
          style={styles.timeContainer}>
          <Text>Jam buka : </Text>
          <View style={styles.timeText}>
            <Text style={{fontSize: 24}}>
              {date.getHours()}:{date.getMinutes()}
            </Text>
          </View>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity
          onPress={() => ShowPickerEnd()}
          style={styles.timeContainer}>
          <Text>Jam tutup : </Text>
          <View style={styles.timeText}>
            <Text style={{fontSize: 24}}>
              {dateEnd.getHours()}:{dateEnd.getMinutes()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Gap height={10} />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Deskripsi Singkat"
          numberOfLines={10}
          multiline={true}
          style={{
            flexGrow: 1,
            textAlignVertical: 'top',
            flexWrap: 'wrap',
          }}
        />
      </View>
      <Gap height={10} />
      <View style={{flexDirection: 'row'}}>
        <Text>Unggah foto : </Text>
        <TouchableOpacity onPress={() => pickDocument()}>
          <FeatherIcon name="file-plus" size={30} />
        </TouchableOpacity>
      </View>
      <Gap height={10} />
      <MapView
        onLongPress={(a) => {
          setPickLat(a.nativeEvent.coordinate.latitude);
          setPickLng(a.nativeEvent.coordinate.longitude);
        }}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        style={{left: 0, right: 0, height: 600}}
        initialRegion={{
          latitude: -6.973145762369738,
          longitude: 107.63191457303124,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          title={Title}
          description={Descr}
          coordinate={{latitude: PickLat, longitude: PickLng}}
        />
      </MapView>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
      {showEnd && (
        <DateTimePicker
          testID="dateTimePicker2"
          value={dateEnd}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={onChangeEnd}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#909090',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timeContainer: {flexDirection: 'row', alignItems: 'center'},
  timeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timeText: {
    width: 70,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderColor: '#909090',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
