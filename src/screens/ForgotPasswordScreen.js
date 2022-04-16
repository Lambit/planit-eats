import React from 'react';
import { StyleSheet, SafeAreaView, onPress } from 'react-native';

import ControlledInput from '../components/controlled-input/ControlledInput';
import FormButton from '../components/form-button/FormButton';

import { Text, Title } from 'react-native-paper';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';


const ForgotPassword = ({ navigation }) => {

  const onConfirm = () => {
    navigation.navigate('NewPass');
  };

  const onSignIn = () => {
    navigation.navigate('Login');
  };

  const { control, handleSubmit, errors } = useForm({
  
  });
  console.log(errors);

return (
    <SafeAreaView style={styles.parent}>
        
        <Title style={styles.title} >Reset Password</Title>

      <ControlledInput 
        placeholder='Email' 
        name='email'
        control={control}
      />
 
      <FormButton 
        text='Confirm' 
        onPress={handleSubmit(onConfirm)} 
        bdColor='#080938' 
        type='TERTIARY' 
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

const styles = StyleSheet.create({
  // View
  parent: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
    
  },
  title: {
    color: '#821111',
    fontSize: 36,
    fontWeight: 'bold',
    display: 'flex',
    textAlign: 'center',
    borderColor: '#383bd6',
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
  },
});

export default ForgotPassword;