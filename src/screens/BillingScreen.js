import React, { useState, useEffect } from 'react';
import {  Alert } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context'

// Components
import FormButton from '../components/form-button/FormButton';
import CustomInput from '../components/custom-input/CustomInput';
import CustomSelect from '../components/custom-select/CustomSelect';
import { formatCurrency } from '../utils/formatCurrency';
import CheckoutScreen from './CheckoutScreen';

// Packages
import { Button, Box, Heading, VStack, ScrollView, Text, HStack, Radio  } from 'native-base';
import axios from 'axios';


// Firebase
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, sendSignInLinkToEmail } from 'firebase/auth';
import { db } from '../firebase-config';
import { setDoc, doc, getDoc, deleteDoc } from 'firebase/firestore';

// Billing-YAO-_8rUaP711hWduXadV 

const BillingScreen = ({ navigation, route }) => {
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
    fullName, 
    clientsPhone, 
    clientsAddress, 
    clientsCity, 
    clientsState, 
  } = route.params;
  console.log(pickOrShipValue);

  const [stripeUser, setStripeUser] = useState('');  
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState('');
  const [visible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');
  const [formFields, setFormFeilds] = useState({
    email: email,
    password: '',
    address: '',
    city: '',
    state: '',
    zip: zip,
    fullName: '',
    phone: ''
  });

  console.log(route.params, 'billing screen.......');

  //----Show button color on password input-----
  const handleClick = () => setShow(!show);

  //---Remove form isInvalid and errors state---
  const handleErrors = () => setIsVisible(true);  



   //---Backend Call to firebase functions-------------------------
  async function customerCreadtedOnQuickBuy() { 
    await axios({
      method:'POST',
      url:'https://us-central1-planiteats-87148.cloudfunctions.net/checkoutCustomer',
      data: {
        city: formFields.city,
        line1: formFields.address,
        state: formFields.state,
        postal_code: zip, 
        description: planId && zip,
        email: email,
        name: formFields.fullName
      }
    })
    .then((res) => {
      console.log(res.data.customer.id, '------billl---res.custttt---id');
      setStripeUser(res.data.customer.id);
      Alert.alert(`Thank you ${email}! You will receive an email upon checkout!`)
    })
    .catch((e) => Alert.alert(e.message));
  };
  

  // --------Navigation Functions--------
  const toPayment = () => {
      navigation.navigate('Checkout', {
        email: email,
        zip: zip,
        planId: planId,
        boxContent: boxContent,
        planPrice: planPrice,
        planName: planName,
        totalPlusTax: totalPlusTax,
        totalPlusTaxShip: totalPlusTaxShip,
        pickOrShipValue: pickOrShipValue,
        location: location,
        customerId: stripeUser,
        fullName: formFields.fullName,
        clientsCity: formFields.city,
        clientsAddress:formFields.address,
        clientsState: formFields.state,
        clientsPhone:formFields.phone,

      });
  };

  return (
     <ScrollView>
      <SafeAreaView style={{ flex: 1, alignItems:'center' }} >
          {/* ------Shipping Form ------------------- */}
          <Box safeArea= '2' 
            w="100%" 
            maxW="300" 
          >
            <Heading 
                size="lg" 
                fontWeight="600" 
                color="coolGray.800" 
            >
                Billing!
            </Heading>

            <VStack space={2} mt="1">
              {/* -------------Email Input------------------- */}
              <CustomInput 
                  onChange={handleErrors}
                  text='Email'
                  placeholder='Email'
                  size='xs'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  value={formFields.email}
                  onChangeText={(email) => setFormFeilds((prev) => ({...prev, email: email}))}
                  isInvalid={visible ? false : errors}
                  errorMsg={visible ? false : errors} 
              />

              {/* -------------Full Name Input------------------- */}
              <CustomInput 
                onChange={handleErrors}
                text='Full Name'
                placeholder='Full Name'
                size='xs'
                autoCapitalize='none'
                keyboardType='default'
                value={formFields.fullName}
                onChangeText={(fullName) => setFormFeilds((prev) => ({...prev, fullName: fullName}))}
                isInvalid={visible ? false : errors}
                errorMsg={visible ? false : errors} 
              />
              {/* -------------Phone Input------------------- */}
              <CustomInput 
                onChange={handleErrors}
                text='Phone'
                placeholder='Phone'
                size='xs'
                autoCapitalize='none'
                keyboardType='numeric'
                value={formFields.phone}
                onChangeText={(phone) => setFormFeilds((prev) => ({...prev, phone: phone}))}
                isInvalid={visible ? false : errors}
                errorMsg={visible ? false : errors} 
              />

              <HStack space={2} justifyContent='space-between' w='50%' >
                {/* -------------Street Address Input------------------- */}
                <CustomInput 
                  onChange={handleErrors}
                  text='Address'
                  placeholder='Address'
                  size='xs'
                  autoCapitalize='none'
                  keyboardType='default'
                  value={formFields.address}
                  onChangeText={(address) => setFormFeilds((prev) => ({...prev, address: address}))}
                  isInvalid={visible ? false : errors}
                  errorMsg={visible ? false : errors} 
                />

                {/* -------------City Input------------------- */}
                <CustomInput 
                    onChange={handleErrors}
                    text='City'
                    placeholder='City'
                    size='xs'
                    autoCapitalize='none'
                    keyboardType='default'
                    value={formFields.city}
                    onChangeText={(city) => setFormFeilds((prev) => ({...prev, city: city}))}
                    isInvalid={visible ? false : errors}
                    errorMsg={visible ? false : errors} 
                />
              </HStack>
                {/* -------------State Input------------------- */}
                <HStack space={2} justifyContent='space-between' w='50%'>
                  <CustomSelect
                    onChange={handleErrors}
                    text='State'
                    placeholder='State'
                    accessibilityLabel='State'
                    size='xs'
                    value={formFields.state}
                    onChangeText={(state) => setFormFeilds((prev) => ({...prev, state: state}))}
                    isInvalid={visible ? false : errors}
                    errorMsg={visible ? false : errors} 
                  />

                  {/* -------------Zip Input------------------- */}
                  <CustomInput 
                    onChange={handleErrors}
                    text='Zip'
                    placeholder='Zip'
                    size='xs'
                    autoCapitalize='none'
                    keyboardType='numeric'
                    value={formFields.zip}
                    onChangeText={(zip) => setFormFeilds((prev) => ({...prev, zip: zip}))}
                    isInvalid={visible ? false : errors}
                    errorMsg={visible ? false : errors} 
                  />
                </HStack>    
               </VStack>
          </Box> 

          <Box safeArea='2' 
            w='90%'
            p='4' my='8'
            bg='coolGray.300'
            borderRadius='6'
            shadow={4}
            justifyItems='center' 
          >
            <Box safeArea= '2'
              w='40%'
              p='2' mb='4' 
              bg='#004282'
              alignSelf='center'
              shadow={4}
            >  
              <Text color="#FFF" textAlign='center'>
                Total: ${ pickOrShipValue === 'ship' ?  parseFloat(totalPlusTaxShip).toFixed(2) : parseFloat(totalPlusTax).toFixed(2) }
              </Text>
            </Box> 
            <Radio.Group space={2} 
              alignItems='center' 
              justifyContent='center' 
              shadow={2}
              name="sameShipAddress"
              defaultValue='isSame' 
              accessibilityLabel="Same shipping address...or not?"
              onChange={next => { setValue(next); }}  
            >
              <Radio  value='isSame' colorScheme='emerald' >Billing Address is the same as shipping</Radio>
              <Radio value='notSame' colorScheme='emerald' >Billing Address is different</Radio>
            </Radio.Group>
          </Box>

            { value === 'notSame' 
              ?
                <Box safeArea= '2' 
                  w="100%" 
                  maxW="300" 
                >
                  <Heading 
                    size="lg" 
                    fontWeight="600" 
                    color="coolGray.800" 
                  >
                    Shipping!
                  </Heading>
                    <VStack space={2} mt="1">
                      {/* -------------Full Name Input------------------- */}
                      <CustomInput 
                        onChange={handleErrors}
                        text='Full Name'
                        placeholder='Full Name'
                        size='xs'
                        autoCapitalize='none'
                        keyboardType='default'
                        value={formFields.fullName}
                        onChangeText={(fullName) => setFormFeilds((prev) => ({...prev, fullName: fullName}))}
                        isInvalid={visible ? false : errors}
                        errorMsg={visible ? false : errors} 
                      />

                      <HStack space={2} justifyContent='space-between' w='50%' >
                        {/* -------------Street Address Input------------------- */}
                        <CustomInput 
                          onChange={handleErrors}
                          text='Address'
                          placeholder='Address'
                          size='xs'
                          autoCapitalize='none'
                          keyboardType='default'
                          value={formFields.address}
                          onChangeText={(address) => setFormFeilds((prev) => ({...prev, address: address}))}
                          isInvalid={visible ? false : errors}
                          errorMsg={visible ? false : errors} 
                        />

                        {/* -------------City Input------------------- */}
                        <CustomInput 
                          onChange={handleErrors}
                          text='City'
                          placeholder='City'
                          size='xs'
                          autoCapitalize='none'
                          keyboardType='default'
                          value={formFields.city}
                          onChangeText={(city) => setFormFeilds((prev) => ({...prev, city: city}))}
                          isInvalid={visible ? false : errors}
                          errorMsg={visible ? false : errors} 
                        />
                      </HStack>
                        {/* -------------State Input------------------- */}
                        <HStack space={2} justifyContent='space-between' w='50%'>
                          <CustomSelect
                            onChange={handleErrors}
                            text='State'
                            placeholder='State'
                            accessibilityLabel='State'
                            size='xs'
                            value={formFields.state}
                            onChangeText={(state) => setFormFeilds((prev) => ({...prev, state: state}))}
                            isInvalid={visible ? false : errors}
                            errorMsg={visible ? false : errors} 
                          /> 
                          {/* -------------Zip Input------------------- */}
                          <CustomInput 
                            onChange={handleErrors}
                            text='Zip'
                            placeholder='Zip'
                            size='xs'
                            autoCapitalize='none'
                            keyboardType='numeric'
                            value={formFields.zip}
                            onChangeText={(zip) => setFormFeilds((prev) => ({...prev, zip: zip}))}
                            isInvalid={visible ? false : errors}
                            errorMsg={visible ? false : errors} 
                          />
                        </HStack>
                    </VStack>
                </Box>
              : 
                null
            }


          {/* -----------Buttons---------- */}
    
          <FormButton 
              text='Register' 
              onPress={customerCreadtedOnQuickBuy} 
              bdColor='#d44444' 
          />


          <FormButton 
            text='Checkout' 
            onPress={toPayment} 
            bdColor='#080938'
          />  
        </SafeAreaView>
      </ScrollView>
  );
};

export default BillingScreen;

