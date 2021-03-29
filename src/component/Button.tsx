import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { func,string } from 'prop-types';


export default function Button(props){
    const { lavel,onPress } =  props;
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
          <Text style ={styles.buttonLavel}>{lavel}</Text>
        </TouchableOpacity>
    );
};

Button.propsTypes = {
    lavel:string.isRequired,
    onPress:func,
};

Button.defaultProps={
    onPress:null,
};

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#00acee',
        borderRadius:24,
    },
    buttonLavel:{
        fontSize:16,
        lineHeight:32,
        paddingVertical:8,
        paddingHorizontal:32,
        color:'#ffffff',
    },
});
