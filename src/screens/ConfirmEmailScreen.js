import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import ControlledInput from '../components/controlled-input/ControlledInput';
import FormButton from '../components/form-button/FormButton';
import { logStyles } from './LoginScreen';

import { Text, Title } from 'react-native-paper';
import { useForm } from 'react-hook-form';

const ConfirmEmailScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState(''); 

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const onConfirm = () => {
    //  modal
    navigation.navigate('Home');
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
    navigation.navigate('Login');
  };

    const { control, handleSubmit} = useForm();

  return (
   

      <SafeAreaView style={logStyles.logInView}>
          
        <Title style={logStyles.title} >Confirm Email</Title>

          <ControlledInput 
            placeholder='Code' 
            name={code} 
            control={control}
          />

          <FormButton 
            text='Confirm' 
            onPress={onConfirm(showDialog)} 
            bdColor='#d44444' 
          />

          <FormButton 
            text='Resend Code' 
            onPress={onResendCode} 
            bdColor='#080938' 
            type='TERTIARY' 
          />

          <FormButton 
            text='Back to Sign In' 
            onPress={onSignIn} 
            bdColor='#080938' 
            type='TERTIARY' 
          />

  
            <View style={styles.veiwCard} >
              <Text 
                style={{
                  alignItems: 'center', 
                  fontSize: 12,
                  color: 'white',
                  position: 'relative'
                  }
                } 
              > Don't have an account? 
                <Text 
                  onPress={() => {''}} 
                  style={{ 
                      color: '#d44444',
                    }
                  }
                > {' '} 
                Create on here!
                </Text>
              </Text>
            </View>
      </SafeAreaView>
     
    );
  };
  
  const styles = StyleSheet.create({
    veiwCard: { 
      padding: 30,
      marginTop: 60,
      borderColor: '#383bd6',
      borderWidth: 2,
      height: '20%',
      alignItems: 'center'
    
    }
  });

export default ConfirmEmailScreen;

