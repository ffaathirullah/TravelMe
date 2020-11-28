import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/firestore';

export default class Firebase {
  constructor() {
    this.db = database();
    this.auth = auth();
    this.role = null;
  }

  doAuthCreateNewUser = async (email, password, role, name) => {
    try {
      const {user} = await this.auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      const dbUser = await this.db
        .collection('user')
        .doc(user.uid)
        .set({role, email, name});
      return user;
    } catch (error) {
      return 'error';
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
      return error;
    }
  };
}
