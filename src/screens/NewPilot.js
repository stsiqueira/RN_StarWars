import { StyleSheet, Text, View , TextInput, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import {RadioButton } from 'react-native-paper'
import {Picker} from '@react-native-picker/picker';
import uuid from 'react-native-uuid';
import * as actionCreators from '../state/actionCreators/Index';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

const NewPilot = ({navigation}) => {

  const starships = useSelector(state => state.starships)
  const pilots = useSelector(state => state.pilots)
  const dispatch = useDispatch();
  const { savePilots } = bindActionCreators(actionCreators, dispatch);

  const handleForm = (values) => {
    const newObj = {...values, starships:[values.starship], id: uuid.v4()}
    let array = [...pilots, newObj]
    savePilots(array)
    navigation.navigate('Pilots', { updateShowPilot:true})
  }

  return (
    <SafeAreaView>
      <Formik
        initialValues={{name:'', gender:'', starship:''}}
        onSubmit={(values, {resetForm}) => {
          handleForm(values)
          resetForm()
        }}>
          {
            ({ handleBlur, handleChange, handleSubmit, values, setFieldValue })=>(
              <View style={styles.form}>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  values={values.name}
                  placeholder="ex. john doe"
                  style={styles.input}
                />
                  <RadioButton.Group
                      onValueChange={handleChange('gender')}
                      value={values.gender}
                  >
                    <View>
                        <RadioButton value='male'></RadioButton>
                        <Text>Male</Text>
                    </View>
                    <View>
                        <RadioButton value='female'></RadioButton>
                        <Text>Female</Text>
                    </View>
                </RadioButton.Group>
                <Picker
                  selectedValue={values.starship}
                  placeholder="just a test"
                  onValueChange={ itemValue => setFieldValue('starship', itemValue) }>
                    <Picker.Item label="Choose a starship" value={null} disabled/>
                    {
                      starships.map((starship, index)=>{
                        return(
                          <Picker.Item key={index} 
                          label={`${starship.name}/${starships.starship_class}`} 
                          value={starship.url} />
                        )
                      })
                    }

                </Picker>
                <Button onPress={handleSubmit} title="Add new Pilot" />
              </View>
            )
          }
      </Formik>
    </SafeAreaView>
  )
}

export default NewPilot

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    // borderWidth:1,
    // borderColor: 'black',
    fontSize: 24,
    marginVertical: 12,
    padding: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  button: {},
});
