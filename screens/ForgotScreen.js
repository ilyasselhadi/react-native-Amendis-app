import React ,  {useLayoutEffect, useState } from 'react' ;
import { exp } from 'react-native-reanimated';
import {KeyboardAvoidingView, StyleSheet,ScrollView, Alert} from 'react-native' 
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import {  Linking, Platform, TouchableOpacity } from 'react-native'
import {Input , Text  } from 'react-native-elements'
import { ImageBackground } from 'react-native';
import firebase from 'firebase';

const ForgotScreen= ({ navigation}) => {
    

  const [Name,setName] = useState('') ;
  const [Tele,setTele] = useState('') ;
  const [Email,setEmail] = useState('') ;

  const Checkit = () =>{
     if(Name!='')
     {
       if(Email!='')
       {
         if(Tele!='')
         {
           if(          firebase.auth().sendPasswordResetEmail(Email).catch(error=>{alert(error.message)}) )
             {
              Alert.alert(
                "Succes",
                "ResetPassword done",
                [
                  
                  {text: "ok",
                    
                    
                  },
                ] ) 
             }
         }
         else{
          Alert.alert(
            "Error",
            "Enter Phone number",
            [
              
              {text: "ok",
                
                
              },
            ] ) 
         }
       }
       else {
        Alert.alert(
          "Error",
          "Enter Your Email",
          [
            
            {text: "ok",
              
              
            },
          ] ) 

       }
     }
     else{
      Alert.alert(
        "Error",
        "Enter Your Name",
        [
          
          {text: "ok",
            
            
          },
        ] )     }

  }
  const makeCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${0638529626}';
    } else {
      phoneNumber = 'telprompt:${0638529626}';
    }
    Linking.openURL(phoneNumber);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle : 'Back to Login', 
      headerTitleColor : 'white',
      headerBackTitleStyle : {color : 'white'} ,
      
    })
 } , [navigation])
 

  return ( 

    <KeyboardAvoidingView behavior="padding"style = {styles.container}>

    <ImageBackground 
    source = {require("../assets/back.jpeg")}
    style = {styles.bg}
     >

  <View style={styles.container} >
    <StatusBar style = 'light'/>

    <Text h4 style ={{marginBottom : 50 , marginTop : 70  }}>
      Enter your information here
    </Text>

    <View style = {styles.inputs}>
    <Input placeholder = 'Full name' 
        type= 'text'
        value = {Name}
        onChangeText = { text => setName(text)  } 
       
      />
      <Input placeholder = ' Email'
        type= 'ID'
        value = {Email}
        onChangeText = { text => setEmail(text)  } 
      
      />
      <Input placeholder = 'Phone number'
        type= 'phone'
        value = {Tele}
        onChangeText = { text => setTele(text)  } 
         />
         </View>
      <TouchableOpacity 
      style= {styles.submitbutton}
      onPress = {Checkit} >
      <Text style={styles.TextStyle1} >Submit</Text>
    </TouchableOpacity>
      


    <TouchableOpacity   onPress={makeCall} activeOpacity={0.7} style={styles.Contactbutton} >
      <Text style={styles.TextStyle2}>Contact Us</Text>
    </TouchableOpacity>




  </View>
  </ImageBackground>
  </KeyboardAvoidingView>
  
  )
}
export default ForgotScreen 
  
   
  
    
  
  const styles = StyleSheet.create(
    { 
      bg : {
        width : "100%",
        height : "100%",
      },
      container: {
        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // padding : 10 ,
        
        
      },
      submitbutton:{
        width : 150 ,
        alignItems: "center",
        backgroundColor: "#DF062D",
        padding: 10 ,
        borderRadius : 13,
        marginTop : 25,
        
      },
      TextStyle1: {
        
        color: 'white',
        fontWeight : 'bold',
        textAlign: 'center',
      },
      Contactbutton: {
        width: '50%',
        padding: 10,
        
      },
      TextStyle2: {
        marginTop : 180,
        color: 'black',
        fontSize: 13,
        textAlign: 'center',
      },
      inputs :{
        width : 300,
        marginTop:40,
        
      }
  
    });