import React from 'react'
import { FormControl, Input } from 'native-base';

/*-----PasswordShowInput-----
  Password input with a button that toggles hide/show text on selected field.
*/ 

const PasswordShowInput = ({onChangeText, type, InputRightElement, isInvalid, errorMsg, text}) => {
  return (
    <>
      {/* -------------Password Input------------------- */}
      <FormControl isInvalid={isInvalid}>
         <FormControl.Label
           _text={{ 
              color: 'black', 
              fontWeight: 'bold',
              bg:'coolGray.300',  
              opacity:'.8',
              p:'1',
              borderColor:'#bbf7d0',
              borderWidth: 2,
            }}
          >
             {text}
         </FormControl.Label>

         {/* ------Text Input------------- */}   
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
            py='4'
            bg='coolGray.300' 
            variant="filled"
            borderRadius='5'
            placeholder="Password"
            autoCapitalize='none'
            // onChange={setErrors('')}
            onChangeText={onChangeText}
            type={type} 
            InputRightElement={InputRightElement}
          />

          {/* ------Form Isinvalid Eroor Message------------- */}  
          <FormControl.ErrorMessage  
            textAlign='right'
            _text={{
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

         {/* ------Form Password Helper------------- */}
         {/* <FormControl.HelperText  
            _text={{ 
              color: 'black',
              bg:'coolGray.300',  
              opacity:'.7',
              p:'1'
            }}
          >
             Password must be greater than 8 characters. 
         </FormControl.HelperText> */}
      </FormControl>
    </>
  );
};

export default PasswordShowInput;



// const [visible, setVisibility] = React.useState({ name: "eye-off" });

// //Toggles the eye icon to show the password
// const ToggleVisibilty = () => {
//   if (visible.name === "eye") {
//     setVisibility({ name: "eye-off" });
//   } else {
//     setVisibility({ name: "eye" });
//   }
// };

// const secureTextEntry = () => {
//   if (visible.name === "eye") {
//     return false;
//   } else if (visible.name === "eye-off") {
//     return true;
//   }
// };


{/* <Pressable style={styles.forgotContainer}>
<Text style={styles.forgot}>Forgot Password?</Text>
</Pressable>
  forgot: {
    fontFamily: "QuicksandBold",
    color: "#fff",
    fontSize: 18,
  },

  forgotContainer: {
    top: -20,
    flexDirection: "row",
    alignSelf: "flex-end",
  }, */}