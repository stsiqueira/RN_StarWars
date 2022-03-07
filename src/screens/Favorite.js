import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../state/actionCreators/Index'
import { useFocusEffect } from '@react-navigation/native'
import ListPilots from '../components/lists/ListPilots'
const Favorite = () => {
  const [loading, setLoading ] = useState(false)
  const pilots = useSelector( state => state.pilots)
  const [ favoritePilots, setFavoritePilots ] = useState([])
  const dispatch = useDispatch();
  const { savePilots } = bindActionCreators( actionCreators, dispatch)

  const updateFavoritePilots = async (pilotUrl) => {
    let array = favoritePilots.filter(pilot => pilot.url !== pilotUrl)
    setFavoritePilots(array)
    array = []
    pilots.map( pilot => {
      let newPilot = {}
      if(pilot.url === pilotUrl){
        newPilot = {...pilot, favorite:!pilot.favorite}
      }else{
        newPilot = pilot
      }
      array.push(newPilot)
    })
    savePilots(array)
  }
  const FilterFavoritePilots = () => {
    let array = [];
    pilots.map( pilot => {
      if(pilot.favorite) array = [...array, pilot];
    })
    setFavoritePilots(array);
    setLoading(false);
  }

  useEffect(() => FilterFavoritePilots(), pilots)
 
  if(loading) return <Text>Loading ...</Text>
  if(favoritePilots.length < 1) return <Text>No Favorite Pilots selected</Text>
  return <ListPilots pilots={favoritePilots} updateFavoritePilots={updateFavoritePilots}/>
}

export default Favorite

const styles = StyleSheet.create({})