import React, { useContext, useState } from 'react';
import { Image, StyleSheet } from 'react-native';

// Components
import QuickAddIcon from '../quick-add-icon/QuickAddIcon';
import { CartContext } from '../../navigation/context/CartContext';

// Packages
import { Box, Badge, Heading,  HStack, Divider, } from 'native-base';

/* -----------MenuLayout----------
    Page layout for all menus listed
*/ 

const MenuLayout = (props, onPress, onClick )  => {
    const { food } = props;
    const { addToCart } = useContext(CartContext);
    const [modalActive, setModalActive]= useState(false);
    
  return (
    <TouchableOpacity style={styles.card} onPress={addToCart}>

        <Image 
              source={food.image} 
              alt={food.name} 
              style={{
                width: '100%',
                height: 250,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }} 
        />
        <Box p='4'>
          <Heading 
            size="xl"
            textAlign='center' 
            fontWeight="400" 
            color= '#080930'
          >
              {food.name}
          </Heading> 

          <Divider m='2' alignSelf='center' />

        {/* <Text>{vitamin}</Text> */}
        <HStack space={2} justifyContent='space-between' p='2'>
          <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '10' }} >Calories: {food.cal}</Badge>
          <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '10' }} >Carbs: {food.carb}</Badge>
          <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '10' }} >Protein: {food.protein}</Badge>
          <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '10' }} >Fat: {food.fat}</Badge>
          <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '10' }} >Sodium: {food.sod}</Badge> 
        </HStack>

        <Divider m='2' alignSelf='center' />

        <HStack justifyContent='space-between' p='2'>
        {/*-----------Small Globe Logo---------------------- */} 
        <Image source={require('../../assets/img/PlanItEatsLogo-globe-mobile.png')} 
          accessibilityLabel='Globe Logo.'
          style={{
              width: 50, 
              height: 50,
              shadowOpacity: 0.3,
              shadowRadius: 4,
              shadowColor: 'black',
              shadowOffset: {
                height: 0,
                width: 2,
              }
            }}
          />
          <QuickAddIcon onClick={addToCart} />
        
          </HStack>
            </Box>
    </TouchableOpacity>
    
  

  );
};

export default MenuLayout;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  }
});
