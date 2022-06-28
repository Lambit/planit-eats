import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

import firebase from "@react-native-firebase/app"

import auth from "@react-native-firebase/auth"

export default function PhoneConfirm() {
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');
  
    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    }
  
    async function confirmCode() {
      try {
        await confirm.confirm(code);
      } catch (error) {
        console.log('Invalid code.');
      }
    }
  
    if (!confirm) {
      return (
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
        />
      );
    }
  
    return (
      <>
        <TextInput value={code} onChangeText={text => setCode(text)} />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </>
    );
  }