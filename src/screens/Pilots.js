
import ListPilots from '../components/lists/ListPilots'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { GetData } from '../services/Api';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../state/actionCreators/Index'
import { useFocusEffect } from '@react-navigation/native';

const Pilots = () => {
  
  const pilots = useSelector(state => state.pilots)
  const starships = useSelector(state => state.starships)
  const dispatch = useDispatch();
  const { savePilots, saveStarships } =bindActionCreators(actionCreators, dispatch)
  const [loading, setLoading ] = useState(true)
  const [ showPilots, setShowPilots] = useState(pilots)
  const [search, setSearch] = useState('')

  const getPilots = async () => {
    const data = await GetData('people');
    savePilots(data);
    setLoading(false);
    setShowPilots(data)
  }
  const getStarships = async () => {
    const data = await GetData('starships');
    saveStarships(data);
  }
  useEffect(()=>{
    getPilots();
    getStarships();
  },[])
  useFocusEffect(() => setShowPilots(pilots))
  const FilterBySearch = () => {
    if(search === '') {
      setShowPilots(pilots)
      return
    }
    let searchArray=[];
    if(search.indexOf(' ') > 0){
      searchArray = search.split(' ')
    }else{
      searchArray.push(search)
    }
    let searchResult = []
    searchArray.map( searchString => {
      starships.map(starship => {
        if(starship.name.toLowerCase().includes(searchString.toLowerCase()) || 
        starship.starship_class.toLowerCase().includes(searchString.toLowerCase())){
          searchResult = [...searchResult, ...starship.pilots]
        }
      })
      pilots.map(pilot=>{
        if( pilot.name.toLowerCase().includes(searchString.toLowerCase()) || 
        pilot.gender.toLowerCase().includes(searchString.toLowerCase())){
          searchResult.push(pilot.url)
        }
      })
      let newPilots = []
        searchResult.map(pilotUrl =>
          newPilots = [...newPilots, pilots.find(pilot => pilot.url === pilotUrl)]
        )
      setShowPilots([...new Set(newPilots)])
    })
  }

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
    setShowPilots(array)
  }

  if(loading) return <Text>Loading...</Text>
  return (
    <ScrollView>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom:12}}>
        <TextInput value={search} onChangeText={setSearch} style={{ borderBottomWidth:1, width:'70%', marginTop:16}}/>
        <TouchableOpacity onPress={FilterBySearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <ListPilots pilots={showPilots} updateFavoritePilots={updateFavoritePilots}/>
    </ScrollView>
  )
}

export default Pilots
