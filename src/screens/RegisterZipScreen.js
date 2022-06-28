import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { eatsTheme }from '../theme/theme';

// Components/Screens
import CustomInput from '../components/custom-input/CustomInput';
import FormButton from '../components/form-button/FormButton';
import PhoneConfirm from '../components/phone-confirm/PhoneConfirm';

// Packages
import { Button, Box, Heading, VStack, Text, HStack } from 'native-base';
import axios from 'axios';

// Firebase
import firebase from "@react-native-firebase/app"
import firestore from "@react-native-firebase/firestore"
import auth from "@react-native-firebase/auth"
// import { auth } from '../firebase-config';
import { db } from '../firebase-config';
// import { addDoc, Timestamp, collection } from 'firebase/firestore';


/* -----RegisterZipScreen-----
    Quick buy Route---users can enter their email and zip, then pick a meal plan,
    pick meals, determin delivery or pickup. Finally, enter info and make the purchase.

    RegisterZipScreen Key - RegZip-ebtc-3lo6spCzV0tGbNon
*/ 

const RegisterZipScreen = ({ navigation, route }) => {
    const { letSpace, weights, breakpoints, lineHi } = eatsTheme;
    const [formFields, setFormFeilds] = useState({
        email: '',
        zip: '',
    });
    const [token, setToken] = useState('');
    const [errors, setErrors] = useState('');


    useEffect(() => {
        if(route.params) {
            setFormFeilds((prev) => ({
                ...prev,
                zip: route.params.zip
            }));
        }
    },[route.params]);
    
         // creates a new stripe customer in firestore and within stripe using stripe overwrites the customer everytime
        // take away .doc(newUser.uid) and change set to add just creates a new firestore user not stripe doesnt overwrite
    const createEmailList = () => {
        auth()
        .signInAnonymously()
        .then((userCredential) => {
            const user = userCredential.user.uid;
            console.log('User signed in anonymously', user);
            firestore()
                .collection('email-list')
                .doc(user.id)
                .set({
                    email: formFields.email.toString(),
                    zip: formFields.zip.toString(),
                    createdAt: firestore.FieldValue.serverTimestamp(),
                    
                }, {merge: true})

        })
        .then(() => { 
            navigation.navigate('SelectMeal', { 
                email: formFields.email,
                zip: formFields.zip,
            });
          })
        .catch(error => {
          if (error.code === 'auth/operation-not-allowed') {
            console.log('Enable anonymous in your firebase console.');
          }
      
          console.error(error);
        });
    };


    //Custom form validation --- temporary
    const formValidation = () => {
        let textInputs = [email, password];
    
        if(textInputs.includes('') || textInputs.includes(undefined)) 
        return setErrors('Form fields must be filled out.');

        if(password.length > 8) 
        return setErrors("Password is too short weak.");

        // [FirebaseError: Firebase: Error (auth/invalid-email).]
         return onSignIn();
    }
    
    // Nav functions for Screens buttons
    const backToLogin = () => {
        navigation.navigate('SelectMeal', { 
            email: formFields.email,
            zip: formFields.zip,
        });
    };

    return (
    // ----------------Background Image---------------------------  
    <ImageBackground source={require('../assets/img/veg-dip.jpeg')} 
        accessibilityLabel='Veggies around dip bowl.'
        resizeMode='cover'
        style={{
            width: 400, 
            height: '100%',
            overflow: 'hidden',
            justifyContent: 'center',
            }
        }
    >  
        <SafeAreaView style={{ flex: 1, alignItems:'center' }} >
            {/*------------Logo----------- */}
            <Image source={require('../assets/img/PlanItEatsLogo-text-mobile.png')} 
                accessibilityLabel='Text Logo.'
                    style={{
                        width: '90%', 
                        height: 80,
                        marginTop: 10,
                        }
                    }
            />
            <Image source={require('../assets/img/PlanItEatsLogo-globe-mobile.png')} 
                accessibilityLabel='Globe Logo.'
                    style={{
                        width: 100, 
                        height: 100, 
                        }
                    }
            />        
            {/* ------LogIn Form ------------------- */}
            <Box 
                px='2' 
                py="4" 
                w="80%" 
                maxW="300" 
            >
                <Heading 
                    size="lg" 
                    fontWeight={weights.med} 
                    color={eatsTheme.textGrey} 
                >
                    Sign Up!
                </Heading>
                <Heading 
                    mt="1" 
                    color="coolGray.600" 
                    fontWeight="medium" 
                    size="xs"
                >
                    {' '}{' '}More than just a meal plan, we provide a sustainable diet and 
                    nutritional support. 
            </Heading>

                <VStack space={3} mt="2">
                    {/* -------------Email Input------------------- */}
                    <CustomInput 
                        text='Email'
                        placeholder='Email'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        value={formFields.email}
                        // onChange={onEmailChanged}
                        onChangeText={(email) => setFormFeilds((prev) => ({...prev, email: email}))} 
                    />
                    {/* -------------ZipCode Input------------------- */}
                    <CustomInput
                        text='Zip'
                        placeholder='Zip Code'
                        keyboardType='default'
                        value={formFields.zip}
                        // onChange={onZipChanged}
                        onChangeText={(zip) => setFormFeilds((prev) => ({...prev, zip: zip}))} 
                    />

                        {/* form error */}
                        <Text alignSelf="flex-end" mt="1" color='error.700' fontSize='xs'> {errors}</Text>

                        {/* ------Button to LoginScreen------ */}
                        <HStack>
                            <Text ml='6' fontSize="xs" alignSelf='center'>
                                Already have and account
                            </Text>
                            <Button 
                                size='xs'
                                variant='ghost'
                                alignSelf="center"
                                onPress={backToLogin}
                                _text={{
                                    fontSize: "xs",
                                    fontWeight: "500",
                                    color: "indigo.500"
                                }}  
                            >
                              Log in here!
                            </Button>
                        </HStack>
                 </VStack>
          </Box> 
            {/* ----Form Button--OnToRegisterButton---- */}
            <FormButton 
                text='Sign Up' 
                onPress={createEmailList} 
                bdColor='#080938'
            /> 

            <PhoneConfirm />
        </SafeAreaView>
    </ImageBackground> 
    );
};

export default RegisterZipScreen;