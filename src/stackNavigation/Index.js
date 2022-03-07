import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "../tabNavigation/Index";
import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import { GetLocalData } from "../services/LocalStorage";

const Stack = createStackNavigator();

const Index = () => {
  const [hasToken, setHasToken] = useState();
  useEffect(async () => {
    const checkToken = await GetLocalData("token");
    setHasToken(checkToken);
  }, []);

  return (
    <Stack.Navigator>
      {!hasToken ? <Stack.Screen name="Login" component={LoginForm} /> : <></>}
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default Index;
