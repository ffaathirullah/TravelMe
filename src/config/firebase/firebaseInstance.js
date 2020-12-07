// import React, {Component} from 'react';
import app from '@react-native-firebase/app';
import auth, {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Axios from 'axios';
// import {connect} from 'react-redux';

// import {doAuthLogout} from '../redux/action/authAction';

export default class Firebase {
  constructor() {
    this.db = database();
    this.auth = auth();
    this.storage = storage();
    this.myAccout = auth().currentUser?.uid;
    this.role = null;
  }

  //TODO Sendfile to Firebase

  sendFile = async (uris = [], nameReq) => {
    let cobaPromall = Promise.all(
      uris.map((s) => {
        return fetch(s.uri).then((x) => {
          return x.blob();
        });
      }),
    ).then((z) => {
      return z;
    });

    // let fileprom = await Promise.resolve(file);

    const getfullPaths = new Promise(async (res, rej) => {
      let getFile = await cobaPromall;

      let Fullpath = Promise.all(
        getFile.map((fileSend, index) => {
          const path = `reqeust/photo/${nameReq}/${nameReq}${index}`;
          return this.storage
            .ref(path)
            .put(fileSend)
            .then((nama) => {
              return nama.metadata.fullPath;
            })
            .catch((err) => rej(err));
        }),
      ).then((data) => {
        return data;
      });

      res(Fullpath);
      rej('gagal');
    });

    return new Promise(async (res, rej) => {
      try {
        const fullPath = await getfullPaths;

        let getDownloadURL = Promise.all(
          fullPath.map((path) => {
            return this.storage.ref(path).getDownloadURL();
          }),
        ).then((data) => {
          return data;
        });

        res(getDownloadURL);
      } catch (error) {
        rej(error);
      }
    });
  };

  //! AUTH //! AUTH //! AUTH //! AUTH //! AUTH
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
        `https://emsifa.github.io/api-wilayah-indonesia/api/province/${prov}.json`,
      );

      const {user} = await this.auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      await this.db
        .collection('user')
        .doc(user.uid)
        .set({role, email, name, contact, prov: data.name, city});
      if (role === 'guide') {
        await this.db
          .collection('guide')
          .doc(data.name)
          .collection(city)
          .doc(user.uid)
          .set({
            name,
            email,
            contact,
            role,
            province: data.name,
            city,
          });
      }
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
      return 'error';
    }
  };

  doLogout = async () => {
    try {
      await this.auth.signOut();
      return 'logout';
    } catch (error) {
      return 'error';
    }
  };

  //! GUIDE //! GUIDE //! GUIDE //! GUIDE //! GUIDE
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
    photos,
  ) => {
    try {
      const photoUploaded = await this.sendFile(photos, name);

      await this.db.collection('admin').doc('request').collection('place').add({
        prov,
        city,
        name,
        desc,
        price,
        openTime,
        closeTime,
        lat,
        lang,
        photo: photoUploaded,
      });

      return 'succeed';
    } catch (error) {
      return 'failed';
    }
  };

  doGuideAddPlaceWork = async (prov, city, idPlace, nameUser) => {
    try {
      await this.db
        .collection('place')
        .doc(prov)
        .collection(city)
        .doc(idPlace)
        .collection('listGuide')
        .doc(this.myAccout)
        .set({nameUser, uid: this.myAccout});

      await this.db
        .collection('user')
        .doc(this.myAccout)
        .collection('myPlace')
        .doc(idPlace)
        .set({status: 'enabled'});

      return 'succeed';
    } catch (error) {
      return 'failed';
    }
  };
  doGuideMinPlaceWork = async (prov, city, idPlace) => {
    try {
      await this.db
        .collection('place')
        .doc(prov)
        .collection(city)
        .doc(idPlace)
        .collection('listGuide')
        .doc(this.myAccout)
        .delete();

      await this.db
        .collection('user')
        .doc(this.myAccout)
        .collection('myPlace')
        .doc(idPlace)
        .delete();

      return 'succeed';
    } catch (error) {
      return 'failed';
    }
  };

  doGuideShowPlaceWork = async () => {
    try {
      const data = await this.db
        .collection('user')
        .doc(this.myAccout)
        .collection('workPlace')
        .get();

      return data;
    } catch (error) {}
  };

  //! ADMIN //! ADMIN //! ADMIN //! ADMIN //! ADMIN

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

  //! UNIV //! UNIV //! UNIV //! UNIV //! UNIV //! UNIV //! UNIV
  doSettingChangePhoto = async (fileURI, newName, newContact) => {
    try {
      const ref = await this.storage.ref(`photo/${this.myAccout}/myPhoto.png`);
      const send = await ref.put(fileURI);
      const getFullPathImage = await this.storage
        .ref(send.metadata.fullPath)
        .getDownloadURL();

      const updateDBUser = await this.db
        .collection('user')
        .doc(this.myAccout)
        .update({
          profileImage: getFullPathImage,
          contact: newContact,
          name: newName,
        });

      return 'sukses';
    } catch (error) {
      return error;
    }
  };

  doGetCurrentUserInfo = async () => {
    try {
      const data = await this.db.collection('user').doc(this.myAccout).get();
      return data.data();
    } catch (error) {
      return error;
    }
  };
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

  doCheckRole = async () => {
    try {
      const data = await this.db.collection('user').doc(this.myAccout).get();

      return data.data().role;
    } catch (error) {
      return null;
    }
  };
}
