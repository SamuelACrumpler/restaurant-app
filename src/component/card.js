//should produce sm, md, lg, xl based on properties passed. sm is 1/4, md is 1/2, lg is 3/4s, xl is 1
//props that should be taken in, size as an int, title as a string

import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Header, Button, Input, ButtonGroup} from 'react-native-elements';

import { BackgroundImage } from "react-native-elements/dist/config";


const Card = (props) =>{

   const styles = () => {
    let allStyles = [];
    let desiredWidth = (parseFloat(props.width) - parseFloat(props.margin*2)) + "%";
    let hRadius = parseFloat(props.radius/2) + "px";

    allStyles.push({height: props.height, width: desiredWidth, backgroundColor: props.bgcol, marginLeft: props.margin, marginRight : props.margin, borderRadius: props.radius, borderWidth: props.bwidth });
    allStyles.push({height: props.iheight, borderBottomWidth: props.borderWidth});
    allStyles.push({resizeMode: "cover", height:"100%"}); //background image
    allStyles.push({}); //text
    allStyles.push({display: props.dshow, height: props.dheight, borderBottomLeftRadius: hRadius, borderBottomRightRadius: hRadius, backgroundColor: props.dbgcol })//card dialog ;
    return allStyles
   }

  // const cardStyle = () => {
  //   1/3; width 32.5%, margin, 0.5%
  //   To get proper size, width = desiredPercent - margin*2 = width percent
  //     return {height: props.height, marginLeft: props.margin, marginRight : props.margin}
  //     return {height: props.height, marginLeft: props.margin, marginRight : props.margin}
  // }
  // const imageStyle = () => {
     
  //   return{}
  // }

  // const captionStyle = () => {
  //     return {}
  // }

  // const dialogStyle = () => {
  //   return
  // }

    //add hover functionality to buttons.
    return(
        
    <View style={{height: props.height, width: props.width, backgroundColor: props.bgcol, marginLeft: props.margin, marginRight : props.margin, borderRadius: props.radius, borderWidth: props.bwidth }}>
      <View style={{height: props.iheight, borderBottomWidth: props.bWidth}}>
        <BackgroundImage source={props.image} style={{resizeMode: "cover", height:"100%"}}>
          <Text>Text on the image</Text>

        </BackgroundImage>
      </View>
      <View style={{display: props.dshow, height: props.dheight, borderBottomLeftRadius: parseFloat(props.radius)/2 + "px", borderBottomRightRadius: parseFloat(props.radius)/2 + "px", backgroundColor: props.dbgcol }}>
          <Text>Card Text would go here comeon</Text>
      </View>
    </View>
        
       
    )
}


export default Card