import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';


import { Header, Button } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { ImageBackground,Image, StyleSheet, Text, View, Dimensions, Platform, PixelRatio  } from 'react-native';
//import actuatedNormalize from "../component/actuSize"
import Navbar from "../component/navbar"
import { BackgroundImage, withTheme } from 'react-native-elements/dist/config';
import { createNativeWrapper } from 'react-native-gesture-handler';
const image = require("../images/burgertown.jpg");


const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 320;
  
function actuatedNormalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }

const Home = ({navigation}) => {
  const [headerSize,setHeaderSize] = useState(actuatedNormalize(10));
  const [headerStyle,setHeaderStyle] = useState({color : "black", fontSize: actuatedNormalize(10)});



  const test = () => {
    console.log("we did a resize")

  }

  const cardStyle = () => { //most likely will pass height through this function. Can also set the way things align by passing parameters if I choose to do so.
    return {flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}
  }
  const headersStyle = () => {
    return {color : "black", fontWeight: "bold", fontSize: actuatedNormalize(10), textAlign: 'center', justifyContent: 'center'}
}

 ///0-----
  React.useEffect(() => {

    function test2(){
      console.log("YES!")
      //can use this listen effect to check for specific sizes to render the site in.
      //bootstrap media sizes
      //xs < 576; sm >= 576; md >= 768; lg >= 992; xl >= 1200; xxl >= 1400;
      //These sizes will be used to change the type of layout used by the navbar
    } 
    window.addEventListener('resize', test2 )
    

    
    
})

React.useEffect(() => {
  function handleResize() {
    console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
  
}

  window.addEventListener('resize', handleResize)
})
    
    return(
        <SafeAreaProvider style={{ alignItems: ''}}>
            <Navbar />
            <View style={{height:"800px"}}>
              <BackgroundImage source={image} style={styles.image}>
                  <View style={styles.cLogo}>
                    <Image style={styles.logo}source={image}></Image>

                  </View>
                  <Text style={headerStyle}>This will go on the image {Image.getSize(image, (width, height) => {console.log("this is height: " + height)})}</Text>
              </BackgroundImage>
              
            </View>
            <View style={{flexDirection: 'row',justifyContent: '', alignItems: '', padding:"10px"}}>
              
                <View style={{backgroundColor:"blue", width: "32.5%", margin:"0.5%", borderRadius: "10px", borderStyle: "solid", borderWidth: "3px" }}>
                  <View style={{height: "250px", borderBottomWidth: "3px"}}>
                    <BackgroundImage source={image} style={{resizeMode: "cover", height:"100%"}}/>
                  </View>
                  <View style={{height: "100px", borderBottomRightRadius:"5px", borderBottomLeftRadius:"5px", backgroundColor: "whitesmoke"}}>
                      <Text>Card Text would go here</Text>
                  </View>
                </View>
                <View style={{backgroundColor:"red", height: "200px", width: "32.5%", margin:"0.5%", borderRadius: "10px"}}></View>
                <View style={{backgroundColor:"red", height: "200px", width: "32.5%", margin:"0.5%", borderRadius: "10px"}}></View>
            </View>

            <View style={{flexDirection: 'row',justifyContent: '', alignItems: '', padding:"10px"}}>
              
                <View style={{backgroundColor:"blue", width: "24%", margin:"0.5%", borderRadius: "10px", borderStyle: "solid", borderWidth: "3px" }}>
                  <View style={{height: "250px", borderBottomWidth: "3px"}}>
                    <BackgroundImage source={image} style={{resizeMode: "cover", height:"100%"}}/>
                  </View>
                  <View style={{height: "100px", borderBottomRightRadius:"5px", borderBottomLeftRadius:"5px", backgroundColor: "whitesmoke"}}>
                      <Text>Card Text would go here</Text>
                  </View>
                </View>

                <View style={{backgroundColor:"blue", width: "24%", margin:"0.5%", borderRadius: "10px", borderStyle: "solid", borderWidth: "3px" }}>
                  <View style={{height: "250px", borderBottomWidth: "3px"}}>
                    <BackgroundImage source={image} style={{resizeMode: "cover", height:"100%"}}/>
                  </View>
                  <View style={{height: "100px", borderBottomRightRadius:"5px", borderBottomLeftRadius:"5px", backgroundColor: "whitesmoke"}}>
                      <Text>Card Text would go here</Text>
                  </View>
                </View>

                <View style={{ backgroundColor:"black", width: "24%", margin:"0.5%", borderRadius: "10px", borderStyle: "solid", borderWidth: "3px" }}>
                    <BackgroundImage source={image} style={{resizeMode: "cover", height:"100%"}}>
                    <Text>Hey I'm Here</Text>

                      </BackgroundImage>
                </View>

                <View style={{backgroundColor:"blue", width: "24%", margin:"0.5%", borderRadius: "10px", borderStyle: "solid", borderWidth: "3px" }}>
                  <View style={{height: "250px", borderBottomWidth: "3px"}}>
                    <BackgroundImage source={image} style={{resizeMode: "cover", height:"100%"}}/>
                  </View>
                  <View style={{height: "100px", borderBottomRightRadius:"5px", borderBottomLeftRadius:"5px", backgroundColor: "whitesmoke"}}>
                      <Text>Card Text would go here</Text>
                  </View>
                </View>

                
              
            </View>

            <View style={{flexDirection: 'row',justifyContent: '', alignItems: '', padding:"10px"}}>
              
              <View style={{backgroundColor:"blue", width: "24%", margin:"0.5%",  borderRadius: "10px", borderStyle: "solid", borderWidth: "3px" }}>
                <View style={{height: "250px", borderBottomWidth: "3px"}}>
                  <BackgroundImage source={image} style={{resizeMode: "cover", height:"100%"}}/>
                </View>
                <View style={{height: "100px", borderBottomRightRadius:"5px", borderBottomLeftRadius:"5px", backgroundColor: "whitesmoke"}}>
                    <Text>Card Text would go here</Text>
                </View>
              </View>

              <View style={{backgroundColor:"blue", width: "24%", margin:"0.5%", borderRadius: "10px", borderStyle: "solid", borderWidth: "3px" }}>
                <View style={{height: "250px", borderBottomWidth: "3px"}}>
                  <BackgroundImage source={image} style={{resizeMode: "cover", height:"100%"}}/>
                </View>
                <View style={{height: "100px", borderBottomRightRadius:"5px", borderBottomLeftRadius:"5px", backgroundColor: "whitesmoke"}}>
                    <Text>Card Text would go here</Text>
                </View>
              </View>

              <View style={{backgroundColor:"blue", width: "49%", margin:"0.5%", borderRadius: "10px", borderStyle: "solid", borderWidth: "3px" }}>
                <View style={{height: "250px", borderBottomWidth: "3px"}}>
                  <BackgroundImage source={image} style={{resizeMode: "cover", height:"100%"}}/>
                </View>
                <View style={{height: "100px", borderBottomRightRadius:"5px", borderBottomLeftRadius:"5px", backgroundColor: "whitesmoke"}}>
                    <Text>Card Text would go here</Text>
                </View>
              </View>

              
            
          </View>
        </SafeAreaProvider>
    )

}

//h1-6 32,24,18.72, 16, 13.28, 10.72px

const styles = StyleSheet.create({
    image: {
        flex:1,
        //height: actuatedNormalize(50),
        height: "800px",
        resizeMode: "cover",
        justifyContent: "center"
    },
    logo: {
      height:"200px",
      width:"200px"
    },
    cLogo:{
      paddingTop: "20px",
      justifyContent: "center",
      alignItems: "center"
    },
    spacer:{padding: "5%"},
    mainText: {
        color: "whitesmoke",
    },headerText: {
        fontSize: "32px"
            
    }
});

export default Home
