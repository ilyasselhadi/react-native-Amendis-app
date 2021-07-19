import React from 'react';
import { useState ,useEffect } from 'react';
import {Image} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs' ;
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import HousesListe from './houses/HousesListe';
import db from '../../firebase'


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

//const Tab = createMaterialBottomTabNavigator();

const Tab = createBottomTabNavigator();




const MainTabScreen = ({navigation , route }) => {

   const {param1} = route.params ;
   const {param2} = route.params ;



//    const [lati, setlati] = useState();
//    const [lon, setlon] = useState();

//    const [location, setLocation] = useState(null);
//    useEffect (()=> {
//      (async ()=>{
//        let location = await Location.getCurrentPositionAsync({});
//        setlati(location.coords.latitude);
//        setlon(location.coords.longitude)
//      })();
     
//    },[])

//    db.collection('Agents').doc(param1).update({
//        Location : {
//            Latitude : lati ,
//            Longitude : lon ,
//        } ,
//    })



return (

    
    <Tab.Navigator
    TabBarOptions= {{
    //showLabel : false ,
      style : {
          borderTopWidth : 0 ,
          backgroundColor : "transparent",
          elevation : 0 
      }
  }}
    >
      
   
         <Tab.Screen
            name = 'Home'
            //component = {HomeStackScreen} 
            children={()=><HomeScreen p={param2}/>}
            options ={{
                tabBarIcon : ({focused})=>(
                    <Image
                    source = {require('../../assets/icons/homeic.png')}
                    resizeMode = 'contain'
                    style = {{
                        width :25 ,
                        height :25 , 
                       tintColor : focused ? 'red' : Colors.secondary

                    }}
                    />
                ) ,
                
            }} />





                 <Tab.Screen
            name = 'Settings'
            children={()=><SettingsScreen p={param1}/>}
            options ={{
                tabBarIcon : ({focused})=>(
                    <Image
                    source = {require('../../assets/icons/s2.png')}
                    resizeMode = 'contain'
                    style = {{
                        width :25 ,
                        height :25 , 
                        tintColor : focused ?'red' : 'black'
         
                    }}
                    />
                ) }}/>
                
      
         <Tab.Screen
            name = 'Profile'
            //component = {ProfileScreen} 
            children={()=><ProfileScreen p={param1}/>}
            options ={{
                tabBarIcon : ({focused})=>(
                    
                    <Image
                    source = {require('../../assets/icons/user.png')}
                    resizeMode = 'contain'
                    style = {{
                        width :25 ,
                        height :25 , 
                        tintColor : focused ?'red' : 'black'
         
                    }}
                    />
                ) }}/>
  
    </Tab.Navigator>
   
);
}

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#DF062D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
        
    }} >
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        //title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#DF062D" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const SettingsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#DF062D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Settings" component={SettingsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#DF062D" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);
  