import React from 'react';
import {StyleSheet,TouchableOpacity,Text,} from 'react-native';
import {string,shape,func} from 'prop-types';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function CircleButton(props){
    const{ style,name,onPress } = props;
    return(
      <TouchableOpacity style={[styles.circleButton,style,name]} onPress={onPress}>
        <FontAwesome5Icon name={name} size={24} color="white" />
      </TouchableOpacity>
    );
}

CircleButton.propTypes = {
    style:shape(),
    name:string.isRequired,
    onPress:func,
  };

  CircleButton.defaultProps={
    style:null,
    onPress:null,
  };

const styles = StyleSheet.create({
    circleButton:{
      backgroundColor:"#00acee",
      width:64,
      height:64,
      borderRadius:32,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      right:40,
      bottom:10,
      shadowColor:'#000000',
      shadowOffset: { width: 0,height: 8 },
      shadowOpacity:0.25,
      shadowRadius:1,
      elevation:8,
    },
});

