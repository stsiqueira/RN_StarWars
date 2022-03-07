import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Pilot from '../item/Pilot'

const ListPilots = ({ pilots, updateFavoritePilots }) => {
  return (
    <ScrollView style={{ padding: 16 }}>
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