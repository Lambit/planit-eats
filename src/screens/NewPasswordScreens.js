import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

// Components
import FormButton from '../components/form-button/FormButton';
import ConfirmationAlert from '../components/confirmation-alert/ConfirmationAlert';

// Packages
import { Title } from 'react-native-paper';


const NewPassword = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  
  const onSignIn = () => {
    console.warn('back');
  };

  // show alert on confirmation
  const onConfirm = () => {
    if (!visible){
      navigation.navigate('Login'); ;
    } else {
      hideDialog(navigation.navigate('Login'));
    };
  };
  return (
    // ------------Send Code Screen-------------------
    <SafeAreaView style={styles.parent}>
        
        {/* ---------------Title--------------- */}
        <Title style={styles.title} >Reset Password</Title>

      {/* -------Send Code Input-------- */}
      {/* <CustomInput 
        placeholder='Code' 
        name='code' 
        control={control}
      /> */}
      
      {/* -------Password Input-------- */}
      <CustomInput 
        placeholder='Enter new password' 
        name='password' 
        control={control}
      />

      {/* -------Confirm Button-------- */}
      <FormButton 
        text='Confirm' 
        onPress={showDialog} 
        bdColor='#d44444' 
      />

      {/* -------Back Button-------- */}
      <FormButton 
        text='Back to Sign In' 
        onPress={onSignIn}  
        bdColor='#080938' 
      />

      {/* -------Confirmation Alert-------- */}
      <ConfirmationAlert  
        visible={visible} 
        onPress={onConfirm} 
        text=
        'Password is reset, please confirm in email before attempting to log in.'
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