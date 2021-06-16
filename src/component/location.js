import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Header, Button, Input, ButtonGroup} from 'react-native-elements';
import mainStyles from "../styles/mainStyle"


const MenuItem = (props) => {

    return ( 

        <View>
            <View><Text style={mainStyles.h1, mainStyles.header}> RESTAURANT NAME: STREETNAME </Text></View>
            <View>
                <View>
                    <Text>PHONE ICON: 999-999-9999</Text>
                    <Text>OPENING - CLOSING</Text>
                </View>
                <View>
                    <Text>STREET NAME</Text>
                    <Text>CITY, STATE, ZIP</Text>
                </View>
            </View>

        </View>

    )
    
}

export default MenuItem;