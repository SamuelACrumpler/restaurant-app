import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from "react";
import MenuSection from "../component/menuSection"
import Navbar from "../component/navbar"
import handleResize from "../component/handleResize"
import mainStyles from "../styles/mainStyle"
import Location from "../component/location"

import { Header, Button } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


const Locations = ({navigation}) => {
    
    return(
        <SafeAreaProvider style={{ alignItems: 'center'}}>
            <Navbar />
            <View style={{maxWidth:'1366px', width:"100%", flexDirection:'column', alignItems:'center', marginRight: "auto", marginLeft: "auto", marginBottom:"0", marginTop:"0", backgroundColor:'whitesmoke'}}>
                <Location/>
                <Location/>
                <Location/>
            </View>
        </SafeAreaProvider>
    )

}

export default Locations
