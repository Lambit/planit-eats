import React, { useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { Alert, Linking, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { eatsTheme } from '../theme/theme';


//Packages
import { Heading, Box, Text, Pressable, HStack, Divider, VStack, Button, Center  } from 'native-base';
import { useStripe } from '@stripe/stripe-react-native';

const SuccessScreen = () => {
  const { colors, letSpace, weights, breakpoints, lineHi } = eatsTheme;

  // const colorPick = eatsTheme.green;
  // const fontTheme = eatsTheme.fontWeights;


  return (
    <SafeAreaView style={{ flex: 1, }} >
      <Heading fontSize="xl"  p='6' bg={eatsTheme.semiLightGreen}>
        Success!
      </Heading>

                  {/* ------LogIn Form ------------------- */}
              <Center flex={2}>
              <Box 
                px='10' 
                py="10" 
                w="80%" 
                maxW="300"
                bg={eatsTheme.primeGrey}
            >
              <Heading 
                  size="lg" 
                  fontWeight={weights.bold} 
                  color={eatsTheme.textGrey}
              >
                  Sign Up!
              </Heading>
                <Heading 
                    mt="1" 
                    color={eatsTheme.textGrey} 
                    fontWeight={weights.med} 
                    size="xs"
                >
                    {' '}{' '}Thank you for you buisness! Please check your email for your invoice. 
                </Heading>

                <VStack space={3} mt="2">

                       {/* ------Button to LoginScreen------ */}
                        <HStack>
                            <Text ml='6' fontSize="xs" alignSelf='center'>
                                Already have and account
                            </Text>
                            <Button 
                                size='xs'
                                variant='ghost'
                                alignSelf="center"
                                // onPress={backToLogin}
                                _text={{
                                    fontSize: "xs",
                                    fontWeight: "500",
                                    color: "indigo.500"
                                }}  
                            >
                              Log in here!
                            </Button>
                        </HStack>
                 </VStack>
          </Box> 
          </Center>
    </SafeAreaView>
  );
  };

export default SuccessScreen;





