import React, { useState } from "react";
import {
    CardField,
    CardFieldInput,
    useStripe,
  } from '@stripe/stripe-react-native';
  import { StripeProvider } from '@stripe/stripe-react-native';
  import { PUB_KEY } from '@env';
  import { StatusBar } from 'native-base';

 const PaymentScreen = ({ children }) => {
    const [loading, setLoading] = useState(true);
  
  return(
    <StripeProvider publishableKey={ PUB_KEY } merchantIdentifier="merchant.com.PlanitEats">
      {children}
    </StripeProvider>
  );
  };
  

  // export default PaymentScreen = () => {
  //   const [card, setCard] = useState(CardFieldInput.Details | null);
  //   const {confirmPayment, handleCardAction} = useStripe()
  //   return(
  //       <CardField
  //     postalCodeEnabled={true}
  //     placeholder={{
  //       number: '4242 4242 4242 4242',
  //     }}
  //     cardStyle={{
  //       backgroundColor: '#FFFFFF',
  //       textColor: '#000000',
  //     }}
  //     style={{
  //       width: '100%',
  //       height: 50,
  //       marginVertical: 30,
  //     }}
  //     onCardChange={(cardDetails) => {
  //       setCard(cardDetails);
  //     }}
  //     onFocus={(focusedField) => {
  //       console.log('focusField', focusedField);
  //     }}
  //   />
  //   )
  // }

