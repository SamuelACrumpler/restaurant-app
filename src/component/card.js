//should produce sm, md, lg, xl based on properties passed. sm is 1/4, md is 1/2, lg is 3/4s, xl is 1
//props that should be taken in, size as an int, title as a string

import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
import { Header, Button, Input, ButtonGroup} from 'react-native-elements';
import { BackgroundImage } from "react-native-elements/dist/config";


const card = (props) =>{
  const cardStyle = () => {
    //1/3; width 32.5%, margin, 0.5%
    //To get proper size, width = desiredPercent - margin*2 = width percent
      return {width: props.width, marginLeft: props.margin, marginRight : props.margin}
  }

    //add hover functionality to buttons.
    return(
        
        <View style={}>
            <BackgroundImage source={props.img} style={}>
                <View>
                    <Text style={}>
                        Basic Card Test {props.img}
                    </Text>
                </View>
            </BackgroundImage>
        </View>
       
    )
}

const styles = StyleSheet.create({
    left: {  
        flex: 1,
      flexDirection: 'row',
     
    },
    right: {
        flex: 1,
        flexDirection: 'row-reverse',
       
      },
    buttonContainer: {
      flex: 1,
    }
  });

export default card