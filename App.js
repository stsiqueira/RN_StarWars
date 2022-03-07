import { NavigationContainer } from "@react-navigation/native";
import Stack from './src/stackNavigation/Index'
import { Provider } from 'react-redux'
import { store } from './src/state/store/Store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>
  );
}

