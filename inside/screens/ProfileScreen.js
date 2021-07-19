import React from 'react';
import { ScrollView } from 'react-native';
import {View, SafeAreaView, StyleSheet,ImageBackground} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState ,useEffect } from 'react';
import db from '../../firebase' ;
import { useNavigation } from '@react-navigation/native';


function ProfileScreen  (props )  {

  

  
    const [nom,setnom] = useState('');
    const [adress,setadress] = useState("") ;
    const [Gmail,setGmail] = useState("") ;
    const [tel,settel] = useState('');
    const [Notif,setNotif] = useState('');
    const [Type,setType] = useState("") ;
    const [Depuis,setDepuis] = useState("") ;
    


  useEffect(() => {
    db.collection("Agents").doc(props.p)
    .get().then((doc) => {
     if (doc.exists) {
    console.log("Document data:", doc.data())
    setnom(doc.data().Name)
    setadress(doc.data().Adresse)
    settel(doc.data().Tele)
    setGmail(doc.data().Gmail)
    setType (doc.data().Type) 
    setDepuis (doc.data().DateDebut) 

        } else {
// doc.data() will be undefined in this case
console.log("No such document!");
}
}).catch((error) => {
console.log("Error getting document:", error);
});
}, [])
const navigation = useNavigation(); 
const out =() =>{
      
  db.collection('Agents').doc(props.p).update({
    Statut : 'offline'
  })
  navigation.replace( 'LoginScreen' )
}


  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground

       source={require("../../assets/back.jpeg")}
      style={{height:'100%', width : '100%'}}
      

>

      <ScrollView>

        

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
           source = {require("../../assets/icons/avatar.jpg")}

            size={80}
          />
         
          <View style={{marginLeft: 20}}>
            <Title  style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{nom}</Title>

            <Caption style={styles.caption}>@{nom}</Caption>
          </View>
          
        </View>
        
      </View>
      
      <View style={styles.userInfoSection}>
      
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{adress}</Text>
        </View>
     
       
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{tel}</Text>
        </View>
         
         
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{Gmail}</Text>
        </View>
         
      </View>
      

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
           {
            <Title>{Type}</Title>
           }
            <Caption>Type</Caption>
          </View>


          <View style={styles.infoBox}>
          
          <Title>{Depuis}</Title>
          
            <Caption>Depuis</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>


        
        <TouchableRipple onPress={() => {  
        }}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>



        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon 
            name="account-settings" color="#FF6347" size={25}
           />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>


        <TouchableRipple onPress={() => out()}>
          <View style={styles.menuItem}>
          <Icon 
                        name="exit-to-app" 
                        color="#FF6347"
                        size={25}
                        />
            <Text style={styles.menuItemText}>Log out</Text>
          </View>
        </TouchableRipple>

      </View>
      
      </ScrollView>
      </ImageBackground>
      
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: 'black',
    marginLeft: 20,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
  },
});
