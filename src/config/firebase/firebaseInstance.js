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
      return error;
    }
  };

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
}
