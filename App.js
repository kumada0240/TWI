import React from 'react';
import { Text, View ,TextInput} from 'react-native';

import LoginScreens from './src/screens/LoginScreen';

import firebase from 'firebase';

export const  firebaseConfig = {
  apiKey: "AIzaSyC-td2eWeEENnUvYAdi2YvaA9mPLJxpCzg",
  authDomain: "twister-4c86d.firebaseapp.com",
  projectId: "twister-4c86d",
  storageBucket: "twister-4c86d.appspot.com",
  messagingSenderId: "631835384050",
  appId: "1:631835384050:web:bd31a96dc9c3f156de186b"
};

require('firebase/firestore');

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return(
    <LoginScreens />
  );
};

