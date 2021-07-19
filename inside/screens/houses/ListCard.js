import { bool } from "prop-types";
import React, {useEffect , useState} from "react";
import { View, Text, TouchableOpacity,FlatList, ScrollView } from "react-native";
import db from '../../../firebase'



 function ListCard (props ) {
   
 


  


  const [userss, setUserss] = useState([])
  useEffect(() => {

   
  db.collection(props.p)
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
      
     <View>
      
       <FlatList
          numColumns={1}
           horizontal={false}
           data={userss}
           renderItem={({ item }) => (

      <ScrollView>
      <TouchableOpacity
      
       onPress={
        item.open?props.onPress: null 

        
      
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

     
    );
  }


export default ListCard ;