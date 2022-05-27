import  React from 'react';
import { PUB_KEY } from '@env'
import {SafeAreaProvider, initialWindowMetrics, } from 'react-native-safe-area-context';
import { CartProvider } from './navigation/context/CartContext';
import { AuthProvider } from './navigation/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { StackOrTabsNav } from './navigation/stack-nav/StackOrTabsNav';
import { StripeProvider } from '@stripe/stripe-react-native';
import { StatusBar } from 'native-base';


const App = () => {  
  return (
    <AuthProvider>
      <CartProvider >
        <StripeProvider 
          publishableKey={PUB_KEY}
        >
          <StatusBar 
            bg='#000'
            barStyle="light-content"
            translucent
          />
          <NavigationContainer>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <StackOrTabsNav />
            </SafeAreaProvider>
          </NavigationContainer>
          </StripeProvider>
      </CartProvider>
    </AuthProvider>
  ); 
};
export default App;
