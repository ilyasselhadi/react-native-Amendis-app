import React ,{useLayoutEffect, useState,useEffect } from 'react';
import {View,Text,TouchableOpacity,StyleSheet,FlatList,Image,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import db from '../../../firebase' ;


 const AgentDetail=({navigation , route})=> {
    const { Props } = route.params;

    const [nom,setnom] = useState('');
    const [adress,setadress] = useState("") ;
    const [Gmail,setGmail] = useState("") ;
    const [tel,settel] = useState('');
    const [Statut,setStatut] = useState('');
    const [Type,setType] = useState("") ;
    const [Depuis,setDepuis] = useState("") ;
    const [lin,setlin] = useState("") ;


    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitleColor : 'white',
          headerBackTitleStyle : {color : 'white'} ,
          
        })
     } , [navigation])

     useEffect(() => {
        db.collection("Agents").doc(Props)
        .get().then((doc) => {
         if (doc.exists) {
        console.log("Document data:", doc.data())
        setnom(doc.data().Name)
        setadress(doc.data().Adresse)
        settel(doc.data().Tele)
        setGmail(doc.data().Gmail)
        setType (doc.data().Type) 
        setDepuis (doc.data().DateDebut) 
        setStatut(doc.data().Statut)
            } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
    }).catch((error) => {
    console.log("Error getting document:", error);
    });
    }, [])

    const line = () =>{
      if(Statut == 'offline') {
        return (<Image style = {styles.line}
                 
          source = {require("../../assets/offline.png")}/>)
      }
      else if (Statut == 'online' ){
        return(<Image style = {styles.line}
                 
          source = {require("../../assets/online.jpg")}/>)
      }
    }
     
    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
              <Image style={styles.avatar}
                source = {require("../../../assets/icons/avatar.jpg")}/>
               
              {line()}

              <Text style={styles.name}>{nom} </Text>
              <Text style={styles.userInfo}>{Gmail} </Text>
              <Text style={styles.userInfo}>{Type} </Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
            <Icon style = {styles.icon} name="map-marker-radius" color="#DF062D" size={25}/>
             </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>{adress}</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
            <Icon style = {styles.icon} name="phone-outline" color="#DF062D" size={25}/> 
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>{tel}</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
            <Icon style = {styles.icon} name="calendar" color="#DF062D" size={25}/>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>{Depuis}</Text>
            </View>
          </View>


          <View style={styles.item}>
            <View style={styles.iconContent}>
            <Icon style = {styles.icon} name="wifi" color="#DF062D" size={25}/>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>{Statut}</Text>
            </View>
          </View>

        

        </View>
    </View>

    )
}
const styles = StyleSheet.create({
   
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:16,
      color:"#778899",
      fontWeight:'500',
    },
    body:{
      backgroundColor: "#D8D8D8",
      height:500,
      
    },
    item:{
      flexDirection : 'row',
      marginLeft: -250
    },
    infoContent:{
      flex:1,
      alignItems:'flex-start',
      paddingLeft:5
    },
    iconContent:{
      flex:1,
      alignItems:'flex-end',
      paddingRight:5,
    },
    icon:{
      width:30,
      height:30,
      marginTop:20,
    },
    info:{
      fontSize:18,
      marginTop:20,
      color: "black",
    },
    line : {
      width: 13,
      height: 13,
      marginRight : 80,
      marginTop : -10
    }
  });

export default AgentDetail
