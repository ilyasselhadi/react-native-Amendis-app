import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Text, View, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Input } from 'react-native-elements'
import Animated, { color } from 'react-native-reanimated';
import { auth } from "../firebase";
import { Alert } from 'react-native';
import firebase  from 'firebase';
import db from '../firebase';

const LoginScreen = ({ navigation }) => {

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [error, seteroor] = useState()
  let erroe ; 


const enterAgent = (name,pos)=> {
  

  db.collection('Agents').doc(name).update({
    Statut : 'online'
  })
  
    //firebase.auth().signInWithEmailAndPassword(Email, Password);
    
      navigation.replace('Root',{ screen: 'MainTabScreen' ,
      params: { param1: name , param2 : pos  }}) 
    
    
}

  

  

  const signIn = async () => {

    

    if(Email==''||Password==''){
     
      Alert.alert(
        "Error",
        "Empty Imputs",
        [
          
          {text: "ok",
          },
        ] )
    }

     if(Email=='Admin@gmail.com'&&Password == 'admin123'){
       erroe= false ;
      firebase.auth().signInWithEmailAndPassword(Email, Password);
      navigation.replace('Root',{ screen: 'AdminTab' });
    }

    // else{

    //   db.collection('Agents')
    //   .get()
    //   .then(querySnapshot => {
    // querySnapshot.forEach(documentSnapshot => {
      
    //  if(Email==documentSnapshot.data().Gmail && Password == documentSnapshot.data().Password){
      
    //   db.collection('Agents').doc(documentSnapshot.data().Name).update({
    //     Statut : 'online'
    //   })
    //     //firebase.auth().signInWithEmailAndPassword(Email, Password);
    //     navigation.replace('Root',{ screen: 'MainTabScreen' ,
    //     params: { param1: documentSnapshot.data().Name , param2 : documentSnapshot.data().posi  }}) 

          
    //  }
     
    
    // });
    
    // })

    // }

    
    else{

      db.collection('Agents')
      .get()
      .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      
     if(Email==documentSnapshot.data().Gmail && Password == documentSnapshot.data().Password){     
        //firebase.auth().signInWithEmailAndPassword(Email, Password);
        
      enterAgent( documentSnapshot.data().Name , documentSnapshot.data().posi ) 

          
     }
     else {
       erroe = true ; 
     }

     
    
    });
    
    })

    }


    if(erroe) {
      Alert.alert("Error", "Invalid Gmail or Password",)
    }
    
    


   

     
      
      

    
    
    
  }

  state = {
    blur: 0,

  }


  return (



    <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <StatusBar style='light' />


      <ImageBackground

        source={require("../assets/logescadre2.jpg")}
        style={styles.bg}
        blurRadius={state.blur}

      >




        <View style={styles.container}>
          <View style={styles.allinput}>



            <View style={styles.inputContainer}>

              <Input placeholder='Agent Email'
                autoFocus type='Email'
                value={Email} onChangeText={(text) => setEmail(text)}

              />
              <Input placeholder='Password'
                secureTextEntry type='Password'
                value={Password} onChangeText={(text) => setPassword(text)}
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                signIn();
                // {
                //   error ?
                //     Alert.alert("Error", "Wrong Email or Password",)
                //     : null
                // }

              }}>
              <Text style={styles.text}>Connect</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.forgot}
              onPress={() => {
                navigation.navigate('ForgotScreen');
              }}>
              <Text style={styles.text2} >Forgot your Password ?</Text>
            </TouchableOpacity>

             {/* <TouchableOpacity
              onPress={() => {
                navigation.replace('Root',{ screen: 'MainTabScreen' });

              }}>
              <Text  >home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.replace('Root',{ screen: 'AdminTab'});

              }}>
              <Text  >Admin</Text>
            </TouchableOpacity>  */}



          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>



  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'flex-start',
    justifyContent: 'center',


  },


  inputContainer: {
    width: 300,
  },

  button: {
    marginTop: 30,
    width: 300,
    alignItems: "center",
    //backgroundColor: "#A4A4A4",
    backgroundColor: "#DF062D",
    padding: 10,
    borderRadius: 9,
  },

  text: {
    color: '#FEF9F9',
    fontWeight: 'bold'
  },


  text2: {
    fontSize: 15,
    //fontWeight :'bold' ,
    color: "black"
  },

  allinput: {
    padding: 10,
    //marginTop : 40 ,
    height: 250,
    alignItems: 'center',

  },

  forgot: {
    marginTop: 80,
  },


  bg: {
    width: "100%",
    height: "100%",

  },
})