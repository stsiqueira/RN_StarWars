
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

  if(loading) return <Text>Loading...</Text>
  return <ListPilots pilots={pilots}/>
}

export default Pilots
