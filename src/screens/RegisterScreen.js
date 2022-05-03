import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Alert } from 'react-native';

// Components
import FormButton from '../components/form-button/FormButton';

// Firebase
import { auth, db } from '../firebase-config';
import { createUserWithEmailAndPassword, sendSignInLinkToEmail } from 'firebase/auth';
import { collection, doc, setDoc, addDoc, Timestamp } from 'firebase/firestore';

// Npm packages
import { Title, Surface, TextInput,  } from 'react-native-paper';


/*----RegisterScreen-----
  Similar to LoginScreen---Functions will be moved (except navigation),
  VerifyEmail function will be implimented. User state logic will need to 
  be adjusted do to SubNSave screen. 
*/ 

const RegisterScreen = ({ navigation }) => {
  const [isSignedIn, setisSignedIn]= useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [formError, setFormError]= useState('');
  const newUserRef = collection(db, 'user');
  
  // ------------Register user--------------------
  const registerUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const newUser = userCredential.user;
        const user = auth.currentUser;
        console.log('-------------------------', newUser)
        console.log('++++++++++++++++++++++++++', user)
        // setisSignedIn(true);
        // navigation.navigate('SubNSav', {user});
      })
      .catch((err) => {
        console.log(err);
      })
    };

  // ----------------Form validation---------------
  const formValidation = () => {
    let textInputs = [email, password, passwordConfirm];
    let passwordMatch = password === passwordConfirm;

    if(textInputs.includes('') || textInputs.includes(undefined)) 
    return setFormError('Form fields must be filled out.');

    if(!passwordMatch) return setFormError('Passwords do not match.');

    if(passwordMatch) return registerUser(); 
  }

  // --------Navigation--------
  const backToLogIn = () => {
      navigation.navigate('Login');
  };
  const testPurp = () => {
    navigation.navigate('SubNSav');
};
  return (
    // ----------------Register Screen--------------------------
      <SafeAreaView style={styles.parent}>

        {/* ------------Title------------------- */}
          <Surface style={styles.surface}>
            <Title style={styles.title} >Register Account</Title>
          </Surface>

          {/* ---------------Inputs-------------- */}
          <TextInput 
            mode='flat'
            selectionColor='darkgreen'
            activeUnderlineColor='darkseagreen'
            autoCapitalize='none'
            name='email'
            clearButtonMode='always'
            style={{width: '100%', height: 30, marginVertical: 4,}}
            placeholder='Email'
            value={email || formError} 
            onChangeText={userEmail => setEmail(userEmail)}
            />

          <TextInput 
            mode='flat'
            selectionColor='darkgreen'
            activeUnderlineColor='darkseagreen'
            autoCapitalize='none'
            name='password'
            placeholder='Password' 
            style={{width: '100%', height: 30, marginVertical: 4,}}
            secureTextEntry
            value={password || null} 
            onChangeText={userPassword => setPassword(userPassword)} 
            />

          <TextInput as
            mode='flat'
            selectionColor='darkgreen'
            activeUnderlineColor='darkseagreen'
            autoCapitalize='none'
            name='passwordConfirm'
            placeholder='Password' 
            style={{width: '100%', height: 30, marginVertical: 4,}}
            secureTextEntry
            value={passwordConfirm || null }
            onChangeText={text => setPasswordConfirm(text)}
          />

          {/* {formError
            ? <Text>{formError }</Text>
            : null  } */}



          {/* Agree to terms polocy HERE */}


          {/* -----------Buttons---------- */}
          <FormButton 
              text='Create Account' 
              onPress={formValidation} 
              bdColor='#d44444' 
          />

          <FormButton 
            text='Back to Sign In' 
            onPress={backToLogIn} 
            bdColor='#080938'
          /> 
          {/* ---------testCase-------- */}
          <FormButton 
            text='Test' 
            onPress={testPurp} 
            bdColor='#080938'
          /> 
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
    parent: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'seashell', 
    },
    title: {
      color: '#dda0dd',
      fontSize: 24,
      fontWeight: '400',
    },
    surface: {
      margin: 20,
      padding: 8,
      height: 80,
      width:'60%',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
      backgroundColor: 'seashell',
      shadowColor: '#dda0dd',
    },
});

export default RegisterScreen;
