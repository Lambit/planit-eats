import React from 'react';

// Packages
import { IconButton, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


const QuickAddIcon = ({ onPress }) => {
  return (
    <IconButton
        icon={
          <Icon as={Ionicons} name="add-circle" size={50} onPress={onPress}/>
        } borderRadius='full' p='1' shadow='4' 
        _icon={{
          color: '#166534',
        }} _hover={{
          bg: "coolGray.800:alpha.20"
        }} _pressed={{
          _icon:{
            name:'add-circle-outline',
            bg: "coolGray.800:alpha.20",
          },
          _ios: {
            _icon:{
              size: '2xl'
            }
          }
        }} _ios={{
          _icon:{
            size: '2xl',
            _pressed: {
              name:'add-circle'
            }
          }
        }}
  />
  );
};

export default QuickAddIcon;