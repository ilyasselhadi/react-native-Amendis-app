import React ,{useLayoutEffect, useState,useEffect } from 'react';
import {View,Text,TouchableOpacity,StyleSheet,FlatList,Image,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import db from '../../../firebase' ;

 const ClientDetail = ({navigation,route}) => {

    const { Props } = route.params;
    const { Props2 } = route.params;

    const [nom,setnom] = useState('');
    const [adress,setadress] = useState("") ;
    const [num,setnum] = useState("") ;
    const [Serie,setSerie] = useState('');
    const [moisadded,setmoisadded] = useState();





    const [mois, setmois] = useState([])

    useEffect(() => {
        db.collection("Clients").doc(Props)
        .get().then((doc) => {
         if (doc.exists) {
        console.log("Document data:", doc.data())
        setnom(doc.data().ClientName)
        setadress(doc.data().Adresse)
        setnum (doc.data().num) 
        setSerie (doc.data().Serie) 
    
            } else {
    }
    }).catch((error) => {
    console.log("Error getting document:", error);
    });
    }, [])

    useEffect(() => {
        db.collection(Props2)
        .get()
        .then((snapshot) => {
            let mois = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data }
            });
            setmois(mois);      
        })     
        }, [])


      const AjoutMois=(x) =>{

        db.collection(Props2)
            .doc("mois"+x)
            .set({
              consomation : "",
              num : x,
              date : "" ,
              open : true , 
              paye : "non"
           })

          

      }  
    

        return (
            <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                  <Image style={styles.avatar}
                    source = {require("../../../assets/icons/avatar.jpg")}/>
    
                  <Text style={styles.name}>{nom} </Text>
                  <Text style={styles.userInfo}>{adress}, {num} </Text>
                  <Text style={styles.userInfo}>{Serie} </Text>
              </View>
            </View>
    
            <View style={styles.body}>
              <View style={styles.box}>
              <Text style={styles.username}>Mois :</Text>
              <Text style= {{marginTop:10 ,marginLeft:40}}>Consomation</Text>
              <Text style= {{margin:10 , marginLeft : 130}}>payé :</Text>
              </View>
            <FlatList 
              style={styles.container} 
              enableEmptySections={true}
              data={mois}
              keyExtractor= {(item) => {
                return item.num;
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity                 
                  onPress={()=>{
                   if(item.paye=="non"&&item.consomation!=""){
                    db.collection(Props2).doc("mois"+item.num).update({
                        paye : "oui"
                    })
                    

                    AjoutMois(item.num+1)

                   }else{
                    
                   }


                  }}
                  
                  >
                    <View style={styles.box}>
                      
                      <Text style={styles.username}>Mois {item.num} : </Text>
                      <Text style= {{marginTop:23,marginLeft:40}}>{item.consomation}</Text>
                      <View style={styles.iconContent}>
                          <Text style= {{marginTop:20}}>
                              {item.paye}
                          </Text>
                      </View>
                    </View>
                    
                  </TouchableOpacity>
                
                )
             
            }}/>
            
        
        </View>
    
            
    
            </View>
       
    
        )
    }
    const styles = StyleSheet.create({
       
        headerContent:{
          padding:10,
          alignItems: 'center',
        },
        avatar: {
          width: 100,
          height: 100,
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
          backgroundColor: "#fff",
          height:500,
          
        },
        box: {
            marginTop:5,
            marginBottom:5,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            shadowColor: 'black',
            shadowOpacity: .2,
            shadowOffset: {
              height:1,
              width:-2
            },
            elevation:2
          },
          username:{
            color: "#DF062D",
            fontSize:22,
            alignSelf:'center',
            marginLeft:10
          },
          iconContent:{
            width: 60,
            height: 60,
            backgroundColor: '#F74545',
            marginLeft: 'auto',
            alignItems: 'center'
          },
          icon:{
            width: 40,
            height: 40,
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
          },
          add : {
              marginBottom : 100 ,
          }


      });
export default ClientDetail



