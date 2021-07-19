import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';

const ViewList = ({navigation}) =>{
    return (
        <View style={{flex:1}}>
        <ScrollView>

        <TouchableOpacity style={styles.item} 
       onPress={()=>{
         navigation.navigate('Agents')
       }}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>Agents</Text>
          </View>
          <View style={styles.circular}></View>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.item}
        onPress={()=>{
          navigation.navigate('Clients')
        }}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>Clients</Text>
          </View>
          <View style={styles.circular}></View>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>Houses</Text>
          </View>
          <View style={styles.circular}></View>
        </TouchableOpacity> */}

        </ScrollView>
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
        backgroundColor: '#55BCF6',
        opacity: 0.4,
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
export default ViewList