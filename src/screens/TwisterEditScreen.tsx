import React  from 'react';
import { View,Text,StyleSheet,Alert } from 'react-native';
import Button from '../component/Button';

import firebase from 'firebase';

export default function TwisterEditScreen(props){
    const { navigation } = props;

    function handlePress() {
        const db = firebase.firestore();
        const ref = db.collection('twi');
        Alert.alert("aaa2");
        ref.add({
            bodyText: 'Hello',
        })
           // .then((docRef) => {
           //     Alert.alert("aaa1");
           // })
           // .catch((error) => {
           //     Alert.alert("aaa2");
           // });
    };


    return(
        <View style={styles.container}>
            <Text>いまどうしてる？</Text>
            <View style={styles.buttonContainer}>
                <Button
                    lavel="ツイートする"
                    onPress={handlePress}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop:240,
    }
});
