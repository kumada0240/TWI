import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Alert} from 'react-native';
import LoginButton from '../component/LoginButton';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import firebase from 'firebase';


export default function LoginSceen(props){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const { navigation } = props;

    function handlePress() {
        const db = firebase.firestore();

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then((userCredential) => {
                const { user } = userCredential;
                console.log(user.uid);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'TwisterList'}],
                });
            })
            .catch((error) => {
                Alert.alert("メールアドレス・パスワードをご確認の上、再度お試しください。")
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
            <LoginButton
                lavel="ログイン"
                onPress={handlePress}
            />
            <Text
                style={styles.signinLinkText}
                onPress={ () => {navigation.navigate('SignUp') }}
            >
                アカウント作成はこちら
            </Text>
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
