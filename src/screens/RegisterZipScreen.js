import React, { useEffect, useState } from 'react';
import { ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components/Screens
import CustomInput from '../components/custom-input/CustomInput';
import FormButton from '../components/form-button/FormButton';

// Packages
import { Button, Box, Heading, VStack, Text, HStack } from 'native-base';

// Firebase
import { firebase } from '@react-native-firebase/auth';
import {createCheckoutSession} from "@stripe/firestore-stripe-payments";
import { auth } from '../firebase-config';
import { db } from '../firebase-config';
import { addDoc, Timestamp, collection } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

/* -----RegisterZipScreen-----
    Quick buy Route---users can enter their email and zip, then pick a meal plan,
    pick meals, determin delivery or pickup. Finally, enter info and make the purchase.

    RegisterZipScreen Key - RegZip-ebtc-3lo6spCzV0tGbNon
*/ 

const RegisterZipScreen = ({ navigation, route }) => {
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

    async function getCustomClaimRole() {
        await firebase.auth().currentUser.getIdToken(true);
        const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
        console.log(decodedToken);
        console.log(decodedToken.token);
        console.log(decodedToken.user_id);
        const siteGuest = decodedToken.claims.stripeRole;
        const siteGuestToken = decodedToken.token;
        setToken(siteGuestToken);
        return siteGuest;
    };
    console.log(token);

    //---------Cloud Firsestore API----------
    // Create new doc Cloud Firebase
    // const createFakeTokenEmail = async () => {
    // Add a new document with a generated id.
    // const emailListRef = await addDoc(collection(db, "customer"), {
    //     email: formFields.email.toString(),
    //     zip: formFields.zip.toString(),
    //     createdAt: Timestamp.fromDate(new Date()),
    //   })
    //     const getGuestToken = await getCustomClaimRole()
    //   .then(() => {
    //     navigation.navigate('SelectMeal', { 
    //         email: formFields.email,
    //         zip: formFields.zip,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // };
    

    const nothingAttached = () => {
        navigation.navigate('SelectMeal', { 
            email: formFields.email,
            zip: formFields.zip,
        });
    }

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
        navigation.navigate('Login');
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
                    fontWeight="600" 
                    color="coolGray.800"
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
                        keyboardType='numeric'
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
                onPress={nothingAttached} 
                bdColor='#080938'
            /> 
        </SafeAreaView>
    </ImageBackground> 
    );
};

export default RegisterZipScreen;