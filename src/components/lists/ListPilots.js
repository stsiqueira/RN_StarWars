import React, { useState } from 'react';
import { ScrollView, TextInput, StyleSheet, Button, View} from 'react-native';
import { useSelector } from 'react-redux'
import Pilot from '../item/Pilot'

const ListPilots = ({ pilots, updateFavoritePilots }) => {
  const [search, setSearch] = useState('')
  const starships = useSelector(state => state.starships)
  const [ showPilots, setShowPilots] = useState(pilots)

  return (
    <ScrollView style={{ padding: 16 }}>
      {/* <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom:12}}>
        <TextInput value={search} onChangeText={setSearch}  style={styles.input} />
        <Button 
        // onPress={FilterBySearch} 
        title="Search" />
      </View> */}
      {
        pilots.map((pilot, index)=> (
          <Pilot key={index} pilot={pilot} updateFavoritePilots={updateFavoritePilots}/>
        ))
      }
    </ScrollView>
  )
}

export default ListPilots

const styles = StyleSheet.create({})