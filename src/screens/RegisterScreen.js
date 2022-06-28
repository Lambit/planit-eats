import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { SafeAreaView, initialWindowMetrics} from 'react-native-safe-area-context'
import { eatsTheme } from '../theme/theme';

// Components
import SuccessToast from '../components/success-toast/SuccessToast';
import FormButton from '../components/form-button/FormButton';
import CustomInput from '../components/custom-input/CustomInput';
import PasswordShowInput from '../components/password-show-input/PasswordShowInput';

// Packages
import { Button, Box, Heading, VStack, ScrollView, Center, Text, useToast } from 'native-base';

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

const RegisterScreen = ({ navigation, route }) => {
  const toast = useToast();
  const { letSpace, weights, breakpoints, lineHi, bR } = eatsTheme;
  const { email, planId, planName, planPrice, boxContent, customerId, fullName, clientsPhone } = route.params;
  const [userEmail, setUserEmail] = useState({userEmail: email});
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState('');
  const [visible, setIsVisible] = useState(false);
  console.log(route.params);

  //----Generates a toast pop-up for successful order
  useEffect(() => {
    toast.show({ 
      placement: 'top',
      render: () => {
        return (
          <SuccessToast /> 
        ) 
      }
    })
  
  }, [8000])

  //----Show button color on password input-----
  const handleClick = () => setShow(!show);

  //---Remove form isInvalid and errors state---
  const handleErrors = () => setIsVisible(true);
  
  const creatUser = async () =>     
  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const newUser = userCredential.user;
      const user = auth.currentUser;
      // const userData = {
      //   "stripeId": customerId,
      //   "displayName": fullName,
      //   "phoneNumber": clientsPhone,
      //   "mealPlan": planName,
      //   "mealPlanId": planId,
      //   "mealPlanPrice": planPrice,
      //   "planContent": boxContent,
      // }
      // const currentDoc = doc(db, 'customers', newUser.id)
      // setDoc(currentDoc, userData, {merge: merge})
      console.log('RegisterScreen------------------', newUser, "----------", user)
    })
    .catch((err) => {
      alert(err.message)
    })

  

  // ------------Register user with form/auth validation--------------------
  const registerUser = () => {
    let textInputs = [email, password, passwordConfirm];
    let passwordMatch = password == passwordConfirm;
    
    if(textInputs.includes('') || textInputs.includes(undefined)) 
    return setErrors('Form fields must be filled out.');

    if(!email.includes('@', '.com'))
    return setErrors('Not valid email.');

    if(password.length < 8) 
    return setErrors("Pasworrd is too short.");

    if(!passwordMatch) 
    return setFormError('Passwords do not match.');

    if(passwordMatch)
    return creatUser();


     
    };

  // --------Navigation Functions--------
  const backToLogIn = () => {
      navigation.navigate('Login');
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
      <SafeAreaView style={{ flex: 1, alignItems:'center', }}  >
     
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
                    value={email}
                    onChangeText={userEmail => setUserEmail(userEmail)}
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
                    bg={show ? eatsTheme.warnOrange : eatsTheme.darkGreen }
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

                  {/* -------------Password Input------------------- */}
                  <PasswordShowInput
                    onChange={handleErrors}
                    text= 'Confirm Password' 
                    onChangeText={userPassword => setPasswordConfirm(userPassword)}
                    type={show ? "text" : "password"}
                    errorMsg={visible ? false : errors}
                    isInvalid={visible ? false : errors}
                    InputRightElement={
                      // button styles and state change
                      <Button
                      bg={show ? eatsTheme.warnOrange : eatsTheme.darkGreen }
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
                      alignSelf="flex-end" 
                      // onPress={toForgotPass}
                      _text={{
                        fontSize: "xs",
                        fontWeight: weights.med,
                        color: eatsTheme.trueBlue
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
              onPress={() => registerUser()} 
              bdColor={eatsTheme.darkBlue}
          />
          </VStack>
          
        </SafeAreaView>
      </ScrollView>
    </ImageBackground> 
  );
};

export default RegisterScreen;
