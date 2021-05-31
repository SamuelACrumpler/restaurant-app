import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
import { Header, Button, Input, ButtonGroup} from 'react-native-elements';
import { Link } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Navbar = (navigation) =>{
    //add hover functionality to buttons.
    //Make this more automated by mapping out the links instead.
    
    return(
        
        <View style={{}}>
            <View style={{flex:1, flexDirection: "row", backgroundColor:"", }}>

                <View style={styles.left}>
                    <View style={{justifyContent:"center", alignItems:"center", padding: "1%"}}>
                        <Link to="/Home">Home</Link>
                    </View>
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                        <Link to="/Menu">Menu</Link>
                    </View>
                    
                    
                    <Button
                    title="Contact"
                    type="clear"
                    />
                    <Button
                    title="Location(s)"
                    type="clear"
                    />
                
                </View>
                <View style={{backgroundColor: "red"}}>
                    <Button
                        title="image go here"
                        type="clear"
                        />
                </View>
                <View style={styles.right}>
                    <Button
                        style={{justifyContent:'flex-end'}}
                        title="DoorDash Order"
                        type="clear"
                        />
                </View>
            
            </View>
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

export default Navbar