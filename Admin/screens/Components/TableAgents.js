// import React ,{useLayoutEffect, useState,useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   Alert,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import db from '../../../firebase'


// const TableAgents = ({navigation}) => {

//     const [agents, setagents] = useState([])
//     useLayoutEffect(() => {
//         navigation.setOptions({
//           headerTitleColor : 'white',
//           headerBackTitleStyle : {color : 'white'} ,
          
//         })
//      } , [navigation])

//      useEffect(() => {
//         db.collection('Agents')
//         .get()
//         .then((snapshot) => {
//             let agents = snapshot.docs.map(doc => {
//                 const data = doc.data();
//                 const id = doc.id;
//                 return { id, ...data }
//             });
//             setagents(agents);      
//         })     
//         }, [])

//     return (
//         <View style={{flex:1}}>
            
//             <FlatList
//             numColumns={1}
//              horizontal={false}
//               data={agents}
//                renderItem={({ item }) => (
         
//         <TouchableOpacity style={styles.item} 
//        onPress={()=>{
//          navigation.navigate('AgentDetail',{
//            Props : item.Name
//          })
//        }}>
//           <View style={styles.itemLeft}>
//           <Icon style={styles.square} name="account-check-outline" color="red" size={25}/>
//             <Text style={styles.itemText}>{item.Name}</Text>
//           </View>
//           <View style={styles.circular}></View>
//         </TouchableOpacity>
       
//                )} />


        
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     item: {
//       backgroundColor: '#FFF',
//       padding: 15,
//       borderRadius: 10,
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       marginBottom: 20,
//     },
//     itemLeft: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       flexWrap: 'wrap'
//     },
//     square: {
//       width: 24,
//       height: 24,
      
//       borderRadius: 5,
//       marginRight: 15,
//     },
//     itemText: {
//       maxWidth: '80%',
//     },
//     circular: {
//       width: 12,
//       height: 12,
//       borderColor: '#55BCF6',
//       borderWidth: 2,
//       borderRadius: 5,
//     },
    
//   });
// export default TableAgents



import React, { useEffect,useState,useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button
} from 'react-native';
import db from '../../../firebase'

const TableAgents = ({navigation}) => {
       useLayoutEffect(() => {
         navigation.setOptions({
           headerTitleColor : 'white',
           headerBackTitleStyle : {color : 'white'} ,
          
         })
      } , [navigation])


  const [agents, setagents] = useState([])
  useEffect(() => {
            db.collection('Agents')
            .get()
            .then((snapshot) => {
                let agents = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                });
                setagents(agents);      
            })     
            }, [])

  

  
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={agents}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.DateDebut;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} 
              onPress={()=>{
                         navigation.navigate('AgentDetail',{
                            Props : item.Name
                        })
                        }}
              >
                <View style={styles.cardHeader}>
                </View>
                <Image style={styles.userImage} source = {require("../../../assets/icons/avatar.jpg")}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.Name}</Text>
                    <Text style={styles.position}>{item.Type}</Text>
                    <TouchableOpacity style={styles.followButton}
                    onPress={()=>{
                      navigation.navigate('AgentDetail',{
                         Props : item.Name
                     })
                     }}
                    
                    >
                      <Text style={styles.followButtonText}>Voir plus</Text>  
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
        
      

      </View>
    );
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  list: {
    paddingHorizontal: 5,
   
  },
 
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: '#DF062D',
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  add : {
    marginTop:10,
    //height:35,
    //width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    //backgroundColor: '#DF062D',
  },
  addtext : {
    fontSize:17,
  }
 
});    
      
export default TableAgents