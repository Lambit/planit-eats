import React, { useState, useEffect } from 'react';
import { Alert, Button, StatusBar, Image, ActivityIndicator } from 'react-native';

// Components
import CustomAlert from '../components/custom-alert/CustomAlert';
import { PUB_KEY } from '@env';
import { formatCurrency } from '../utils/formatCurrency';
import { customAppearance } from '../utils/constants/constants';

//Packages
import { Heading, Box, Text, Pressable, HStack, Divider, VStack  } from 'native-base';
import {useStripe, CardField, PaymentSheet, CardFormView, CardForm } from '@stripe/stripe-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';


// Checkout-LRONZgeEOBmNWlB6zBege

const CheckoutScreen = ({ navigation, route }) => {
  const { 
    email, 
    zip, 
    planId, 
    planPrice, 
    planName, 
    totalPlusTax, 
    totalPlusTaxShip, 
    pickOrShipValue, 
    location, 
    boxContent, 
    customerId,
    fullName, 
    clientsPhone, 
    clientsAddress, 
    clientsCity, 
    clientsState,
   } = route.params;

  const amountPlusShip =  pickOrShipValue === 'ship' ? formatCurrency(totalPlusTaxShip) * 100 : formatCurrency(totalPlusTax) * 100;
  const amountPayable = Math.floor(amountPlusShip);

  const { initPaymentSheet, presentPaymentSheet, } = useStripe();
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState('');
  const [emphKey, setEmphKey] = useState('');

  console.log(route.params, '===================checkout');
  console.log(pickOrShipValue);
  console.log(boxContent);
  console.log(amountPayable);
  console.log(key);

  useEffect(() => {
      payIntentInit();
  }, []);

  useEffect(() => {
    if (key) { 
      initializePaymentSheet();
    }
  }, [key]);
  
  const payIntentInit = async () => { 
    await axios({
      method:'POST',
      url:'https://us-central1-planiteats-87148.cloudfunctions.net/createPaymentIntent',
      data:{
        amount: amountPayable,
        customer: customerId,
        receipt_email: email,
        description: `This order contains ${planName} with is a weekly reacurring subscription in the amount of ${amountPayable.toFixed(2)}. Thank you, ${fullName}`,
        city: clientsCity,
        line1: clientsAddress,
        state: clientsState,
        postal_code: zip, 
        name: fullName,
        phone: clientsPhone,
      },
    })
    .then((res) => {
      // console.log(res, 'resssssssssssss');
      // console.log(res.data, 'ress----sdata');
      setKey(res.data.clientSecret);
      setEmphKey(res.data.ephemeralKey);
    })
    .catch((e) => Alert.alert(e.message))
  };



  const initializePaymentSheet = async () => {
    if(!key) {
      return;
    }
    await initPaymentSheet({
      paymentIntentClientSecret: key,
      customer: customerId,
      customerEphemeralKeySecret: emphKey,
      allowsDelayedPaymentMethods: true,
      appearance: customAppearance,
      returnURL: 'https://us-central1-planiteats-87148.cloudfunctions.net/sigResponse',
    });
 

    
  };
  const openPaymentSheet = async () => {
    if(!key) {
      return;
    }
    await presentPaymentSheet({key});


  };

 

   return (
     <>
     <ScrollView>
    <Heading fontSize="xl"  p='6' bg='#FFF'>
    Checkout!
    </Heading>
    <Box safeArea='2'
        w='100%'
        bg='coolGray.300'
        justifyItems='center'
      >
      <Heading textAlign='center' fontSize="sm" py='1'>
        Order Review
      </Heading> 
        <Divider bg='coolGray.400' w='100%' my='0.5'/>
          <HStack safeArea='2' justifyContent='space-between' >
            <Box space={2} 
              w='40' 
              bg='#004282' 
              alignItems='center' 
              justifyContent='center' 
              shadow={2}
            >
              <Text fontWeight='extrabold' fontSize='xs' color='#FFF' >
                Customer
              </Text>

              <Divider bg='#FFF' w='70%' my='0.5'/>

              <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
                {fullName}
              </Text>
              <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
                {email}
              </Text>
              <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
                {zip}
              </Text>
              <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
                { pickOrShipValue === 'ship' ? 'Shipping' : location }
              </Text>

            </Box>

           <VStack safeArea='2'
            flexDir='column' 
            alignItems='center' 
            justifyContent='center' 
            bg='#004282' 
            w='40'
            borderRadius='4'
            shadow={4}
          >
            <Box alignItems='center'>
              <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
                {planName}
              </Text>

              <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
              ${planPrice}
              </Text>

              <Divider bg='#FFF' w='16' my='0.5'/>

              <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
                Tax
              </Text>
              <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
              ${formatCurrency(totalPlusTax)}
              </Text>

              <Divider bg='#FFF' w='16' my='0.5'  />

              <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
              { pickOrShipValue === 'ship' ? 'Total Plus Shipping' : null }
              </Text>
              <Text fontWeight='extrabold' fontSize='2xs' color='orange.400' >
              ${ pickOrShipValue === 'ship' ? formatCurrency(totalPlusTaxShip) : null }
              </Text>
            </Box>
           </VStack>
          </HStack>

          <Divider bg='coolGray.400' w='100%' my='0.5'/>

          <VStack  space={4} alignItems="center"  w='100%'>
            <Heading textAlign='center' fontSize="sm" py='1'>
              {planName}
            </Heading> 
              <Box justifyContent='center' pr='2' borderRadius='4' w='90%' > 
              <HStack justifyContent='space-between' alignItems='center'>

                          <Text  textAlign='center'fontWeight='extrabold' fontSize='2xs' >
                            Image
                        </Text>

                        <Text  textAlign='center' fontWeight='extrabold' fontSize='2xs'  >
                            Name & Quantity
                        </Text>
                   

                        <Text  textAlign='center' fontWeight='extrabold' fontSize='2xs'  >
                            Price
                        </Text>
              </HStack>
              </Box>

                {boxContent.map((cartItems) => (
                  <Box cartItems={cartItems} key={cartItems.id}
                    w='100%'  
                    p='2' 
                    bg='#FFF'
                    borderRadius='8'
                    shadow={4}
                  >
                    <HStack justifyContent='space-between' shadow='6'>
                      <Image 
                        source={cartItems.id.images}
                        alt={cartItems.id.name }
                        style={{
                          height: 40,
                          width: 40,
                          borderRadius:8,
                          paddingHorizontal: 4,
                        }}
                      />
                      <VStack justifyContent='center' bg='#004282' p='1' borderRadius='4' w='50%' >
                    <Text  textAlign='center' fontSize='2xs' color='#FFF'>
                        {cartItems.id.name}
                    </Text>
                    <Text  textAlign='center' fontWeight='extrabold' fontSize='xs' color='orange.400' >
                        {cartItems.qty}
                    </Text>
                    </VStack>
                    <Box justifyContent='center' bg='#004282' p='1' borderRadius='4' w='20%' >
                    <Text  textAlign='center' fontWeight='extrabold' fontSize='xs' color='orange.400' >
                        ${cartItems.id.metadata.price}
                    </Text>
                    </Box>
                    </HStack>
                  </Box>
                  ))}
          </VStack> 
        </Box>
      <Box alignItems='center'>                        
      <Box 
        w='80%'
        p="4" m='6'
        bg='coolGray.300'
        borderRadius='16'
        shadow='6'
        shadowColor='#000'
        alignItems='center'  
      >
         <Button
          variant="primary"

          title="Checkout"
          onPress={openPaymentSheet}
        />    
 
      </Box>
      </Box>

    </ScrollView>
    </>
  );
}
export default CheckoutScreen;


// useEffect(() => { 
//   axios({
//     method:'POST',
//     url:'https://us-central1-planiteats-87148.cloudfunctions.net/createPaymentIntent',
//     data:{
//       amount: amountPlusShip,
//       customer: customerId,
//       receipt_email: email,
//       description: totalAmount && planId
//     },
//   })
//   .then((res) => {
//     console.log(res, 'resssssssssssss');
//     console.log(res.data, 'ress----sdata');
//     console.log(res.data.clientSecret, 'ress-----secret');
//     setKey(res.data.clientSecret);
//     initPaymentSheet({paymentIntentClientSecret: key});
//   })
//   .catch((e) => Alert.alert(e.message))
// },[]);



// return loading ? (
//   <ActivityIndicator size="large" style={StyleSheet.absoluteFill} />
// ) : (
//   <ScrollView
//     accessibilityLabel="payment-screen"
//     style={styles.container}
//     keyboardShouldPersistTaps="always"
//   >
//     {children}
//     {/* eslint-disable-next-line react-native/no-inline-styles */}
//     <Text style={{ opacity: 0 }}>appium fix</Text>
//   </ScrollView>
// );
// };
