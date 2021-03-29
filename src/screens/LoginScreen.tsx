import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';

export default function LoginSceen(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Twisterにログイン</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => {setPassword(text); }}
                autoCapitalize='none'
                keyboardType='email-address'
                placeholder="Email Adress"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(text) => {setPassword(text); }}
                autoCapitalize='none'
                placeholder="Password"
                textContentType='password'
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
    　flex:1,
      alignItems:'center',
      justifyContent: 'center',
    },
    title:{
        color:'#000000',
        fontSize:32,
        marginBottom:15,
        fontWeight:'bold',
    },
    input:{
        fontSize:16,
        height:48,
        borderWidth:1,
        marginBottom:15,
        width:250,
        color:'rgba(0,0,0,0.5)',
    },
});
