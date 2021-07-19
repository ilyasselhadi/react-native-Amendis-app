import React ,{useLayoutEffect, useState,useEffect } from 'react';
import {View,Text,TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import db from '../../../firebase'

const TableClients = ({navigation}) => {
  const [clients, setclients] = useState([])
    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitleColor : 'white',
          headerBackTitleStyle : {color : 'white'} ,
          
        })
     } , [navigation])

     useEffect(() => {
      db.collection('Clients')
      .orderBy("posi")
      .get()
      .then((snapshot) => {
          let clients = snapshot.docs.map(doc => {
              const data = doc.data();
              const id = doc.id;
              return { id, ...data }
          });
          setclients(clients);      
      })     
      }, [])

    return (
        <View style={{flex:1}}>
          
          <FlatList
            numColumns={1}
             horizontal={false}
              data={clients}
               renderItem={({ item }) => (
          
              
                
        <TouchableOpacity style={styles.item} 
       onPress={()=>{
        navigation.navigate('ClientDetail',{
          Props : item.ClientName,
          Props2 : item.Serie
      })
       }}>
         
          <View style={styles.itemLeft}>
          <Icon style={styles.square} name="account-settings" color="red" size={25}/>
            <Text style={styles.itemText}> {item.ClientName}</Text>
          </View>
          <View style={styles.circular}></View>
          <Text>{item.posi}</Text>
        </TouchableOpacity>
        
               )}/>

        </View>
    )
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});
export default TableClients