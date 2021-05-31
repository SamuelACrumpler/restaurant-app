import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Header, Button, Input, ButtonGroup} from 'react-native-elements';


const MenuItem = (props) => {

    return (
        <View style={{marginBottom: "10px"}}>
             <Text style={{fontWeight:"bold", fontSize:"16px", marginBottom: "2px", textDecorationLine:"underline", color: props.boldColor}}>
                {props.name}
            </Text>
            <View style={{flexDirection: "row"}}>
                <Text style={{width: "85%", fontStyle:"italic"}}>{props.desc}</Text>
                <Text style={{color:"red", width: "15%", textAlign: "right", marginRight: "0.5%", fontWeight:"bold"}}>{"$"+props.price}</Text>
            </View>
        </View>
       

    )
        

}

export default MenuItem;

/*
    Name
    Desc
    Price

*/