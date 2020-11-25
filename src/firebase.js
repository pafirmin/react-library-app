import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDgUmKPpsHUqSgLxP_5Vu4MMlTits5UqdQ",
  authDomain: "library-99926.firebaseapp.com",
  databaseURL: "https://library-99926.firebaseio.com",
  projectId: "library-99926",
  storageBucket: "library-99926.appspot.com",
  messagingSenderId: "139050339935",
  appId: "1:139050339935:web:f40137e2ecdc029aa615ea",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
