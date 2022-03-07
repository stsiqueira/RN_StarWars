import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Pilot from '../item/Pilot'

const ListPilots = ({ pilots }) => {
  return (
    <ScrollView style={{ padding: 16 }}>
      {
        pilots.map((pilot, index)=> (
          <Pilot key={index} pilot={pilot}/>
        ))
      }
    </ScrollView>
  )
}

export default ListPilots

const styles = StyleSheet.create({})