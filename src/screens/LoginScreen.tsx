import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Alert} from 'react-native';
import Button from '../component/LoginButton';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import firebase from 'firebase';


export default function LoginSceen(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function handlePress() {
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then((userCredential) => {
                const { user } = userCredential;
                console.log(user.uid);
            })
            .catch((error) => {
                Alert.alert("ログイン失敗")
            });
    };

    return(
        <View style={styles.container}>
            <FontAwesome5Icon name="kiwi-bird" size={80} color='#00acee'/>
            <Text style={styles.title}>Twisterにログイン</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => {setEmail(text); }}
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
                secureTextEntry
                textContentType='password'
            />
            <Button
                lavel="ログイン"
                onPress={handlePress}
            />
            <Text　style={styles.signinLinkText} >アカウント作成はこちら</Text>
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
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,0.1)',
        marginBottom:15,
        width:250,
        color:'rgba(0,0,0,0.5)',
    },
    signinLinkText:{
        color:'#0080ff',
        marginTop:8,
    },
});
