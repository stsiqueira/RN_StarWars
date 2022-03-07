
import ListPilots from '../components/lists/ListPilots'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Text } from 'react-native';
import { GetData } from '../services/Api';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../state/actionCreators/Index'

const Pilots = () => {
  const [loading, setLoading ] = useState(true)
  const pilots = useSelector(state => state.pilots)
  const dispatch = useDispatch();
  const { savePilots, saveStarships } =bindActionCreators(actionCreators, dispatch)

  const getPilots = async () => {
    const data = await GetData('people');
    savePilots(data);
    setLoading(false);
  }
  const getStarships = async () => {
    const data = await GetData('starships');
    saveStarships(data);
  }
  useEffect(()=>{
    getPilots();
    getStarships();
  },[])

  const updateFavoritePilots = (pilotUrl) => {
    let array = [];
    pilots.map( pilot => {
      let newPilot = {}
      if(pilot.url === pilotUrl) {
        newPilot = {...pilot, favorite:!pilot.favorite}
      }else{
        newPilot = pilot
      }
      array.push(newPilot)
    })
    savePilots(array)
  }

  if(loading) return <Text>Loading...</Text>
  return <ListPilots pilots={pilots} updateFavoritePilots={updateFavoritePilots}/>;
}

export default Pilots
