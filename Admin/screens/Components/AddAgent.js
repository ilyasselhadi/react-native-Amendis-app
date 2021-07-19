import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import db from '../../../firebase'
import firebase from 'firebase' 

 const AddAgent =() =>  {


  const [Name, setName] = useState('')
  const [Adresse, setAdresse] = useState('')
  const [pos,setpos]=useState('')
  const [Tele, setTele] = useState('')
  const [Email, setEmail] = useState('')
  const [Type, setType] = useState('')
  const [Pass, setPass] = useState('')

  const khwi=() => {
    setName('')
    setAdresse('')
    setTele('')
    setEmail('')
    setType('')
    setPass('')
    setpos('')
    
  }
  


    return (

      <KeyboardAvoidingView behavior="padding"style = {styles.container}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              value={Name} onChangeText={(text) => setName(text)}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Position"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              value={pos} onChangeText={(text) => setpos(text)}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Tele"
              underlineColorAndroid='transparent'
              value={Tele} onChangeText={(text) => setTele(text)}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Type"
              underlineColorAndroid='transparent'
              value={Type} onChangeText={(text) => setType(text)}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              underlineColorAndroid='transparent'
              value={Email} onChangeText={(text) => setEmail(text)}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              underlineColorAndroid='transparent'
              value={Pass} onChangeText={(text) => setPass(text)}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => {

          if(Name!=('')&&Email!=('')&&Tele!=('')&&pos!=('')&&Type!=('')&&Pass!=(''))
          {
        //   db.collection("Agents")
        //   .doc(Name)
        //   .set({
        //     Name : Name,
        //     Gmail : Email ,
        //     Tele : Tele,
        //     Adresse : Adresse ,
        //     Type : Type ,
        //     DateDebut : "2021" ,
        //     Statut : 'offline'
        //  })
                firebase.auth().createUserWithEmailAndPassword(Email, Pass).
                then((result)=> {
                  db.collection("Agents")
                .doc(Name).set({
                 Name : Name,
                 Gmail : Email ,
                 Tele : Tele,
                 posi : pos ,
                 Adresse : "Tetouane, " + pos ,
                 Type : Type ,
                 DateDebut : "2021" ,
                 Statut : 'offline'
                })
                Alert.alert(
                  "Succes",
                  "Agent Ajouté",
                  [
                    
                    {text: "Ok",
                      onPress: () => {khwi()},
                      
                    },
                  ] )
                }).catch((error)=> Alert.alert(
                  "Error",
                  error.message,
                  [
                    
                    {text: "Ok" 
                    },
                  ] ))

       
        }
        else {
          Alert.alert(
            "Error",
            "Empty Inputs",
            [
              
              {text: "Ok" 
              },
            ] )
          }

        

        }}
        >
          <Text style={styles.signUpText}>Add</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#DF062D",
  },
  signUpText: {
    color: 'white',
  }
});

export default AddAgent