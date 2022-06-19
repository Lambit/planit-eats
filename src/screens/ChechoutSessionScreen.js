import React, { useState, useEffect } from 'react';
import {  Alert, Button } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context'

// Components
import FormButton from '../components/form-button/FormButton';
import CustomInput from '../components/custom-input/CustomInput';
import CustomSelect from '../components/custom-select/CustomSelect';
import { formatCurrency } from '../utils/formatCurrency';
import CheckoutScreen from './CheckoutScreen';

// Packages
import {  Box, Heading, VStack, ScrollView, Text, HStack, Checkbox  } from 'native-base';
import axios from 'axios';
import { useStripe } from '@stripe/stripe-react-native';

export default function ChechoutSessionScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState('');

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`https://us-central1-planiteats-87148.cloudfunctions.net/createPaymentForBulkBox`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent, ephemeralKey, customer, } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (

      <Button
        variant="primary"
        disabled={!loading}
        title="Checkout"
        onPress={openPaymentSheet}
      />

  );
}



// const fetchPaymentSheetParams = async () => {
//   await axios({
//     method: 'POST',
//     url: '',
//     data: {
//       customer,
//       ephemeralKey,
//       clientSecret,
//       amount: amountPlusShip
//     },
//   })
//   .then((res) => {
//     console.log(res, 'resssssssssssss');
//     console.log(res.data, 'ress----sdata');
//     console.log(res.data.clientSecret, 'ress-----secret');
//     setKey(res.data.clientSecret);
//   })
//   const { paymentIntent, ephemeralKey, customer} = await response.json();

//   return {
//     paymentIntent,
//     ephemeralKey,
//     customer,
//   };
// };

//---create payment initenet with stripe customer Id then display action sheet---
// exports.createPaymentForBulkBox  = functions.https.onRequest(async (req, res) =>{
//   const customer = await stripe.customers.create();
//   const ephemeralKey = await stripe.ephemeralKeys.create(
//     {customer: customer.id},
//     {apiVersion: '2020-08-27'}
//   );
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: req.body.amount,
//     currency: 'usd',
//     customer: customer.id,
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });
//   res.json({
//     paymentIntent: paymentIntent.client_secret,
//     ephemeralKey: ephemeralKey.secret,
//     customer: customer.id,
//     publishableKey: 'pk_test_51L3DGEDcsD5eOgbWUZTqGI5mWaNXVIj9mtOX8Ywor8fHv3XErIhZpWqRR1Mt8mw44WFXTuMdrjhJWXTzIkYOvIXf00du0tQrjw'
//   });
// });