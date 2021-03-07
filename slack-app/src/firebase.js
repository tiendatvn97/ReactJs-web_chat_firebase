// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDATUk45FFw3bPYYSsYCPhuRzZGpZW554U",
  authDomain: "slack-app-38656.firebaseapp.com",
  projectId: "slack-app-38656",
  storageBucket: "slack-app-38656.appspot.com",
  messagingSenderId: "943898548543",
  appId: "1:943898548543:web:ffe876c2d52f7e976a5b8a",
  measurementId: "G-CKKF51ZX1F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, db };
