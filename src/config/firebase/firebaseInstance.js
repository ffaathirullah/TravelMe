import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/firestore';
import Axios from 'axios';

export default class Firebase {
  constructor() {
    this.db = database();
    this.auth = auth();
    this.role = null;
  }
  //TODO please try and check //TODO please try and check //TODO please try and check
  doAuthCreateNewUser = async (
    name,
    email,
    password,
    contact,
    role,
    prov,
    city,
  ) => {
    try {
      const {data} = await Axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/provinsi/${prov}`,
      );

      const {user} = await this.auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      await this.db
        .collection('user')
        .doc(user.uid)
        .set({role, email, name, contact, prov: data.nama, city});
      if (role === 'guide') {
        await this.db
          .collection('guide')
          .doc(data.nama)
          .collection(city)
          .doc(user.uid)
          .set({
            name,
            email,
            contact,
            role,
            province: data.nama,
            city,
          });
      }
      return user;
    } catch (error) {
      return 'error';
    }
  };
  //TODO please try and check //TODO please try and check //TODO please try and check
  doAuthLoginUser = async (email, password) => {
    try {
      const {user} = await this.auth.signInWithEmailAndPassword(
        email,
        password,
      );
      const dbUser = await this.db.collection('user').doc(user.uid).get();

      return dbUser;
    } catch (error) {
      return 'error';
    }
  };
  //TODO please try and check //TODO please try and check //TODO please try and check
  doListGetLocation = async (prov, city) => {
    try {
      const data = await this.db
        .collection('place')
        .doc(prov)
        .collection(city)
        .get();

      let list = [];

      data.forEach((doc) => {
        list.push(doc.data());
      });

      return list;
    } catch (error) {
      return 'error';
    }
  };
  //TODO please try and check //TODO please try and check //TODO please try and check
  doUserGetGuideList = async (prov, city) => {
    try {
      const snapshot = await this.db
        .collection('guide')
        .doc(prov)
        .collection(city)
        .get();

      if (snapshot.empty) {
        return [];
      }

      let data = [];

      snapshot.forEach((doc) => data.push(doc.data()));

      return data;
    } catch (error) {
      return error;
    }
  };

  //! NOT YET  //! NOT YET  //! NOT YET  //! NOT YET
  doGuideSendPlace = async (
    prov,
    city,
    name,
    desc,
    price,
    openTime,
    closeTime,
    lat,
    lang,
  ) => {
    try {
      await this.db
        .collection('admin')
        .doc('request')
        .collection('place')
        .add({prov, city, name, desc, price, openTime, closeTime, lat, lang});

      return 'succeed';
    } catch (error) {
      return 'failed';
    }
  };

  //TODO please try and check //TODO please try and check //TODO please try and check
  doAdminGetRequestLocation = async () => {
    try {
      const data = await this.db
        .collection('admin')
        .doc('request')
        .collection('place')
        .get();

      let list = [];

      data.forEach((doc) => {
        list.push({id: doc.id, data: doc.data()});
      });

      return list;
    } catch (error) {
      return 'error';
    }
  };
  //TODO please try and check //TODO please try and check //TODO please try and check
  doAdminShowVerifUser = async () => {
    try {
      const data = await this.db
        .collection('admin')
        .doc('request')
        .collection('verifUser')
        .get();

      let list = [];

      data.forEach((doc) => {
        list.push(doc.data());
      });

      return list;
    } catch (error) {}
  };

  doAdminActionVerifPlaceAccept = async (data, id) => {
    try {
      await this.db
        .collection('place')
        .doc(data.prov)
        .collection(data.city)
        .add(data);

      await this.db
        .collection('admin')
        .doc('request')
        .collection('place')
        .doc(id)
        .delete();

      return 'sukses';
    } catch (error) {
      return error;
    }
  };

  doAdminActionVerifPlaceReject = async (id) => {
    try {
      await this.db
        .collection('admin')
        .doc('request')
        .collection('place')
        .doc(id)
        .delete();
      return 'sukses';
    } catch (error) {
      return error;
    }
  };
}
