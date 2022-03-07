import { createStackNavigator } from "@react-navigation/stack"
import TabNavigation from '../tabNavigation/Index'
import { useState } from "react";
import LoginForm from "../components/LoginForm";

const Stack = createStackNavigator();

const Index = () => {
  const [hasToken, setHasToken] = useState(true);

  return (
    <Stack.Navigator>
      { !hasToken ? <Stack.Screen name="Login" component={LoginForm}/> : <></> }
      <Stack.Screen name="home" component={TabNavigation}/>
    </Stack.Navigator>
  )
}

export default Index
