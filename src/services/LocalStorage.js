import AsyncStorage from "@react-native-async-storage/async-storage";

export const StoreLocalData = async (localData, data) => {
  try {
    await AsyncStorage.setItem(localData, JSON.stringify(data))
  } catch (err) {
    console.log('Error storing local data:', err);
  }
}

export const GetLocalData = async (localData) => {
  try {
    return await AsyncStorage.getItem(localData);
  } catch (err) {
    console.log('Error getting local data:', err);
  }
};

export const RemoveLocalData = async (localData) =>{
  try{
    await AsyncStorage.removeItem(localData)
  } catch (err) {
    console.log('Error removing local data:', err)
  }

}