import React, { FC, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, ScrollView ,ImageBackground,FlatList} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapScreen from '../Map/MapScreen';
import styles from "./styles";
import db from '../../../firebase'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


function HousesListe (props)  {

  const [userss, setUserss] = useState([])
  





  useEffect(() => {
  db.collection('Clients')
  .where("posi", "==", props.posi)
  .get()
  .then((snapshot) => {
      let userss = snapshot.docs.map(doc => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data }
      });
      setUserss(userss);
      
  })
 
  }, [])

  const navigation = useNavigation(); 


  return (

  

    <View style={{ display: 'flex' }}>
     
      <View style={{ height: 300 }}>
        <MapScreen />
      </View>
      
        <FlatList
            numColumns={1}
             horizontal={false}
              data={userss}
               renderItem={({ item }) => (


          <TouchableOpacity
            onPress={() => { navigation.navigate('HouseFacture', { 
              Props  : item.ClientName , 
              Props2 : item.Adresse ,
              Props3 : item.num , 
              Props4 : item.Serie
            }) }}
          >

            <View style={styles.container} >


              <View style={styless.row}>
                <View style={styles.iconContainer}>
                  <Entypo name={'home'} size={20} color={'#ffffff'} />
                </View>
              </View>

              <View   style={styles.middleContainer}>
                <Text  style={styles.type}>
                 {item.ClientName} 
                </Text>

                <Text  >
                  {item.Adresse},
                  
                </Text>
                <Text   >
                {item.num}
                </Text>

              </View>


              <View  style={styles.rightContainer}>


                <Ionicons name={'pricetag'} size={18} color={'#42D742'} />
                <Text  style={styles.prix}>
                  {item.Serie}

                </Text>

              </View>
            </View>
          </TouchableOpacity>




        )}
       />


  
    </View>
  
  );

}
export default HousesListe

const styless = StyleSheet.create(
  {
    row: {
      flexDirection: 'row',
      padding: 10,
      paddingTop: 15,
      alignItems: 'center',

    },


  }
)



