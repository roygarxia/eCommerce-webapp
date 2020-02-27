import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBncoNpPKy0-f4TE3bF_b2FwjCfizWnJvA",
    authDomain: "ecom-db-6adee.firebaseapp.com",
    databaseURL: "https://ecom-db-6adee.firebaseio.com",
    projectId: "ecom-db-6adee",
    storageBucket: "ecom-db-6adee.appspot.com",
    messagingSenderId: "778667098204",
    appId: "1:778667098204:web:fc40b7f5e5b9f05cae6699",
    measurementId: "G-4917D7D474"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;