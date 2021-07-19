import React  ,{useState,useEffect} from 'react'
import {View,Text, TouchableHighlight ,Alert} from 'react-native';
import db from '../../../firebase'
 import { Input } from 'react-native-elements';


 function ModalCard  (props) {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
      var date = new Date().getDate(); //Current Date
      var month = 'juillet' //new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      setCurrentDate(
        date + '' + month + '' + year 
        
      );
    }, []);

    const [cons, setcons] = useState('')
    
        return(
            <View style={{
                paddingHorizontal:32,
                alignSelf:"center",
                marginTop:350,
                backgroundColor:"#FFF",
                height:346,
                elevation:1,
                width:270,
                borderRadius:15
            }}>
                <View style={{
                    flexDirection:"row",
                    paddingTop:20,
                    alignItems:"center"
                }}>
                    <Text style={{
                        color:"#4b3ca7",
                        fontSize:20,
                        marginBottom : 5
                    }}>
                     Mois {props.p2}
                    </Text>

                    <Text style={{
                        fontSize:20,
                        color:"#a2a2db",
                        paddingHorizontal:12
                    }}>
                        - - - - - 
                    </Text>
                   
                </View>
               

               <View style={{
                   flexDirection:"row",
                   marginTop:-5,
                   alignItems:"center"
               }}>
                 
               </View>

               <Text style={{
                   color:"#a2a2db",
                   fontSize:12
               }}>
                  {currentDate}
               </Text>


               <View style={{
                   flexDirection:"row",
                   marginTop:15,
                   alignItems:"center"
               }}>
               
               </View>

               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginBottom : 5
               }}>
                  
                  
               </View>

               <Input placeholder='kw'
                  
                 value={cons} 
                 onChangeText={(text) => setcons(text)}    
                 />
               <View style={{
                   flexDirection:"row",
                   marginTop:10,
                   alignItems:"center"
               }}>
                  
                 
               </View>

               <View style={{
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontSize:16,
                       color:"#522289"
                   }}>
                       Consomation :
                   </Text>
                   <Text style={{
                       fontSize:16,
                       color:"#4b3ca7",
                       paddingLeft:42,
                   }}>
                       {cons} kw
                   </Text>
               </View>
                 
               <TouchableHighlight
                underlayColor="#6600bb"
                style={{
                    width:200,
                    marginLeft:5,
                    elevation:2,
                    marginTop:20,
                    backgroundColor:"#DF062D",
                    paddingVertical:13,
                    borderRadius:25,
                    alignSelf:"center"
                }}
                onPress={() => {
                    
                    if(cons==''){
                        alert('Entrer la consomation')
                    }
                    else{
                        db.collection(props.p).doc('mois'+props.p2).update({
                            consomation: cons + ' kw',
                            paye : "non" , 
                            open : false ,
                            date : currentDate,}) 
                            Alert.alert(
                                "Succes",
                                "Consomation Ajoute avec succes",
                                [
                                  
                                  {text: "Ok",
                                    onPress: () => {props.onPress},
                                    
                                  },
                                ] ); }
                    
                
                
                }}
               >
                   <Text style={{
                       color:"#FFF",
                       textAlign:"center",
                       fontSize:18
                   }}>
                       Ajouter
                   </Text>
               </TouchableHighlight> 


               <TouchableHighlight
                underlayColor="#6600bb"
                style={{
                    width:200,
                    marginLeft:5,
                    elevation:2,
                    marginTop:15,
                    backgroundColor:"#DF062D",
                    paddingVertical:13,
                    borderRadius:25,
                    alignSelf:"center"
                }}
                onPress={props.onPress}
               >
                   <Text style={{
                       color:"#FFF",
                       textAlign:"center",
                       fontSize:18
                   }}>
                       Annuler
                   </Text>
               </TouchableHighlight>

               <Text style={{
                   color:"#a2a2db",
                   alignSelf:"center",
                   paddingLeft:32,
                   fontSize:12,
                   marginVertical:16,
               }}>
                   Ajouter la consommation 
               </Text>
            </View>
        )
    }

    export default ModalCard ;