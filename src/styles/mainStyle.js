import {StyleSheet} from 'react-native';
//Can import this from a json later.

const boldColor = "#768FAC"
  //h1-6 32,24,18.72, 16, 13.28, 10.72px


const mainStyles = StyleSheet.create({
    header: {
        fontWeight:"bold", 
        textDecorationLine:"underline", 
        color: boldColor, 
        textAlign: "center"
    },
    h1: {
        fontSize:"36px", 
    },
    h2: {
        fontSize:"24px", 
    },
    h3: {
        fontSize:"18.72px", 
    },
     h4: {
        fontSize:"16px", 
    },
    h5: {
        fontSize:"13.28px", 
    },
    h6: {
        fontSize:"10.72px", 
    },
    msHalfL: {
        width: "48%",
        marginRight: "4%"

    },
    msHalfR: {
        width: "48%",
    },
    msThird: {
        width: "30%",
        marginLeft: "1.75%",
        marginRight: "1.75%",
        justifyContent: "center",
        alignItems: "center"

    }


})

export default mainStyles