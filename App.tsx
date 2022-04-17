import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { Navigation } from './src/router/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}

export default App;