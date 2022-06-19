import React, { useEffect, useState, useContext } from 'react';

//Components/Hooks
import { locations } from '../../utils/constants/constants';

//Packages
import { Heading, Box, Text, FlatList, HStack, Divider, Button, VStack, Radio, Pressable, route} from 'native-base';

const CheckoutHeader = ({ onPress, taxPriceText, totalPriceText, totalPriceTextBottom  }) => {
    const [value, setValue] = useState('');
    const [pickLocation, setPickLocation] = useState('');
    const { email, zip, planId, mealName, planPrice, planName, } = route.params;
    const priceVal = parseFloat(planPrice);
    const taxPrice = 0.0625 * planPrice;
    const shippingPrice = planPrice ? 0 : 10;
    // const totalPlusTax = planPrice + taxPrice;
    const totalPlusTax = priceVal + taxPrice;

    console.log(value);
    console.log(pickLocation);


  return (
    <Box 
      safeArea='2'
      w='100%'
      bg='coolGray.300'
      justifyItems='center'
    >
      <Heading textAlign='center' fontSize="sm" py='1'>
        Recieving Options
      </Heading> 
      <Divider bg='coolGray.400' w='100%' my='0.5'/>
      <HStack safeArea='2' justifyContent='space-between' >
        <Radio.Group space={2} 
          w='40' 
          alignItems='center' 
          justifyContent='center' 
          shadow={2}
          name="pickUpOrShip" 
          accessibilityLabel="Pick up, or ship?"
          onChange={next => { setValue(next); }}  
        >
          <Radio value='pickUp' >Pick Up</Radio>
          <Radio value='ship' >Shipping</Radio>
        </Radio.Group>

       <VStack safeArea='2'
        flexDir='column' 
        alignItems='center' 
        justifyContent='center' 
        bg='#004282' 
        w='40'
        borderRadius='4'
        shadow={4}
      >
        <Box alignItems='center'>
          <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
            Shipping
          </Text>

          <Text id={value} fontWeight='extrabold' fontSize='2xs' color='#FFF' >
            ${ value === 'ship' ?  9.99 : 0.00 }
          </Text>

          <Divider bg='#FFF' w='16' my='0.5'/>

          <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
            Tax
          </Text>
          <Text fontWeight='extrabold' fontSize='2xs' color='#FFF' >
            {/* ${taxPrice.toFixed(2)}  */}
            {taxPriceText}
          </Text>

          <Divider bg='#FFF' w='16' my='0.5'  />

          <Text fontSize='xs' fontWeight='extrabold' color='#FFF' >
            Total
          </Text>
          <Text fontSize='xs' fontWeight='extrabold' color='orange.700'>
            {/* ${ value === 'ship' ?  parseFloat(totalPlusTax + 9.99 ).toFixed(2) : parseFloat(totalPlusTax).toFixed(2) } */}
            {totalPriceText}
          </Text>
        </Box>
       </VStack>
      </HStack>
      <HStack safeArea='2' space={4} alignItems="flex-start"  w='90%' flexWrap='wrap'>
        { value === 'pickUp' ? 
            locations.map((locationName) => (
                <Pressable key={locationName} id={locationName}   
                    my='2'
                    shadow={2}
                    onPress={() => {setPickLocation(locationName)}}
                >
                    <Box id={locationName} bg='#FFF' p='2' px='3' borderRadius='8' >
                        <Text  textAlign='center' fontSize='xs' >
                            {locationName}
                        </Text>
                    </Box>
                </Pressable>
            )) 
            : null 
        }
        
        <Box id={value}>
            <Text  id={value} fontSize='xs' fontWeight='bold'>
                Total: <Text id={value} color='orange.700'>{totalPriceText}</Text>
            </Text>
            

        </Box>
       </HStack>
      <Box  > 
        <Button size='lg' w='100%' onPress={onPress}>Checkout</Button>
       </Box>
    </Box>
  );
}

export default CheckoutHeader;

