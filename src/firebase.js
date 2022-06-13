import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNfsrOhLLPHC2yz1jL_a1cdz8E3AUTBKM",
  authDomain: "clone-5d866.firebaseapp.com",
  projectId: "clone-5d866",
  storageBucket: "clone-5d866.appspot.com",
  messagingSenderId: "370512890979",
  appId: "1:370512890979:web:e141e9e51c22a37c1b3c56",
  measurementId: "G-D56NG2TD4Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
