import React  from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Circle from '../component/CrircleButton';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function TwisterList(props){
    const {navigation} = props;

    function handlePress() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login'}],
        });
    };

    return(
        <View style={styles.container}>
            <View style={styles.twiText}>
                <Text>ツイート1</Text>
                <View style={styles.twiContainer}>
                    <FontAwesome5Icon name="comment" size={24} color='#a9a9a9'/>
                    <FontAwesome5Icon name="retweet" size={24} color='#a9a9a9'/>
                    <FontAwesome5Icon name="heart" size={24} color='#a9a9a9'/>
                    <FontAwesome5Icon name="external-link-alt" size={24} color='#a9a9a9'/>
                </View>
            </View>

            <View style={styles.twiText}>
                <Text>ツイート1</Text>
                <View style={styles.twiContainer}>
                    <FontAwesome5Icon name="comment" size={24} color='#a9a9a9'/>
                    <FontAwesome5Icon name="retweet" size={24} color='#a9a9a9'/>
                    <FontAwesome5Icon name="heart" size={24} color='#a9a9a9'/>
                    <FontAwesome5Icon name="external-link-alt" size={24} color='#a9a9a9'/>
                </View>
            </View>

            <View style={styles.twiText}>
                <Text>ツイート1</Text>
                <View style={styles.twiContainer}>
                    <FontAwesome5Icon name="comment" size={24} color='#a9a9a9'/>
                    <FontAwesome5Icon name="retweet" size={24} color='#a9a9a9'/>
                    <FontAwesome5Icon name="heart" size={24} color='#a9a9a9'/>
                    <FontAwesome5Icon name="external-link-alt" size={24} color='#a9a9a9'/>
                </View>
            </View>
            <Circle
                style={{top:'auto',bottom:20}}
                name="pen-nib"
                onPress={handlePress}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    twiContainer:{
        flexDirection:'row',
        paddingHorizontal:24,
        justifyContent: 'space-evenly',
        marginTop:24,
    },
    twiText:{
        borderBottomWidth:1,
        borderColor:'#dcdcdc',
        paddingHorizontal:12,
        paddingVertical:18,
    },
});
