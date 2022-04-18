import 'react-native-gesture-handler';
import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { Tabs } from './src/router/Tabs';


const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigation /> */}
      <Tabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;