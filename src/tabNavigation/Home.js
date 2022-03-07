import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorite from "../screens/Favorite";
import Logout from "../screens/Logout";
import NewPilot from "../screens/NewPilot";
import Pilots from "../screens/Pilots";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pilots" component={Pilots} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="New" component={NewPilot} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
};

export default Home;
