import React from 'react';

// Packages
import { FormControl, Input } from 'native-base';

/*-----CustomInput-----
  Email Input to be used throughout web app. Could be changed to any input, if the form control label
  is passed down in props. Which most likely wil happen.
*/ 

const CustomInput = ({ text, onChangeText, onBlur, autoCapitalize, placeholder, isInvalid, value, onChange, onFocus, keyboardType, errorMsg}) => {
  return (
 
       <FormControl isInvalid={isInvalid}>
        <FormControl.Label  
           _text={{ 
             color: 'black', 
             fontWeight: 'bold',
             bg:'coolGray.300',  
             p:'1',
             opacity:'.8',
             borderColor:'#bbf7d0',
             borderWidth: 2,
           }}
           
        >
            {text}
        </FormControl.Label>

        <Input
          _focus={{
            bg: 'coolGray.300', 
            borderColor:'#bbf7d0',
            borderWidth: 2,
          }}
            _invalid={{
              borderColor: 'error.500',
                _stack: {
                  style: {
                    outlineWidth: '1px',
                    outlineColor:  'error[500]',
                    outlineStyle: 'solid',
                  }
                }
            }}
          borderRadius='5'
          py='4' 
          bg='coolGray.300' 
          variant="filled"
          autoCapitalize={autoCapitalize}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          onFocus={onFocus}
          onBlur={onBlur}
        />

         <FormControl.ErrorMessage  
            textAlign='right'
             _text= {{
              fontSize: 'xs',
              bg: 'coolGray.300',
              p: '1',
              opacity:'.8',
              borderColor:'error[500]',
              borderWidth: 2,
            }}
          >
             {errorMsg}
          </FormControl.ErrorMessage>
       </FormControl>
  );
};

export default CustomInput;