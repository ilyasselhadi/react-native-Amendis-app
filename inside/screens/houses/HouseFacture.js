// import React, { FC, useEffect } from 'react';
// import { TouchableOpacity } from 'react-native';
// import { View, Text, StyleSheet, ScrollView } from "react-native";
// import styles from "./styles";
// import db from '../../../firebase'
// import { useState } from 'react';
// import { Input } from 'react-native-elements';




// const HouseFacture = ({ route }) => {


//   const [Client, setClient] = useState('')
//   const { Props } = route.params;



//   return (

//     <View>
//       <Input placeholder='mois'
//         autoFocus
//         value={Client} onChangeText={(text) => setClient(text)}
//       />
//       <TouchableOpacity

//         onPress={() => {
//           db.collection('Houses').doc(Props).set({
//             mois7: Client + ' kw',

//           })
//         }} >
//         <Text  >Ok</Text>
//       </TouchableOpacity>

//     </View>




//   );

// }
// export default HouseFacture

// const styless = StyleSheet.create(
//   {
//     row: {
//       flexDirection: 'row',
//       padding: 10,
//       paddingTop: 15,
//       alignItems: 'center',

//     },


//   }
// )


import React from "react";
import { View, Text, Alert, Modal, Image, ImageBackground,FlatList,TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ModalCard from "./ModalCard";
import ListCard from "./ListCard";
import { ScrollView } from "react-native-gesture-handler";
import Entypo from 'react-native-vector-icons/Entypo';
import { useState ,useEffect } from 'react';
import db from '../../../firebase' ;


 
const HouseFacture = ( { route }) => {

  const [modalVisible, setmodalVisible] = useState(false);
  modalVisible => setmodalVisible(modalVisible)
   const { Props , Props2 , Props3 , Props4 } = route.params;

   const [ClientName, setClientName] = useState("")
   const [Adresse, setAdresse] = useState("")
   const [Serie, setSerie] = useState("")
   const [num, setnum] = useState("")
   
   const [numm , setnumm] = useState();

 
              useEffect(() => {
                    db.collection("Clients").doc(Props)
                    .get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data())
                    setClientName(doc.data().ClientName)
                    setAdresse(doc.data().Adresse)
                    setSerie(doc.data().Serie)
                    setnum(doc.data().num)
                } else {
        
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
}, [])


const [userss, setUserss] = useState([])
  useEffect(() => {

   
  db.collection(Props4)
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

    return (
      <ImageBackground
        source={require("../../assets/b1.png")}
        style={{ height: "100%", width: "100%" }}
      >
        
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          
        </View>
        
        <View
          style={{
            width: "100%",
            marginTop: 20,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: "",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
         <Entypo name={'home'} size={50} color={'#DF062D'} />
          </View>
          
          
        <Text
            style={{
              fontSize: 24,
              color: "black",
             
            }}
          >
            {Props}   
          </Text>
          
          </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          
          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 35,
            }}
          >
            - - - - - - - - - - - - - - - -
          </Text>
         
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              color: "#a2a2db",
             
            }}
          >
            {Props2}, {Props3}
          </Text>
         
        </View>
        <Text
          style={{
            paddingHorizontal: 40,
            color: "#a2a2db",
          
          }}
        >
          Serie : {Props4}
        </Text>
          
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 50,
            marginTop: 30,
          }}
        >
        
        </View>

          <ScrollView
         //showsVerticalScrollIndicator={false}
          // style={{
          //   marginVertical: 5,
          // }}
        >  
       
          {/* <ListCard   
            p={Props4}
            onPress={() => {
             // this.setModalVisible(true);
             setmodalVisible(true)
            }}
          /> */}


<View>
      
      <FlatList
         numColumns={1}
          horizontal={false}
          data={userss}
          renderItem={({ item }) => (

     <ScrollView>
     <TouchableOpacity
     
      onPress={ () =>{item.open?setmodalVisible(true): null 
        setnumm(item.num)
      
      }
       

       
     
     }

       style={{
         paddingHorizontal: 32,
         alignSelf: "center",
         marginTop: 20,
         backgroundColor: "#fff",
         height: 182,
         elevation: 1,
         width: 270,
         borderRadius: 15,
       }}
     >
       
       <View
         style={{
           flexDirection: "row",
           paddingTop: 20,
           alignSelf: "center",
         }}
       >
         
         <Text
           style={{
            
             color: "#4b3ca7",
             fontSize: 20,
           }}
         >
          
         </Text>
        

         <Text
           style={{
             fontSize: 20,
             color: "#4b3ca7",
              paddingHorizontal: 14,
           }}
         >
           
           Mois : {item.num}
         </Text>
         <Text
           style={{
             color: "#a2a2db",
             
             fontSize: 20,
           }}
         >
          --------
         </Text>
       </View>

       <View
         style={{
           flexDirection: "row",
           marginTop: -5,
           alignItems: "center",
         }}
       >
     
      
       </View>

       <View
         style={{
           flexDirection: "row",
           marginTop: 20,
           alignItems: "center",
         }}
       >
         <Text
           style={{
             color: "#522289",
             fontSize: 18,
           }}
         >
           Payé :
         </Text>

         <Text
           style={{
             color: "#DF062D",
             
             paddingLeft: 80,
             fontSize: 18,
           }}
         >
           {item.paye}
         </Text>
       </View>

       <Text
         style={{
           color: "#a2a2db",
           fontSize: 12,
         }}
       >
        {item.date}
       </Text>

       <Text
         style={{
           fontSize: 17,
           marginRight: -5,
           marginVertical: 8,
           color: "#a2a2db",
         }}
       >
         - - - - - - - - - - - - - - - - - - 
       </Text>

       <View
         style={{
           flexDirection: "row",
           marginTop: -8,
           alignItems: "center",
         }}
       >
         <Text
           style={{
             color: "#522289",
             fontSize: 16,
           }}
         >
          Consomation :
         </Text>
         <Text
           style={{
             color: "#4b3ca7",
             paddingLeft: 75,
             fontSize: 16,
           }}
         >
           {item.consomation}
         </Text>
       </View>
     </TouchableOpacity>
     </ScrollView>
          )}
          />
     
     </View>








          
         

          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal is closed");
              }}
            >
              <ModalCard
                p={Props4}
                p2 = {numm}
                onPress={() => {
                  //this.setModalVisible(false);
                  setmodalVisible(false)
                }}
              />
            </Modal>
          </View>
          
       </ScrollView> 
      </ImageBackground>
    );
  }

export default HouseFacture ;