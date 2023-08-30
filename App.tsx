//import liraries
import * as React from 'react';
import { View } from 'react-native';
import MainStack from './src/navigation';
// create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <MainStack />
    </View>
  );
};
//make this component available to the app
export default App;
