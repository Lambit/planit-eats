import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

// Components
import FormButton from '../components/form-button/FormButton';

// Packages
import { Title } from 'react-native-paper';



const ForgotPassword = ({ navigation }) => {

  // Path to code generation screen
  const onConfirm = () => {
    navigation.navigate('NewPass');
  };

  // Back button
  const backToLogIn = () => {
    navigation.navigate('Login');
  };
return (
    // -----------Reset Password Screen--------------------
    <SafeAreaView style={styles.parent}>

         {/*------------Title----------- */}
        <Title style={styles.title} >Reset Password</Title>

      {/* ------Input Feilds-----------*/}
      {/* <CustomInput 
        placeholder='Email' 
        name='email'
        control={control}
      /> */}
 
      {/* -------Confirm Button-------- */}
      <FormButton 
        text='Confirm' 
        onPress={handleSubmit(onConfirm)} 
        bdColor='#080938' 
      />

      {/* -------Back Button-------- */}
      <FormButton 
        text='Back to Sign In' 
        onPress={backToLogIn} 
        bdColor='#080938' 
        type='no_BUTTON' 
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