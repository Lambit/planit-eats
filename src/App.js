import  React, { useCallback, useEffect } from 'react';
import { PUB_KEY } from '@env'
import { AuthProvider } from './navigation/context/AuthContext';
import { CartProvider } from './navigation/context/CartContext';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackOrTabsNav } from './navigation/stack-nav/StackOrTabsNav';
import { linking } from './utils/constants/constants';
import { eatsTheme } from './theme/theme';


const App = () => {  

  return (
    <AuthProvider>
      <CartProvider >
        <StripeProvider 
          publishableKey={ PUB_KEY }
          merchantIdentifier="merchant.com.PlanitEats"
        >
          <NavigationContainer theme={eatsTheme} 
            linking={linking}
          >
            <StackOrTabsNav />
          </NavigationContainer>
          </StripeProvider>
      </CartProvider>
    </AuthProvider>
  ); 
};
export default App;
