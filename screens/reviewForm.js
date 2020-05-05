import React from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5','Rating debe ser un numero entre 1 y 5',(val)=>{
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

export default function ReviewForm ({addReview}) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: ''}}
        validationSchema={reviewSchema}
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
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
            <TextInput
              multiline minHeight={80}
              style={globalStyles.input}
              placeHolder='Review body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
            <TextInput
              style={globalStyles.input}
              placeHolder='Rating'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
            {/* <Button title='submit' color='maroon' onPress={props.handleSubmit} /> */}
            <FlatButton text='enviar' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({})
