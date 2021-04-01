import React from 'react';
import { Text, View ,TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import LoginScreen from './src/screens/LoginScreen';
import SigiUpScreen from './src/screens/SignUpScreen';
import TwisterListScreen from './src/screens/TwisterListScreen';
import TwisterEditScreen from './src/screens/TwisterEditScreen';

import { firebaseConfig } from './env';
import firebase from 'firebase';

require('firebase/firestore');

const Stack = createStackNavigator();

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TwisterEdit"
        screenOptions={{
          headerTitleStyle:{color:"#000000"},
          headerTitle:"Twister",
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SigiUpScreen} />
        <Stack.Screen name="TwisterList" component={TwisterListScreen} />
        <Stack.Screen name="TwisterEdit" component={TwisterEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

