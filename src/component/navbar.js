import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
import { Header, Button, Input, ButtonGroup} from 'react-native-elements';


const Navbar = (props) =>{
    //add hover functionality to buttons.
    return(
        
        <View style={{}}>
            <View style={{flex:1, flexDirection: "row", backgroundColor:""}}>

                <View style={styles.left}>
                    <Button
                    title="Home"
                    type="clear"
                    />
                    <Button
                    title="Menu"
                    type="clear"
                    />
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