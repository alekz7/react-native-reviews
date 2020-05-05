import React from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm ({addReview}) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: ''}}
        onSubmit={(values, actions)=>{
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props)=>(
          <View>
            <TextInput
              style={globalStyles.input}
              placeHolder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeHolder='Review body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeHolder='Rating'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            <Button title='submit' color='maroon' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({})
