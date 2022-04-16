import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './routes/stack-nav/StackNav';
import { StatusBar } from 'react-native';



const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
      <StatusBar />
    </NavigationContainer>
  );
};

export default App;
