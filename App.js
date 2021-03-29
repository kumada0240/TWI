import React from 'react';
import { Text, View ,TextInput} from 'react-native';
import LoginScreens from './src/screens/LoginScreen';

import { firebaseConfig } from './env';
import firebase from 'firebase';

require('firebase/firestore');

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return(
    <LoginScreens />
  );
};

