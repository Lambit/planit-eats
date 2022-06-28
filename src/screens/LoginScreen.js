import React, { useState, useCallback } from 'react';
import { StyleSheet, ImageBackground, Image, Alert, Linking, } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context'
import { eatsTheme } from '../theme/theme';

// Components/Screens
import CustomInput from '../components/custom-input/CustomInput';
import PasswordShowInput from '../components/password-show-input/PasswordShowInput';
import FormButton from '../components/form-button/FormButton';
import { AuthContext } from '../navigation/context/AuthContext';
import Chicken from '../assets/img/chicken.svg';
import { SvgXml } from 'react-native-svg';


// Packages
import { Button, Box, Heading, VStack, Text, List, ScrollView } from 'native-base';
import { SvgUri } from 'react-native-svg';

// Firebase
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, } from "firebase/auth";
import { FirebaseError } from 'firebase/app';
import { db } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { setDoc, doc, getDoc, getDocs, deleteDoc, Timestamp, collection, query, where } from 'firebase/firestore';



/* -----LogInScreen-----
    Inital route for App if not logged in. onSignIn temporarily placed here.
    I am being picky on forms so they arent set in stone, validation is 
    sketchy at best right now. Nav functions will stay. Logo coming soon.
    
    LoginInScreen-Key: Login--UjcuOzWOvEy8GPvSoePc
*/ 

const LoginScreen = ({ navigation, route }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState('');
    const [visible, setIsVisible] = useState(false);
    const { letSpace, weights, breakpoints, lineHi } = eatsTheme;

    const supportedURL = "https://planiteats.page.link/?link=https://planiteats.app/success&isi=123456789&ibi=CFBundleInfoDictionaryVersion&ius=org.reactjs.native.example.PlanitEats&cid=1889291867829610521&_osl=https://planiteats.page.link/N9CY&_icp=1";

    const unsupportedURL = "slack://open?team=123456";

    const OpenURLButton = ({ url, children }) => {
        const handlePress = useCallback(async () => {
          // Checking if the link is supported for links with custom URL scheme.
          const supported = await Linking.canOpenURL(url);
      
          if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
          } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
          }
        }, [url]);
      
        return <Button title={children} onPress={handlePress} />;
      };

    


    // const { singInUser } = useContext(AuthContext);
                           
    //----Show button color on password input-----
    const handleClick = () => setShow(!show);

    //---Remove form isInvalid and errors state---
    const handleErrors = () => setIsVisible(true);
    
    //----Sign In for created user with form/auth validation --- email/password-------
    const onSignIn = async () => {
        let textInputs = [email, password];
    
        if(textInputs.includes('') || textInputs.includes(undefined)) 
        return setErrors('Form fields must be filled out.');

        if(!email.includes('@', '.com'))
        return setErrors('Not valid email.');

        if(password.length < 8) 
        return setErrors("Pasworrd is too short.");

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('LogIn Screen-------------------', user);
        })
          .catch((err) => {
            alert(err.message);
        })
    };
  
    //----Nav functions for Screens buttons-------
    const toForgotPass = () => {
        navigation.navigate('ForgotPass');
    };
    
    const onRegisterZip = () => {
        navigation.navigate('RegZip');
    };
    const onReg = () => {
        navigation.navigate('Register');
    };
    const onBill = () => {
        navigation.navigate('SelectMeal');
    };


    return (
    // ----------------Background Image---------------------------  
    <ImageBackground source={require('../assets/img/avo-tom.png')} 
        accessibilityLabel='Tomato and herb background image.'
        resizeMode='cover'
        style={{
            width: 400, 
            height: '100%',
            overflow: 'hidden',
            justifyContent: 'center',
            }
        }
    >  
    <ScrollView>
        <SafeAreaView style={{ flex: 1, alignItems:'center' }} w>
            {/*------------Logo----------- */}
            <Image source={require('../assets/img/PlanItEatsLogo-text-mobile.png')} 
                accessibilityLabel='Text Logo.'
                    style={{
                        width: '90%', 
                        height: 80,
                        marginTop: 40,
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
                p='2' 
                py="4" 
                w="80%" 
                maxW="300" 
            >
                <Heading 
                    size="lg" 
                    fontWeight={weights.med} 
                    color={eatsTheme.textGrey} 
                >
                    Sign In!
                </Heading>

                <VStack space={2} mt="2">
                    
                    {/* -------------Email Input------------------- */}
                    <CustomInput 
                        text='Email'
                        placeholder='Email'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        onChange={handleErrors}
                        onChangeText={userEmail => setEmail(userEmail)}
                        isInvalid={visible ? false : errors}
                        errorMsg={visible ? false : errors} 
                    /> 
                    {/* -------------Password Input------------------- */}
                    <PasswordShowInput
                        text='Password'
                        onChange={handleErrors} 
                        onChangeText={userPassword => setPassword(userPassword)}
                        type={show ? "text" : "password"}
                        errorMsg={visible ? false : errors}
                        isInvalid={visible ? false : errors}
                        InputRightElement={
                            // button styles and state change
                            <Button
                                bg={show ? eatsTheme.warnOrange : eatsTheme.darkBlue }
                                _text={{ 
                                    color: show ? eatsTheme.black : eatsTheme.white 
                                }}
                                size="xs" 
                                rounded="none" 
                                w="1/5"
                                h="full" 
                                onPress={handleClick}
                            >
                                {show ? "Hide" : "Show"}
                            </Button>
                            }
                        />

                        {/* ------Forgot Password Button------ */}
                        <Button 
                            size='xs'
                            variant='ghost'
                            onPress={toForgotPass}
                            _text={{
                                fontSize: "xs",
                                fontWeight: weights.med,
                                color: eatsTheme.trueBlue
                            }} 
                            alignSelf="flex-end" 
                        >
                          Forgot Password? 
                        </Button>
                 </VStack>
          </Box> 
                        
            {/* -------Form Button--SignIn-------- */}
            <FormButton 
                text='Sign In' 
                onPress={onSignIn} 
                bdColor={eatsTheme.trueBlue}
            />

            {/* ----Form Button--onRegisterZipButton---- */}
            <FormButton 
                text='Sign Up' 
                onPress={onRegisterZip} 
                bdColor={eatsTheme.darkBlue}
            /> 

{/* <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton> */}


           
    
        </SafeAreaView>
        </ScrollView>
    </ImageBackground> 
    );
};

export default LoginScreen;