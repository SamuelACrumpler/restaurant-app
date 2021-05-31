import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from "react";
import MenuSection from "../component/menuSection"
import Navbar from "../component/navbar"
import handleResize from "../component/handleResize"
import mainStyles from "../styles/mainStyle"



import { Header, Button } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Menu = ({navigation}) => {

    const [boldColor, setBoldColor] = useState("#768FAC")
    const [displays, setDisplays] = useState([])
    const [count, setCount] = useState(0)


    const items = () => {
        let foods = [];
        let food1 = {name: "Food 1", desc: "This food was for sure not blandly named. Trust the taste", price: "5.99"}
        let food2 = {name: "Food 2", desc: "This food was for sure not blandly named. Trust the taste2", price: "7.99"}
        let food3 = {name: "Food 3", desc: "This food was for sure not blandly named. Trust the taste3", price: "9.99"}
        let food4 = {name: "Food 4", desc: "This food was for sure not blandly named. Trust the taste4", price: "11.99"}
        let food5 = {name: "Food 5", desc: "This food was for sure not blandly named. Trust the taste5", price: "13.99"}
        foods.push(food1);
        foods.push(food2);
        foods.push(food3);
        foods.push(food4);
        foods.push(food5);
        return foods;
      }

      React.useEffect(() => {
          function test(){
            setDisplays(handleResize())
            setCount(count+1)
            console.log("How many resizes: " + count)
          }
        window.addEventListener('resize', test)
      })

    return(
        <SafeAreaProvider style={{ alignItems: '', backgroundColor: 'white'}}>
            <Navbar/>
            <View style={{maxWidth:'1366px', width:"100%", flexDirection:'column', alignItems:'center', marginRight: "auto", marginLeft: "auto", marginBottom:"0", marginTop:"0", backgroundColor:'whitesmoke'}}>
                <View style={{display: displays[1], width:"100%"}}>
                    <View><Text style={[mainStyles.h1 , mainStyles.header]}>Breakfast</Text></View>
                    <View><Text style={{textAlign: "center"}}>Of Champions</Text></View>
                        <View style={{flexDirection: 'row', padding:"10px", }}>
                            <View style={mainStyles.msThird}><MenuSection items={items()} boldColor={boldColor} name=""/></View>
                            <View style={mainStyles.msThird}><MenuSection items={items()} boldColor={boldColor} name=""/></View>
                            <View style={mainStyles.msThird}><MenuSection items={items()} boldColor={boldColor} name=""/></View>
                        </View>
                </View>
                <View style={{display: displays[1], width:"100%"}}>
                    <View><Text style={[mainStyles.h1 , mainStyles.header]}>Breakfast</Text></View>
                    <View><Text style={{textAlign: "center"}}>Of Champions</Text></View>
                        <View style={{flexDirection: 'row', padding:"10px", }}>
                            <View style={mainStyles.msHalfL}><MenuSection items={items()} boldColor={boldColor} name=""/></View>
                            <View style={mainStyles.msHalfR}><MenuSection items={items()} boldColor={boldColor} name=""/></View>
                        </View>
                </View>
                <View style={{display: "none", margin: "10px"}}>
                    <View><Text style={[mainStyles.h1 , mainStyles.header]}>Breakfast</Text></View>
                    <View><Text style={{textAlign: "center"}}>Of Champions</Text></View>
                <MenuSection items={items()} boldColor={boldColor} name=""/>
                <MenuSection items={items()} boldColor={boldColor} name=""/>
                <MenuSection items={items()} boldColor={boldColor} name=""/>

                </View>

            
            </View>
            
        </SafeAreaProvider>
    )

}

export default Menu
