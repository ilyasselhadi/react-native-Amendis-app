import React, { useEffect } from 'react';

import { 
  NavigationContainer, 

} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { DrawerContent } from './inside/screens/DrawerContent';

import MainTabScreen from './inside/screens/MainTabScreen';
import LoginScreen from './screens/LoginScreen' ; 
import ForgotScreen from './screens/ForgotScreen' ; 
import HomeScreen from './inside/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HouseFacture from './inside/screens/houses/HouseFacture';
import HousesListe from './inside/screens/houses/HousesListe';
import AdminTab from './Admin/screens/AdminTab';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const globalsxreenoptions = {
  headerStyle : {backgroundColor : '#DF062D' /*'#CD0000'*/} ,
  headerTitleStyle : {color : 'white'} , 
  headrTintColor : 'white', 
}
const a = 2 ; 


function Root() {
  return (
   
    
      
      
    <Drawer.Navigator   drawerContent={props => <DrawerContent {...props}/>}>       
    <Drawer.Screen name="MainTabScreen" component={MainTabScreen} />
    <Drawer.Screen name="AdminTab" component={AdminTab} />
    </Drawer.Navigator>

       
 
        
  
  );
}


const App = () => {


  
  return (
   
    <NavigationContainer >
         <Stack.Navigator screenOptions = {globalsxreenoptions} >
         <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
         <Stack.Screen name="ForgotScreen" component={ForgotScreen} /> 
         <Stack.Screen name="Root" component={Root} options = {{headerShown : false}} /> 
        </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;
