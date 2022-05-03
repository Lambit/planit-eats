import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, View, Image } from 'react-native';

// Components/Screens
import EmailInput from '../components/email-input/EmailInput';
import PasswordShowInput from '../components/password-show-input/PasswordShowInput';
import FormButton from '../components/form-button/FormButton';
import HomeScreen from './HomeScreen';

// Firebase
import { auth } from '../firebase-config';
import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence, } from "firebase/auth";
import { FirebaseError } from 'firebase/app';

// npm packages
import { Button, Box, Heading, VStack, FormControl, Input, Link, HStack, Text } from 'native-base';
import eatsTheme from '../assets/theme/theme';

/* -----LogInScreen-----
    Inital route for App if not logged in. onSignIn temporarily placed here.
    I am being picky on forms so they arent set in stone, validation is 
    sketchy at best right now. Nav functions will stay. Logo coming soon.
*/ 

const LoginScreen = ({ navigation, route }) => {
    const {colors} = eatsTheme()
    const [isSignedIn, setisSignedIn]= useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState('');

    const handleClick = () => setShow(!show);

    
    // Sign In for created user --- email/password
    const onSignIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('-------------------------', user);
            // setisSignedIn(true);
            // navigation.route('HomeTab');
            // console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
        };


    //Custom form validation --- temporary
    const formValidation = () => {
        let textInputs = [email, password];
    
        if(textInputs.includes('') || textInputs.includes(undefined)) 
        return setErrors('Form fields must be filled out.');

        if(password.length > 8) 
        return setErrors("Pasworrd is too short weak.");

        // if(FirebaseError)
        // return setErrors([errors]);

        // [FirebaseError: Firebase: Error (auth/invalid-email).]
    
         return onSignIn();
      }
    
    // Nav functions for Screens buttons
    const handleSubmit = () => {
        navigation.navigate('ForgotPass');
    };
    
    const onRegisterAcc = () => {
        navigation.navigate('Register');
    };
    
    // Checking currentUser state --- route to Home if true
    if(isSignedIn === true ) {
        return(
            <HomeScreen />
        );
    }
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
    <SafeAreaView style={logStyles.parent} >
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
            px='2' 
            py="4" 
            w="80%" 
            maxW="300" 
        >
            <Heading 
                size="lg" 
                fontWeight="600" 
                color="coolGray.800" 
                _dark={{color: "warmGray.50"}}
            >
                Sign In!
            </Heading>
            <VStack space={3} mt="2">

                {/* -------------Email Input------------------- */}
                <EmailInput 
                    placeholder='Email'
                    autoCapitalize='none'
                    onChangeText={userEmail => setEmail(userEmail)} 
                />
                {/* -------------Password Input------------------- */}
                <PasswordShowInput 
                    onChangeText={userPassword => setPassword(userPassword)}
                    type={show ? "text" : "password"}
                    InputRightElement={
                        <Button
                            _ios={{
                                bg:'#22c55e',
                                _text: {
                                    color: '#FFF'
                                },
                                _pressed:{ 
                                    bg: '#d97706',
                                        _text:{
                                            color:'#000000'
                                        }
                                    }
                                    
                                }
                            }
                             size="xs" 
                             rounded="none" 
                             w="1/5" 
                             h="full" 
                             onPress={handleClick}>
                                {show ? "Hide" : "Show"}
                        </Button>
                    }/>

                    {/* form error */}
                    <Text alignSelf="flex-end" mt="1" color='error.700' fontSize='xs'> {errors}</Text>

                    {/* ------Forgot Password Button------ */}
                    <Link _text={{
                        fontSize: "xs",
                        fontWeight: "500",
                        color: "indigo.500"
                        }} 
                        alignSelf="flex-end" mt="1"
                        onPress={handleSubmit}
                    >
                      Forget Password?
                    </Link>

                    {/* ------OnToRegistrnButton------ */}
                    <HStack alignSelf="flex-end" mt="1" >
                        <Text fontSize="sm"  
                        fontWeight='500' 
                        alignSelf="flex-end" 
                        mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                      }}>
                          New user.{" "}
                        </Text>
                        <Link _text={{
                            fontSize: "sm",
                            fontWeight: "500",
                            color: "indigo.500"
                            }} 
                            alignSelf="flex-end" mt="1"
                            onPress={onRegisterAcc}
                        >
                            Sign Up
                        </Link>
                    </HStack>
             </VStack>
      </Box> 
      {/* -------Form Button-------- */}
      <FormButton 
          text='Sign In' 
          onPress={formValidation} 
          bdColor='#22c55e'
      />
    </SafeAreaView>
    </ImageBackground> 
    );
};

export const logStyles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
    },
});

export default LoginScreen;