import  React, { useCallback, useEffect } from 'react';
import  { Linking } from 'react-native';
import { PUB_KEY } from '@env';
import { STRIPE_ACC_ID } from '@env';
import { AuthProvider } from './navigation/context/AuthContext';
import { CartProvider } from './navigation/context/CartContext';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import { StackOrTabsNav } from './navigation/stack-nav/StackOrTabsNav';



const App = () => { 
  const { handleURLCallback } = useStripe();
  
  const handleDeepLink = useCallback(
      async ( url ) => {
        if (url && url.includes('safepay')) {
              await handleURLCallback(url);
          navigation.navigate('SucessScreen', { url });
          }
      }, 
  );


  useEffect(() => {
      const getUrlAsync = async () => {
        const initialUrl = await Linking.getInitialURL();
        handleDeepLink(initialUrl);
        console.log(initialUrl, 'initialUrl')
      };

  getUrlAsync();

  const deepLinkListener = Linking.addEventListener("url", (event) => {
      handleDeepLink(event.url);
    }
  );

  return () => deepLinkListener.remove();
}, [handleDeepLink]);

  return (
    <AuthProvider>
      <CartProvider >
        <StripeProvider 
          publishableKey={ PUB_KEY }
          merchantIdentifier="merchant.com.PlanitEats"
          urlScheme='planiteats.app://'
          stripeAccountId={ STRIPE_ACC_ID }
        >
            <StackOrTabsNav />
          </StripeProvider>
      </CartProvider>
    </AuthProvider>
  ); 
};
export default App;
