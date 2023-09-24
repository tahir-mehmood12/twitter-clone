import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5TuBRQIaIC3JL1MwlCpZls6qucTI1vc0",
  authDomain: "twitter-clone-f7ac8.firebaseapp.com",
  projectId: "twitter-clone-f7ac8",
  storageBucket: "twitter-clone-f7ac8.appspot.com",
  messagingSenderId: "917678484389",
  appId: "1:917678484389:web:27583f9c1c3d409cf5564c",
  measurementId: "G-C0LG3H3TSZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export const storage = firebaseApp.storage();

export { auth, db };
