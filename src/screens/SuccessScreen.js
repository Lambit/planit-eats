import React, { useCallback, useEffect } from 'react';
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

//Packages
import { Heading, Box, Text, Pressable, HStack, Divider, VStack  } from 'native-base';
import { useStripe } from '@stripe/stripe-react-native';

const SuccessScreen = () => {
    const { handleURLCallback } = useStripe();
    

    const handleDeepLink = useCallback(
        async ( url ) => {
          if (url && url.includes('success')) {
                await handleURLCallback(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }, 
        [handleURLCallback]
    );


    useEffect(() => {
        const getUrlAsync = async () => {
          const initialUrl = await Linking.getInitialURL();
          handleDeepLink(initialUrl);
        };

    getUrlAsync();

    const deepLinkListener = Linking.addEventListener(
        "url",
      () => {
        handleDeepLink('https://planiteats.page.link/N9CY/success');
      }
    );

    return () => deepLinkListener.remove();
  }, [handleDeepLink]);

  return (
    <Heading fontSize="xl"  p='6' bg='#FFF'>
    Success!
    </Heading>
  );
  };

export default SuccessScreen;