import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import { auth } from './Firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBesji-DsKOmhj_KI3yAsqAuNBT9cfHVo4",
  authDomain: "mutahhirbuyfy.firebaseapp.com",
  projectId: "mutahhirbuyfy",
  storageBucket: "mutahhirbuyfy.appspot.com",
  messagingSenderId: "573838071963",
  appId: "1:573838071963:web:d5860db66f0b4f40950e3e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();
// export var Provider = new firebase.auth.GoogleAuthProvider()
export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp()

export default firebase;
