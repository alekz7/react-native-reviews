import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import {globalStyles} from '../styles/global'

export default function Home ({navigation}) {
  
  const pressHandler = ()=>{
    // estas dos lineas hacen lo mismo
    navigation.navigate('RevDetails');
    // navigation.push('RevDetails');
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> Home Screen </Text>
      <Button title='go to review details' onPress={pressHandler}/>
    </View>
  )
}
