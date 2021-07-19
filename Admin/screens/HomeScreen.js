import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet ,Image,ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewList from './ViewList';
import TableAgents from './Components/TableAgents';
import TableClients from './Components/TableClients';
import AgentDetail from './Components/AgentDetail';
import Icon from 'react-native-vector-icons/Ionicons';
import AddAgent from './Components/AddAgent';
import ClientDetail from './Components/ClientDetail';
import AddClient from './Components/AddClient';






const Stack = createStackNavigator();



 const HomeScreen=({navigation}) =>{
 
const add=()=>{
 navigation.navigate('AddAgent' , {prop: 1})
}
const addC=()=>{
  navigation.navigate('AddClient' , {prop: 1})
 }

  return (
     
   
      <Stack.Navigator > 
   
  
     <Stack.Screen name="ViewList" component={ViewList} options = {{headerShown : false}}/> 
     

     <Stack.Screen name="Agents" component={TableAgents} options=  {{headerRight: () => (
     <Icon.Button name="add-outline" color={'black'} size={30} backgroundColor={'white'} 
      onPress={() => {add()}}></Icon.Button>)}}  />    
     <Stack.Screen name="AgentDetail" component={AgentDetail} /> 
     <Stack.Screen name="AddAgent" component={AddAgent}  /> 

     

     <Stack.Screen name="Clients" component={TableClients} options= {{headerRight: () => (
     <Icon.Button name="add-outline" color={'black'} size={30} backgroundColor={'white'} 
      onPress={() => {addC()}}></Icon.Button>)}}  /> 
     <Stack.Screen name="ClientDetail" component={ClientDetail} /> 
     <Stack.Screen name="AddClient" component={AddClient}  /> 


    

     


     
    
    </Stack.Navigator>
   
  );
}
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

 
});

export default HomeScreen
