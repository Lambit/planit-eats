import React from 'react';
import { SafeAreaView } from 'react-native';

import ControlledInput from '../components/controlled-input/ControlledInput';
import FormButton from '../components/form-button/FormButton';
import { logStyles } from './LoginScreen';

import { Text, Title } from 'react-native-paper';
import { useForm } from 'react-hook-form';



const RegisterScreen = ({ navigation }) => {
  const {control, handleSubmit} = useForm();

  const onRegisterAcc = () => {
      navigation.navigate('ConfirmEmail');
  };

  const onSignIn = () => {
      navigation.navigate('Login');
  };

  
  return (
      <SafeAreaView style={logStyles.parent}>

          <Title style={logStyles.title} >Register Account</Title>

          <ControlledInput 
            name='email'
            control={control}
            placeholder='Email' 
            rules={{
              required: 'Email is required',
              minLength: {
                value: 3,
                meassage: 'Password needs to be more than 3 charactors.',
              },
            }}
          />
          <ControlledInput 
            name='password'
            control={control}
            placeholder='Password' 
            secureTextEntry 
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                meassage: 'Email needs to be more than 8 charactors.',
              },
            }}
          />
          <ControlledInput 
            name='passwordConfirm'
            control={control}
            placeholder='Password' 
            secureTextEntry
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                meassage: 'Password needs to be more than 8 charactors.',
              },
            }} 
          />

          {/* Agree to terms polocy HERE */}

          <FormButton 
              text='Create Account' 
              onPress={handleSubmit(onRegisterAcc)} 
              bdColor='#d44444' 
          />

          <FormButton 
            text='Back to Sign In' 
            onPress={onSignIn} 
            bdColor='#080938'
            type='TERTIARY' 
          /> 
    </SafeAreaView>
  );
};



export default RegisterScreen;

