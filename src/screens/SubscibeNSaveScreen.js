import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

// Components
import FormButton from '../components/form-button/FormButton';
import EmailInput from '../components/email-input/EmailInput';



import { Button, Box, Heading, VStack, FormControl, Input, Link, HStack, Text, Divider, Center } from 'native-base';


/*-----ConfimEmail/SubNSave/MeetGreet----- (lol one of the 3 I promise) 
  Turning this Screen In a form page for currentUser info firbase cloud storage
  with happen at this stage. Just update currentUser's name, number ect... This 
  will be final screen on StackNav once finished. Also there will be an option 
  to schedule a sit down with the owner Mike. Upon completion he will recieve 
  and email and a reserverd date in Google Calender. Not touching page until 
  I'm set on form/validation.
*/ 

const ConfirmEmailScreen = ({ navigation, setEmail }) => {



  const onConfirm = () => {
    //  modal  
  };
  // similar to out come once logic is set
  // const onConfirm = () => {
  //   if (!visible){
  //     navigation.navigate('Login'); ;
  //   } else {
  //     hideDialog(navigation.navigate('Login'));
  //   };
  // };

  const onResendCode = () => {
    console.warn('Ooops');
  };
  
  const onSignIn = () => {
  };

  return (
      // ------------Reset Password Code Screen--------------
      <View>
        {/* ----------------Title--------------------- */}  
        <Box 
            px='2' 
            py="4" 
            w="80%" 
            maxW="300" 
        >
            <Heading 
                m="2"
                size="lg" 
                fontWeight="600" 
                color="coolGray.800" 
                _dark={{color: "warmGray.50"}}
            >
                Free Consultation:
            </Heading>

            <VStack space={1} bg="amber.600" m="2" w="100%">

                <Text size="xs">
                  {" "}{" "}We analyze your diet and see how it needs to be adjusted. We educate 
                  you with how the body works and the chemistry & science behind it. We provide 
                  delicious and nutritious food and guide you along the way through the program. 
                  Within 3-4 days into the program you will start to feel a shift. Typical results 
                  from our clean eating program include weight loss, increased energy, lower 
                  cholesterol, lower blood pressure, less aches & pains, mental clarity.
                </Text>
              
                </VStack>
                
            <VStack mt="2"> 
        
          {/* -------------Email Input------------------- */}
          <EmailInput 
            placeholder='Email'
            autoCapitalize='none'
            onChangeText={userEmail => setEmail(userEmail)} 
          />
          {/* -------Confirm Button-------- */}
          <FormButton 
            text='Confirm' 
            bdColor='#d44444' 
          />

          {/* -------Resend Code Button-------- */}
          <FormButton 
            text='Resend Code' 
            onPress={onResendCode} 
            bdColor='#080938'  
          />

          {/* -------Back Button-------- */}
          <FormButton 
            text='Back to Sign In' 
            onPress={onSignIn} 
            bdColor='#080938' 
          />
                       {/* form error */}
                    {/* <Text alignSelf="flex-end" mt="1" color='error.700' fontSize='xs'> {errors}</Text> */}
        </VStack>
      </Box>
      </View>
     
    );
  };
  
  // const styles = StyleSheet.create({
  //   veiwCard: { 
  //     padding: 30,
  //     marginTop: 60,
  //     borderColor: '#383bd6',
  //     borderWidth: 2,
  //     height: '20%',
  //     alignItems: 'center'
    
  //   }
  // });

export default ConfirmEmailScreen;

