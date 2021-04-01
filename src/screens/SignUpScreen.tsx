import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Alert} from 'react-native';
import Button from '../component/LoginButton';;
import firebase from 'firebase';

export default function SignUpSceen(props){
    const {navigation} = props;
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function handlePress() {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((userCredential) => {
                const { user } = userCredential;
                console.log(user.uid);
                Alert.alert("登録完了しました。")
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'TwisterList'}],
                });
            })
            .catch((error) => {
                Alert.alert("アカウント作成に失敗しました")
            });
    };

    return(
            <View style={styles.container}>
            <Text style={styles.title}>アカウントを作成</Text>
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
                lavel="登録"
                onPress={handlePress}
            />
        </View>
    );
}

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
