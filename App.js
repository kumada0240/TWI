import React from 'react';
import { Text, View ,TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import LoginScreen from './src/screens/LoginScreen';
import SigiUpScreen from './src/screens/SignUpScreen';

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
        initialRouteName="Login"
        screenOptions={{
          headerTitleStyle:{color:"#000000"},
          headerTitle:"Twister",
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SigiUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

