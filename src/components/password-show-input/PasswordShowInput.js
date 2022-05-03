import React from 'react'
import { Button, Box, Heading, VStack, FormControl, Input, Link, HStack, Text } from 'native-base';


const PasswordShowInput = ({onChangeText, type, InputRightElement}) => {
  return (
    <>
        {/* -------------Password Input------------------- */}
        <FormControl>
           <FormControl.Label _text={{ color: 'black', fontWeight: 'bold'}}>
               Password
           </FormControl.Label>
           <Input 
               _focus={{
                  bg: 'coolGray.300', 
                  borderColor:'#bbf7d0'
                }}
               py='4'
               bg='coolGray.300' 
               variant="filled"
               placeholder="Password"
               autoCapitalize='none'
               // onChange={setErrors('')}
               onChangeText={onChangeText}
               type={type} 
               InputRightElement={InputRightElement}
            />
           {/* ------Form Password Helper------------- */}
           <FormControl.HelperText  _text={{ color: 'black'}}>
               Password must be greater than 8 characters. 
           </FormControl.HelperText>
        </FormControl>
    </>
  );
};

export default PasswordShowInput;