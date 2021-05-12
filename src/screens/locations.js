import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Button } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Locations = ({navigation}) => {
    
    return(
        <SafeAreaProvider style={{ alignItems: 'center'}}>
            <Text>basic home page.</Text>
            <StatusBar style="auto" />
        </SafeAreaProvider>
    )

}

export default Locations
