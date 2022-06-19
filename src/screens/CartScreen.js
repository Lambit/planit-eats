import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Image, RefreshControl } from 'react-native';

//Components/Hooks
import CheckoutHeader from '../components/checkout-header/CheckoutHeader';
import { CartContext } from '../navigation/context/CartContext';
import ChechoutSessionScreen from './ChechoutSessionScreen';
import { chickenSvg } from '../assets/img/svg/ChickenIcon';
import { heartRateSvg } from '../assets/img/svg/HeartRateSvg';
import { locations } from '../utils/constants/constants';

//Packages
import { Heading, Box, Text, FlatList, HStack, Divider, Center, Button, VStack, Radio, Pressable, } from 'native-base';
import { SvgXml } from 'react-native-svg';

/*----CartScreen------
  Cart key - Cart-SdjR0lAH7VWONIA9byHps

*/ 

export function CartScreen ({ navigation, route }) {
  const {items, addItemToCart} = useContext(CartContext);

  function Totals() {
    const { email, zip, planId, planPrice, planName, boxContent, pickOrShipValue } = route.params;
    const priceVal = parseFloat(planPrice);
    const taxPrice = 0.0625 * planPrice;
    const totalPlusTax = priceVal + taxPrice;
    const totalPlusTaxShip = priceVal + taxPrice + 9.99;
    const [value, setValue] = useState('');
    const [pickLocation, setPickLocation] = useState('');

    const toBill = async () => {
      navigation.navigate('Billing', {
        email: email,
        zip: zip,
        planId: planId,
        boxContent: items,
        planPrice: planPrice,
        planName: planName,
        totalPlusTax: totalPlusTax,
        totalPlusTaxShip: totalPlusTaxShip,
        location: pickLocation,
        pickOrShipValue: value,
      });
    }

    console.log(totalPlusTax, 'Cart =======================totalPlusTax');
    console.log(planPrice, 'Cart ========================planPrice');
    
    console.log(value, 'Cart =========================value');
    console.log(pickLocation, 'Cart ==========================pickLocation');
    console.log(locations, 'Cart ==========================pickLocation');
    // console.log(items, 'Cart ==========================pickLocation');


    return (
      <Box safeArea='2'
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
              <Radio value='pickUp' colorScheme='emerald' >Pick Up</Radio>
              <Radio value='ship' colorScheme='emerald' >Shipping</Radio>
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
                 ${taxPrice.toFixed(2)}  
              </Text>

              <Divider bg='#FFF' w='16' my='0.5'  />

              <Text fontSize='xs' fontWeight='extrabold' color='#FFF' >
                Total
              </Text>
              <Text fontSize='xs' fontWeight='extrabold' color='orange.400'>
                 ${ value === 'ship' ?  parseFloat(totalPlusTaxShip).toFixed(2) : parseFloat(totalPlusTax).toFixed(2) } 
              </Text>
            </Box>
           </VStack>
          </HStack>

      { value === 'pickUp' 
        ? 
          <Text fontSize='xs' mt='2' ml='2' fontWeight='extrabold' >
            Please Select A Grab and Go Location
          </Text> 
        : 
          null 
      }

      <HStack  space={4} alignItems="flex-start"  w='90%' flexWrap='wrap'>
        { value === 'pickUp' 
          ? 
            locations.map((locationName) => (
                <Pressable key={locationName} id={locationName} 
                  my='2' 
                  p='2' px='3' 
                  bg='#FFF'
                  borderRadius='8'
                  shadow={2}
                  onPress={() => {setPickLocation(locationName)}}
                  _pressed={{
                    bg: '#EEE',
                    opacity: .7,
                    color: '#FFF',
                  }}
                >
                  <Text  textAlign='center' fontSize='xs' >
                      {locationName}
                  </Text>
                </Pressable>
            )) 
            : null 
        }
        </HStack>
        <Center>
        <HStack justifyContent='space-between' w='90%'  >
          <Pressable key={value} id={value} 
            my='2' 
            p='2' px='3' 
            bg='#004282'
            borderRadius='8'
            shadow={2}
          >
            <Text id={value} fontSize='xs' fontWeight='bold' color='#FFF'>
              {planName}:
                <Text color='orange.400'>
                 {' '} {items.length} Meals
                </Text>
            </Text>
          </Pressable>

          { pickLocation 
            ? 
              <Pressable key={pickLocation}  id={value}
                  my='2' 
                  p='2' px='3' 
                  bg='#004282'
                  borderRadius='8'
                  shadow={2}
                >
                  <Text color='#FFF' id={value}  textAlign='center' fontSize='xs' >
                      See you at {pickLocation}!
                  </Text>
                </Pressable>
            : 
            // value === 'Cart' === null ? value === 'ship' === !pickLocation :  value ===  'pickup' === pickLocation
            null
        }


        </HStack>
        </Center>
      <Box> 
        <Button size='lg' w='100%' 
        bg='#004282' _pressed={{bg: '#080938'}} 
        onPress={toBill}
      >
        {value === 'ship' ?  parseFloat(totalPlusTax + 9.99 ).toFixed(2) : parseFloat(totalPlusTax).toFixed(2)}
      </Button>
       </Box>
    </Box>

    // <CheckoutHeader 
    // taxPriceText={`${taxPrice.toFixed(2)}`}
    // totalPriceText={`${ value === 'ship' ?  parseFloat(totalPlusTax + 9.99 ).toFixed(2) : parseFloat(totalPlusTax).toFixed(2) }`}
    // onPress={toBill}
    // /> 

    )
  }
  //----------List Header----------
  function renderItem({item}) {
    return (
      <>
      {console.log(item, 'itemmmmmmmmmmmmmmmmmmmmmmmmmm')}
      {console.log(items, 'itemmmmmmmmmmmmmmmmmmmmmmmmmmssssssss')}
      {console.log(item.meal, 'meallllllllllllllllll')}

      <Box
        w='90%'
        m='4'
        bg='coolGray.300'
        borderRadius='16'
        shadow='6'
        shadowColor='#000'
        alignSelf='center'
      >
        <HStack >
          <VStack  space="3" alignItems="flex-start" pr='3' p='4'>
            {/* -----Image----- */}
            <Box justifyContent='center' shadow={2}>
              <Image 
                source={item.id.images}
                alt={item.id.name }
                style={{
                  height: 150,
                  width: 150,
                  borderRadius:8,
                }}
              />
            </Box>
            {/* -----Add Remove----- */}
            <HStack space={1}>
              <Button px='4' shadow={4}  > 
                + 
              </Button>
                <Box bg='#FFF' p='2' px='6' borderRadius='8'>
                  <Text textAlign='center' fontSize='xs' fontWeight='extrabold'>
                    {item.qty}
                   </Text>
                </Box>
            
                <Button px='4' shadow={4} >
                  - 
                </Button>
              </HStack>
            </VStack>
            {/* -----Cart Item Info----- */}
            <VStack py='4' justifyItems='flex-start' space={4} >
              <Box p='2' w='150'>

                <Heading size='xs'>
                  {item.id.name}
                </Heading>

                <Divider bg='#000' w='80%'  m='2'/>

                <Box h='6' w='80%' my='2' 
                  alignItems='center'
                  justifyContent="center"
                  bg='#FFF'
                  shadow={4}
                  borderRadius="4"  
                >
                  <Text  fontSize='xs'  p='1'>
                    Standard Price
                  </Text>
                </Box>

                <Box space={4}
                  h='6'
                  w='80%'
                  alignItems='center'
                  justifyContent="center"
                  bg='#FFF'
                  shadow={6}
                  borderRadius="4"   
                >
                  <Text  fontSize='xs'  p='1'>
                    ${item.id.metadata.price}
                  </Text>
                </Box>
              </Box>
                 <HStack space={1} justifyContent='flex-end' alignContent='flex-end' shadow={4} pr='2'>
                  <SvgXml xml={chickenSvg} width='50' height='50'/>
                    <SvgXml xml={heartRateSvg} width='50' height='50'/>
                      <Image source={require('../assets/img/PlanItEatsLogo-globe-mobile.png')} 
                        alt='Logo'
                        style={{
                          height:50,
                          width: 50,
                        }}      
                      /> 
                </HStack> 
          </VStack>
        </HStack>
       </Box>

     </>
    );
}


  return (
    <>
  <Heading textAlign='center' fontSize="xl"  p='6' bg='#FFF'>
    Cart
  </Heading>
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={Totals}
    />
    </>
  );
}
const styles = StyleSheet.create({
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

// const priceVal = parseFloat(planPrice);
// const taxPrice = 0.0625 * planPrice;
// const shippingPrice = priceVal ? 0 : 10;
// const totalPlusTax = priceVal + taxPrice;

// keyExtractor={(item) => item.mealId || item.planId}

// <Text fontWeight='extrabold' fontSize='xl'>
// Tax: ${taxPrice.toFixed(2)}
// </Text>
// <Text fontSize='3xl' fontWeight='extrabold'>
// Total: ${parseFloat(totalPlusTax).toFixed(2)}
// </Text>
