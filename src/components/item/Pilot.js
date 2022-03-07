import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GetLocalData }from '../../services/LocalStorage'

const Pilot = ({ pilot }) => {
  const hasToken = GetLocalData('token')
  const starships = useSelector(state => state.starships)
  const [ pilotStarships, setPilotStarships ] = useState([]);

  const FilterStarships = () => {
    let array = []
    pilot.starships.map(
      (starshipUrl) =>
        (array = [...array, ...starships.filter((starship) => starship.url === starshipUrl)]),
    );
    setPilotStarships(array);
  }
  useEffect(()=> FilterStarships() , [])
  return (
    <View style={styles.container}>
      {hasToken ? (
        <View>
          <Button
            onPress={() => console.log('pilot')}
            title={pilot.favorite ? 'Remove Favorite' : 'Add Favorite'}
          />
        </View>
      ) : (
        <></>
      )}
      <Text>Name: {pilot.name}</Text>
      <Text>Gender: {pilot.gender}</Text>
      <Text>Starships:</Text>
      {pilotStarships?.map((starship, index) => {
        return (
          <Text style={{ paddingLeft: 12 }} key={index}>
            {starship.name} / {starship.starship_class}
          </Text>
        );
      })}
    </View>
  )
}

export default Pilot

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 5,
    marginBottom: 12,
  },
});
