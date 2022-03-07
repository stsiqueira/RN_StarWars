import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login";
import Pilots from "../screens/Pilots";

const Tab = createBottomTabNavigator();

const Guest = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pilots" component={Pilots} />
      <Tab.Screen name="LoginTab" component={Login} />
    </Tab.Navigator>
  );
};

export default Guest;
