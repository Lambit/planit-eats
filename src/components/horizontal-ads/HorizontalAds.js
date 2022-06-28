import React, { useState, useEffect, useContext } from 'react';
import { Image, ImageBackground, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { eatsTheme } from '../../theme/theme';

// Packages
import { HStack, Box, Flex,  ScrollView, Pressable, } from 'native-base';

const HorizontalAds = () => {
    const { letSpace, weights, breakpoints, lineHi, bR } = eatsTheme;
  return (
    <HStack py='2' >
    <ScrollView horizontal={true} p='2' bg={eatsTheme.white}>
        <Pressable  borderRadius={bR.md} pr='4'  shadow={6}>
          <ImageBackground source={require('../../assets/img/cut-veg.jpeg')} 
            accessibilityLabel='Eat better.'
            style={{
                width: 250, 
                height: 150,
                resizeMode: 'cover',
                borderRadius: bR.md,
                }
              }
          >
          <Flex align="center" justify="center" py='10' zIndex={1}>
            <Box bg={eatsTheme.primeGrey} p='2' opacity='.7' _text={{color: eatsTheme.black, fontWeight: weights.bold}}>Join Today</Box>
            <Box bg={eatsTheme.primeGrey} p='2' opacity='.7' _text={{color: eatsTheme.black, fontWeight: weights.bold}} >The 21 Day Challenge</Box>
          </Flex>
          </ImageBackground>
        </Pressable>

        <Pressable  borderRadius={bR.md} pr='4'  shadow={6}>
          <ImageBackground source={require('../../assets/img/cut-veg.jpeg')} 
            accessibilityLabel='Eat better.'
            style={{
                width: 250, 
                height: 150,
                resizeMode: 'cover',
                borderRadius: bR.md,
                }
              }
          >
          <Flex align="center" justify="center" py='10' zIndex={1}>
            <Box bg={eatsTheme.primeGrey} p='2' opacity='.7' _text={{color: eatsTheme.black, fontWeight: weights.bold}}>Join Today</Box>
            <Box bg={eatsTheme.primeGrey} p='2' opacity='.7' _text={{color: eatsTheme.black, fontWeight: weights.bold}} >The 21 Day Challenge</Box>
          </Flex>
          </ImageBackground>
        </Pressable>

        <Pressable  borderRadius={bR.md} pr='4'  shadow={6}>
          <ImageBackground source={require('../../assets/img/cut-veg.jpeg')} 
            accessibilityLabel='Eat better.'
            style={{
                width: 250, 
                height: 150,
                resizeMode: 'cover',
                borderRadius: bR.md,
                }
              }
          >
          <Flex align="center" justify="center" py='10' zIndex={1}>
            <Box bg={eatsTheme.primeGrey} p='2' opacity='.7' _text={{color: eatsTheme.black, fontWeight: weights.bold}}>Join Today</Box>
            <Box bg={eatsTheme.primeGrey} p='2' opacity='.7' _text={{color: eatsTheme.black, fontWeight: weights.bold}} >The 21 Day Challenge</Box>
          </Flex>
          </ImageBackground>
        </Pressable>

        <Pressable  borderRadius={bR.md} pr='4'  shadow={6}>
          <ImageBackground source={require('../../assets/img/cut-veg.jpeg')} 
            accessibilityLabel='Eat better.'
            style={{
                width: 250, 
                height: 150,
                resizeMode: 'cover',
                borderRadius: bR.md,
                }
              }
          >
          <Flex align="center" justify="center" py='10' zIndex={1}>
            <Box bg={eatsTheme.primeGrey} p='2' opacity='.7' _text={{color: eatsTheme.black, fontWeight: weights.bold}}>Join Today</Box>
            <Box bg={eatsTheme.primeGrey} p='2' opacity='.7' _text={{color: eatsTheme.black, fontWeight: weights.bold}} >The 21 Day Challenge</Box>
          </Flex>
          </ImageBackground>
        </Pressable>
    </ScrollView>
    </HStack>
  );
}

export default HorizontalAds;