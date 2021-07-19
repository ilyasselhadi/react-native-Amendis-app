import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet ,Image,ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import MapScreen from './Map/MapScreen' ;
import HousesListe from './houses/HousesListe';
import { createStackNavigator } from '@react-navigation/stack';
import HouseFacture from './houses/HouseFacture';
import ListCard from './houses/ListCard';



const Stack = createStackNavigator();



export default function HomeScreen(props) {


  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  


  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);}

  return (
    // <View  style = {styles.container}>
      

        
    //    <MapScreen/>
      

    // </View>
   
     <Stack.Navigator > 
   
  
   <Stack.Screen name="HousesListe" children={()=><HousesListe posi={props.p}/>} options = {{headerShown : false}}/> 
    <Stack.Screen name="HouseFacture" component={HouseFacture} />
    <Stack.Screen name="ListCard" component={ListCard} />

    
    
   </Stack.Navigator>
   
  );
}
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

 
});
