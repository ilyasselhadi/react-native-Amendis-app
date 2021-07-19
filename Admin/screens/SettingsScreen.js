import React from 'react';
import { View,Text, TouchableOpacity,TextInput, StyleSheet , ImageBackground,ScrollView,Alert } from 'react-native';
import {
  SettingsDividerShort,
  SettingsDividerLong,
  SettingsEditText,
  SettingsCategoryHeader,
  SettingsSwitch,
  SettingsPicker
} from "react-native-settings-components";
import { useState ,useEffect } from 'react';
import { Input } from 'react-native-elements';
import db from '../../firebase'


function SettingsScreen  (props) {


    const [nom,setnom] = useState('');
    const [adress,setadress] = useState("") ;
    const [tel,settel] = useState('');
    const [Notif,setNotif] = useState('');
    


  useEffect(() => {
    db.collection("Admin").doc("BmmAYG7FcoPzkWwpr8PfISEPfui1")
    .get().then((doc) => {
     if (doc.exists) {
    setnom(doc.data().Name)
    setadress(doc.data().Adresse)
    settel(doc.data().Tele)
        } else {
// doc.data() will be undefined in this case
console.log("No such document!");
}
}).catch((error) => {
console.log("Error getting document:", error);
});
}, [])

  const colors = {
    white: "#FFFFFF",
    monza: "#C70039",
    switchEnabled: "#C70039",
    switchDisabled: "#efeff3",
    blueGem: "#27139A",
  };
   
    const [name,setname] = useState('');
    const [notification,setnotification] = useState(false) ;
    const [gender,setgender] = useState('');
    const [adresse,setadresse] = useState('');
    const [tele,settele] = useState('');

    const khwi=() => {
      setname('')
      setadresse('')
      settele('')
    }
    

  
    return(
<ImageBackground
 source={require("../../assets/back.jpeg")}
 style={{height:'100%', width : '100%'}}
>
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:
          Platform.OS === "ios" ? colors.iosSettingsBackground : colors.white
      }}
    >
      <SettingsCategoryHeader
        title={"My Account"}
        textStyle={Platform.OS === "android" ? { color: colors.monza } : null}
      />
      <SettingsDividerLong android={false} />

      <View style={{
        backgroundColor:'white',
        flexDirection:"row",
       // alignItems:"center",
        
      }}>
        <Text style={{
           fontSize:16,
           marginLeft : 14,
           marginTop : 15,
           marginBottom : 10
        }}>
          Name
        </Text>
        
        <TextInput 
        placeholder = {nom}
        value={name} onChangeText={(text) => setname(text)}
        style={{
          fontSize:14,  
          paddingLeft:200,
          }}>
        </TextInput>
        
      </View>


      <View style={{
        backgroundColor:'white',
        flexDirection:"row",
        alignItems:"center"
      }}>
        <Text style ={{
           fontSize:16,
           marginLeft : 14,
           marginTop : 15,
           marginBottom : 10
        }}>
          Adresse
        </Text>
        
        <TextInput 
        placeholder = {adress}
        value={adresse} onChangeText={(text) => setadresse(text)}
        style={{
          fontSize:14,
          color:"black",
          paddingLeft:160,
   
          }}>
        </TextInput>
        
      </View>


      <View style={{
        backgroundColor:'white',
        flexDirection:"row",
        alignItems:"center"
      }}>
        <Text style = {{
           fontSize:16,
           marginLeft : 14,
           marginTop : 15,
           marginBottom : 10
        }}>
          Tele
        </Text>
        
        <TextInput 
        placeholder = {tel}
        value={tele} onChangeText={(text) => settele(text)}
        style={{
          fontSize:14,
          color:"black",
          paddingLeft:230,
          
   
          }}>
        </TextInput>
        
      </View>


      
      
      <SettingsSwitch
        title={"Allow Push Notifications"}
        onValueChange={value => {
          
          setnotification(true)
          
        }}
        value={notification}
        
        trackColor={{
          true: colors.switchEnabled,
          false: colors.switchDisabled,
        }}
      />
      
    <TouchableOpacity 
      style= {{
        width : 120 ,
        alignItems: "center",
        backgroundColor: "#DF062D",
        padding: 10 ,
        borderRadius : 13,
        marginTop : 140,
        marginLeft: 120
      }}
      onPress={() => {
                   if(name!==''){
                  db.collection('Admin').doc('BmmAYG7FcoPzkWwpr8PfISEPfui1').update({
                    Name : name ,
                        
                  }) 
                  if(adresse!=''){
                    db.collection('Admin').doc('BmmAYG7FcoPzkWwpr8PfISEPfui1').update({
                      Adresse : adresse ,
                          
                    })
                  }
                  if(tele!=''){
                    db.collection('Admin').doc('BmmAYG7FcoPzkWwpr8PfISEPfui1').update({
                      Tele : tele ,
                          
                    })
                  }
                
                  Alert.alert(
                    "Succes",
                    "Modification Ajouter",
                    [
                      
                      {text: "Ok",
                        onPress: () => {khwi()},
                        
                      },
                    ] ) }

                    else {
                      Alert.alert(
                        "Error",
                        "Empty Imputs",
                        [
                          
                          {text: "ok",
                            
                            
                          },
                        ] )
                    }
                 }} 
     >
      <Text style ={{
         color: 'white',
         fontWeight : 'bold',
         textAlign: 'center',
      }} >Edit</Text>
    </TouchableOpacity>


    </ScrollView>
    </ImageBackground>
);
}

      export default SettingsScreen 


