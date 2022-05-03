import React from 'react'
import { Button, Box, Heading, VStack, FormControl, Input, Link, HStack, Text } from 'native-base';

const EmailInput = ({onChangeText,  autoCapitalize, placeholder}) => {
  return (
    <>
       {/* <Heading 
           size="lg" 
           fontWeight="600" 
           color="coolGray.800" 
           _dark={{color: "warmGray.50"}}
       >
           Sign In!
       </Heading>
       <VStack space={3} mt="2"> */}

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
                
               {/* -------------Password Input------------------- */}
               {/* <FormControl>
                   <FormControl.Label _text={{ color: 'black', fontWeight: 'bold'}}>
                       Password
                   </FormControl.Label>
                   <Input _focus={{bg: 'coolGray.300'}}
                       py='4'
                       bg='coolGray.300' 
                       variant="filled"
                       placeholder="Password"
                       autoCapitalize='none'
                       // onChange={setErrors('')}
                       onChangeText={onChangeText}
                       type={show ? "text" : "password"} 
                       InputRightElement={
                           <Button
                               bg='#22c55e'
                               _pressed={{bg: '#d97706',
                                   _text:{color:'#000000'}}}
                                size="xs" 
                                rounded="none" 
                                w="1/5" 
                                h="full" 
                                onPress={handleClick}>
                                   {show ? "Hide" : "Show"}
                           </Button>}
                   />  */}
                   {/* ------Form Password Helper------------- */}
                   {/* <FormControl.HelperText  _text={{ color: 'black'}}>
                       Password must be greater than 8 characters. 
                   </FormControl.HelperText>
                   </FormControl> */}
                    
                    
                   {/* ------Forgot Password Button------ */}
                   {/* <Link _text={{
                       fontSize: "xs",
                       fontWeight: "500",
                       color: "indigo.500"
                       }} 
                       alignSelf="flex-end" mt="1"
                       onPress={onPress}
                   >
                     Forget Password?
                   </Link> */}
               
                    
               {/* ------OnToRegistrnButton------ */}
               {/* <HStack alignSelf="flex-end" mt="1" >
                   <Text fontSize="sm"  
                   fontWeight='500' 
                   alignSelf="flex-end" 
                   mt="1" color="coolGray.600" _dark={{
                   color: "warmGray.200"
                 }}>
                     New user.{" "}
                   </Text>
                   <Link _text={{
                       fontSize: "sm",
                       fontWeight: "500",
                       color: "indigo.500"
                       }} 
                       alignSelf="flex-end" mt="1"
                       onPress={onPress}
                   >
                       Sign Up
                   </Link>
               </HStack>
                    
        </VStack> */}
    </>
  );
};

export default EmailInput;