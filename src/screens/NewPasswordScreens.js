import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import ControlledInput from '../components/controlled-input/ControlledInput';
import FormButton from '../components/form-button/FormButton';
import ConfirmationAlert from '../components/confirmation-alert/ConfirmationAlert';

import { Title } from 'react-native-paper';
import { useForm } from 'react-hook-form';



const NewPassword = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const { control, handleSubmit} = useForm();

  const onSignIn = () => {
    console.warn('back');
  };

  const onConfirm = () => {
    if (!visible){
      navigation.navigate('Login'); ;
    } else {
      hideDialog(navigation.navigate('Login'));
    };
  };
  return (
    <SafeAreaView style={styles.parent}>
        
        <Title style={styles.title} >Reset Password</Title>

      <ControlledInput 
        placeholder='Code' 
        name='code' 
        control={control}
      />
      
      <ControlledInput 
        placeholder='Enter new password' 
        name='password' 
        control={control}
      />
 
      <FormButton 
        text='Confirm' 
        onPress={showDialog} 
        bdColor='#d44444' 
      />

      <FormButton 
        text='Back to Sign In' 
        onPress={onSignIn}  
        bdColor='#080938' 
        type='TERTIARY' />

      <ConfirmationAlert  
        visible={visible} 
        onPress={onConfirm} 
        text='Password is reset, please confirm in email before attempting to log in.'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

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

export default NewPassword;