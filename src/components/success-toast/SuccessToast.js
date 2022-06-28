import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context'
import { eatsTheme } from '../../theme/theme';

// Packages
import { Button, Box, Heading, VStack, ScrollView, Center, Text, useToast } from 'native-base';

export default function SuccessToast() {
    const toast = useToast();
    const { letSpace, weights, breakpoints, lineHi, bR } = eatsTheme;
  return (
    <Box safeArea='4' 
        mt='8' 
        p='4' 
        w="90%" 
        alignSelf='center' 
        alignItems='center' 
        bg={eatsTheme.darkGreen} 
        borderRadius={bR.md} 
        shadow={6} 
    > 
        <Heading 
            mb='4'
            size="lg" 
            fontWeight={weights.bold} 
            color={eatsTheme.white}
        >
         🥗 {" "}Success!{" "}🥗
        </Heading>
            <Text color={eatsTheme.white} textAlign='center'>
                Thank you for your purchase. Please finalize your account to further customize your orders!
            </Text>
    </Box>
  );
}