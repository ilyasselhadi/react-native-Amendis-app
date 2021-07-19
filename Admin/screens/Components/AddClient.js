import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import db from '../../../firebase' 

 const AddClient =() =>  {


  const [ClientName, setClientName] = useState('')
  const [Adresse, setAdresse] = useState('')
  const [Number, setNumber] = useState('')
  const [Serie, setSerie] = useState('')
  const [pos,setpos]=useState('')


  var month = new Date().getMonth() + 1;
 

  const khwi=() => {
    setClientName('')
    setAdresse('')
    setNumber('')
    setSerie('')
    setpos('')
  
    
  }
  


    return (
      <KeyboardAvoidingView behavior="padding"style = {styles.container}>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Clientname"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              value={ClientName} onChangeText={(text) => setClientName(text)}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Adresse"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              value={Adresse} onChangeText={(text) => setAdresse(text)}/>
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
              placeholder="House Number"
              underlineColorAndroid='transparent'
              value={Number} onChangeText={(text) => setNumber(text)}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Serie Number"
              underlineColorAndroid='transparent'
              value={Serie} onChangeText={(text) => setSerie(text)}/>
        </View>

        

      

        <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => {

          if(ClientName!=('')&&Number!=('')&&Serie!=('')&&Adresse!=('')&&pos!=(''))
          {
          db.collection("Clients")
          .doc(ClientName)
          .set({
            ClientName : ClientName,
            Adresse : Adresse ,
            num : Number,
            Serie : Serie ,
            posi : pos,
         })
         db.collection(Serie)
         .doc("mois"+month)
         .set({
           consomation : '',
           num : month , 
           open : true ,
           paye : "non" ,
           date : ''
         })

         Alert.alert(
          "Succes",
          "Client Ajouté",
          [
            
            {text: "Ok",
              onPress: () => {khwi()},
              
            },
          ] )
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

export default AddClient