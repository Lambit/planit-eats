import React from 'react';
import { ImageBackground } from 'react-native';

// Packages
import { Heading, VStack } from 'native-base';

const HomeImageHeader = () => {
  return (
    <ImageBackground source={require('../../assets/img/shredded-chick.png')} 
        accessibilityLabel='Tomato and herb background image.'
        resizeMode='cover'
        style={{
            maxWidth: 400, 
            height: 250,
            overflow: 'hidden',
            justifyContent: 'center',
            opacity: .8,
            overflow: 'hidden',

          }
        }
    >
    {/* ----------Text In Image--------------- */}
    <VStack space={20} alignItems='center' zIndex='2'>
      <Heading bg='#fef08a' size='2xl' color='#000'opacity=".6" >Challenge Yourself</Heading>
    </VStack>
  </ImageBackground>
  );
};

export default HomeImageHeader;