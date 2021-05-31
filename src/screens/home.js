import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';


import { Header, Button } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { ImageBackground,Image, StyleSheet, Text, View, Dimensions, Platform, PixelRatio  } from 'react-native';
//import actuatedNormalize from "../component/actuSize"
import Navbar from "../component/navbar"
import Card from "../component/card"
import MenuSection from "../component/menuSection"
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
  const [boldColor, setBoldColor] = useState("#768FAC")
  const [xsDisplay,setXSDisplay] = useState("none")
  const [smDisplay,setSMDisplay] = useState("none")
  const [mdDisplay,setMDDisplay] = useState("none")
  const [lgDisplay,setLGDisplay] = useState("none")
  const [mobileDisplay, setMobileDisplay] = useState("none")
  const [desktopDisplay, setDesktopDisplay] = useState("none")

      //xs < 576; sm >= 576; md >= 768; lg >= 992; xl >= 1200; xxl >= 1400;

  const test = () => {
    console.log("we did a resize")

  }

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


  // const headerStyle = (num) =>{
  //   let style = {}
  //   switch(num){
  //     case 1:
  //     style = {fontWeight: "bold", }
  //     break;

  //   } 
  //   return {}
  // }

  const cardStyle = () => { //most likely will pass height through this function. Can also set the way things align by passing parameters if I choose to do so.
    return {flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}
  }
  const headersStyle = () => {
    return {color : "black", fontWeight: "bold", fontSize: actuatedNormalize(10), textAlign: 'center', justifyContent: 'center'}
}

  const handleResize = () => {
    console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    console.log('Width: '+ window.innerWidth)
    console.log(typeof(window.innerWidth))

    if(window.innerWidth <= 576){
      setMobileDisplay('')
      setDesktopDisplay('none')
      setXSDisplay('')
      setSMDisplay('none')
      setMDDisplay('none')
      setLGDisplay('none')
    } else if ( window.innerWidth >= 576 && window.innerWidth <=767) {
      setMobileDisplay('')
      setDesktopDisplay('none')
      setXSDisplay('none')
      setSMDisplay('')
      setMDDisplay('none')
      setLGDisplay('none')
    } else if ( window.innerWidth >= 767 && window.innerWidth <= 992) {
      setMobileDisplay('none')
      setDesktopDisplay('')
      setXSDisplay('none')
      setSMDisplay('none')
      setMDDisplay('')
      setLGDisplay('none')
    } else if (window.innerWidth >= 992) {
      setMobileDisplay('none')
      setDesktopDisplay('')
      setXSDisplay('none')
      setSMDisplay('none')
      setMDDisplay('none')
      setLGDisplay('')
    }
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
  handleResize()
  window.addEventListener('resize', handleResize)
})
    
    return(
        <SafeAreaProvider style={{ alignItems: '', backgroundColor: 'white'}}>
            <Navbar />

        <View style={{maxWidth:'1366px', flexDirection:'column', justifyContent:'center', margin: "auto", backgroundColor:'whitesmoke', padding:''}}>

            <View style={{height:"800px"}}>
              <BackgroundImage source={image} style={styles.image}>
                  <View style={styles.cLogo}>
                    <Image style={styles.logo}source={image}></Image>

                  </View>
                  <Text style={headerStyle}>This will go on the image {Image.getSize(image, (width, height) => {console.log("this is height: " + height)})}</Text>
              </BackgroundImage>
              
            </View>

            <View style={{padding:"10px"}}>
              <View>
              <Text style={{fontWeight:"bold", fontSize:"24px", textDecorationLine:"underline", color: boldColor, textAlign: "center"}}>
                  Header - About Us
                </Text>
                <Text style={{textAlign:"center"}}>
                We love restaurants as much as you do. That’s why we’ve been helping them fill tables since 1999. Welcome to elixir restaurant
                </Text>
              </View>
              
            </View>

            <View style={{display: desktopDisplay, flexDirection: 'row', padding:"10px"}}>
                <View style={{width: "48%", marginRight: "4%"}}>
                <MenuSection items={items()} boldColor={boldColor} name="Breakfast"/>

                </View>
                <View style={{width: "48%"}}>

                <MenuSection items={items()} boldColor={boldColor} name="Sides"/>

                </View>
            </View>

            <View style={{display: mobileDisplay, padding:"10px"}}>
             
                <MenuSection items={items()} boldColor={boldColor} name="Breakfast"/>
                <MenuSection items={items()} boldColor={boldColor} name="Sides"/>
            </View>

            <View style={{flexDirection: 'row', height:"200px", justifyContent: '', alignItems: '',padding: "10px"}}>
              <View style={{width: "60%"}}>
                <Text style={{fontWeight:"bold", fontSize:"36px", textDecorationLine:"underline", textAlign: "center", color: boldColor}}>Header - The History</Text>
                <Text style={{padding:"2%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </View>
              <View style={{width: "40%"}}>
                <Image source={image} style={{resizeMode: 'cover', height: "100%", borderRadius: "20px"}}></Image>
              </View>
            </View>

            <View style={{flexDirection: 'row', height:"200px", justifyContent: '', alignItems: '', padding: "10px"}}>
              
              <View style={{width: "40%"}}>
                <BackgroundImage source={image} style={{resizeMode: 'cover', height: "100%"}}></BackgroundImage>
              </View>
              <View style={{width: "60%"}}>
                <Text style={{fontWeight:"bold", fontSize:"36px", textDecorationLine:"underline", textAlign: "center", color: boldColor}}>Header - The History</Text>
                <Text style={{padding:"2%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </View>
            </View>
            

            <View style={{flexDirection: 'row', height:"500px", justifyContent: '', alignItems: '', padding:"10px"}}>
              
                <Card image={image} height="100%" width="33%" bgcol="black" margin="0.25%" radius="10px" bwidth="3px" iheight="85%" dshow="" dheight="15%" dbgcol="whitesmoke"/>
                <Card image={image} height="100%" width="66%" bgcol="black" margin="0.25%" radius="10px" bwidth="3px" iheight="85%" dshow="" dheight="15%" dbgcol="whitesmoke"/>
            </View>

            <View style={{flexDirection: 'row', height:"500px", justifyContent: '', alignItems: '', padding:"10px"}}>
              
                <Card image={image} height="100%" width="25%" bgcol="black" margin="0.25%" radius="10px" bwidth="3px" iheight="85%" dshow="" dheight="15%" dbgcol="whitesmoke"/>
                <Card image={image} height="100%" width="25%" bgcol="black" margin="0.25%" radius="10px" bwidth="3px" iheight="100%" dshow="none" dheight="15%" dbgcol="whitesmoke"/>
                <Card image={image} height="100%" width="25%" bgcol="black" margin="0.25%" radius="10px" bwidth="3px" iheight="85%" dshow="" dheight="15%" dbgcol="whitesmoke"/>
                <Card image={image} height="100%" width="25%" bgcol="black" margin="0.25%" radius="10px" bwidth="3px" iheight="85%" dshow="" dheight="15%" dbgcol="whitesmoke"/>
            </View>

            <View style={{flexDirection: 'row', height:"500px", justifyContent: '', alignItems: '', padding:"10px"}}>
              
              <Card image={image} height="100%" width="25%" bgcol="black" margin="0.25%" radius="10px" bwidth="3px" iheight="85%" dshow="" dheight="15%" dbgcol="whitesmoke"/>
              <Card image={image} height="100%" width="75%" bgcol="black" margin="0.25%" radius="10px" bwidth="3px" iheight="100%" dshow="none" dheight="15%" dbgcol="whitesmoke"/>
          </View>

            
          </View>

        </SafeAreaProvider>
    )

}



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
