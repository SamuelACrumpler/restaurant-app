import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Header, Button, Input, ButtonGroup} from 'react-native-elements';
import MenuItem from "../component/menuitem"

const MenuSection = (props) => {
    return (
    <View style={{marginBottom: "10px"}}>
        <Text style={{fontWeight:"bold", fontSize:"24px", textDecorationLine:"underline", color: props.boldColor, textAlign: "center"}}>
            {props.name}
        </Text>
        {
            props.items.map((item, index) => {
                return <MenuItem boldColor={props.boldColor} name={item.name} desc={item.desc} price={item.price} key={index} />
            }) 
        }
    </View>

    )

}

export default MenuSection;