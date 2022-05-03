import * as React from 'react';
import { useState, useEffect } from 'react';
import {SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { NativeBaseProvider, extendTheme } from "native-base";
import eatsTheme from './assets/theme/theme';
import { NavigationContainer } from '@react-navigation/native';
import { StackOrTabsNav } from './navigation/stack-nav/stacks-or-tabs/StackOrTabsNav';
import { StatusBar } from 'react-native';
import { getAuth } from 'firebase/auth';



const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NativeBaseProvider eatsTheme={eatsTheme} >
        <NavigationContainer >
            <StackOrTabsNav />
            <StatusBar />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  ); 

};

export default App;
