import React, {useState} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import {globalStyles} from '../styles/global'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function Home ({navigation}) {
  const [reviews,setReviews] = useState([
    { title: 'Cochinita pibil', rating: 5, body: 'lorem ipsum', key: '1'},
    { title: 'Tacos de pastor', rating: 4, body: 'lorem ipsum', key: '2'},
    { title: 'Hamburguesa con papas', rating: 2, body: 'lorem ipsum', key: '3'},
  ]);
    
  return (
    <View style={globalStyles.container}>
      <FlatList
        data= {reviews}
        renderItem={({item})=>(
          <TouchableOpacity onPress ={()=>navigation.navigate('RevDetails',item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
