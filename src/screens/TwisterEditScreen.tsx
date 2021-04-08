import React  from 'react';
import { View,Text,StyleSheet,Alert } from 'react-native';
import Button from '../component/Button';

import firebase from 'firebase';
import 'firebase/firestore';

export default function TwisterEditScreen(props){
    const { navigation } = props;

    function handlePress() {
        const db = firebase.firestore();

        db.collection("twi").add({
            bodyText:'Hello!!',
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
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
