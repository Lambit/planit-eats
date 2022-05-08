import React from 'react'
import { FormControl, Input } from 'native-base';

/*-----EmailInput-----
  Email Input to be used throughout web app. Could be changed to any input, if the form control label
  is passed down in props. Which most likely wil happen.
*/ 

const EmailInput = ({onChangeText,  autoCapitalize, placeholder}) => {
  return (
    <>
       {/* -------------Email Input------------------- */}
       <FormControl  >
           {/* form error */}
           {/* <Text color='error.700' fontSize='xs'> {errors}</Text> */}
           <FormControl.Label  _text={{ 
               color: 'black', 
               fontWeight: 'bold'
               }}
           >
               Email
           </FormControl.Label>
           <Input
               _focus={{
                   bg: 'coolGray.300', 
                   borderColor:'#bbf7d0'
                }}
               py='4' 
               bg='coolGray.300' 
               variant="filled"
               autoCapitalize={autoCapitalize}
               placeholder={placeholder}
               // onChange={() => setErrors('')}
               onChangeText={onChangeText} 
           />
           </FormControl>

    </>
  );
};

export default EmailInput;