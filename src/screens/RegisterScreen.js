import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context'

// Components
import FormButton from '../components/form-button/FormButton';
import CustomInput from '../components/custom-input/CustomInput';
import PasswordShowInput from '../components/password-show-input/PasswordShowInput';

// Packages
import { Button, Box, Heading, VStack, ScrollView, useDisclose  } from 'native-base';

// Firebase
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, sendSignInLinkToEmail } from 'firebase/auth';
import { db } from '../firebase-config';
import { setDoc, doc, getDoc, deleteDoc } from 'firebase/firestore';


/*----RegisterScreen-----
  Similar to LoginScreen---Functions will be moved (except navigation),
  VerifyEmail function will be implimented. User state logic will need to 
  be adjusted do to SubNSave screen. 
*/ 

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState('');
  const [visible, setIsVisible] = useState(false);
  const { isOpen, onClose, onToggle } = useDisclose();

  console.log(route.params, 'RegisterScreen ====');
  console.log(route.key, 'RegisterScreen $$$$$$');

  //----Show button color on password input-----
  const handleClick = () => setShow(!show);

  //---Remove form isInvalid and errors state---
  const handleErrors = () => setIsVisible(true);

  

  // ------------Register user with form/auth validation--------------------
  const registerUser = async () => {
    let textInputs = [email, password, passwordConfirm];
    let passwordMatch = password === passwordConfirm;
    
    if(textInputs.includes('') || textInputs.includes(undefined)) 
    return setErrors('Form fields must be filled out.');

    if(!email.includes('@', '.com'))
    return setErrors('Not valid email.');

    if(password.length < 8) 
    return setErrors("Pasworrd is too short.");

    if(!passwordMatch) 
    return setFormError('Passwords do not match.');

    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const newUser = userCredential.user;
        console.log('RegisterScreen------------------', newUser)
      })
      .catch((err) => {
        alert(err.message)
      })
     
    };

  // --------Navigation Functions--------
  const backToLogIn = () => {
      navigation.navigate('Login');
  };
  const testPurp = () => {
    navigation.navigate('SubNSav');
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
      <SafeAreaView style={{ flex: 1, alignItems:'center' }} >
     
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
                  fontWeight="600" 
                  color="coolGray.800" 
              >
                  Register!
              </Heading>

              <VStack space={2} mt="1">
                {/* -------------Email Input------------------- */}
                <CustomInput 
                    onChange={handleErrors}
                    text='Email'
                    placeholder='Email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={userEmail => setEmail(userEmail)}
                    isInvalid={visible ? false : errors}
                    errorMsg={visible ? false : errors} 
                />
                {/* -------------Password Input------------------- */}
                <PasswordShowInput
                  onChange={handleErrors}
                  text= 'Password' 
                  onChangeText={userPassword => setPassword(userPassword)}
                  type={show ? "text" : "password"}
                  errorMsg={visible ? false : errors}
                  isInvalid={visible ? false : errors}
                  InputRightElement={
                    // button styles and state change
                    <Button
                      bg={show ? '#d97706' : '#22c55e'}
                      _text={{ 
                          color: show ? '#000' : '#FFF' 
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

                  {/* -------------Password Input------------------- */}
                  <PasswordShowInput
                    onChange={handleErrors}
                    text= 'Confirm Password' 
                    onChangeText={userPassword => setPassword(userPassword)}
                    type={show ? "text" : "password"}
                    errorMsg={visible ? false : errors}
                    isInvalid={visible ? false : errors}
                    InputRightElement={
                      // button styles and state change
                      <Button
                        bg={show ? '#d97706' : '#22c55e'}
                        _text={{ 
                            color: show ? '#000' : '#FFF' 
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
                      alignSelf="flex-end" 
                      // onPress={toForgotPass}
                      _text={{
                        fontSize: "xs",
                        fontWeight: "500",
                        color: "indigo.500"
                      }} 
                    >
                      Buy Meals now! 
                    </Button>
                 </VStack>
          </Box> 

          {/* Agree to terms polocy HERE */}

          {/* -----------Buttons---------- */}
          <VStack space={2} marginBottom="2">
          <FormButton 
              text='Create Account' 
              onPress={registerUser} 
              bdColor='#d44444' 
          />

          <FormButton 
            text='Back to Sign In' 
            onPress={backToLogIn} 
            bdColor='#080938'
          /> 
          {/* ---------testCase-------- */}
          {/* <FormButton 
            text='Test' 
            onPress={testPurp} 
            bdColor='#080938'
          />  */}
          </VStack>
          
        </SafeAreaView>
      </ScrollView>
    </ImageBackground> 
  );
};

export default RegisterScreen;
