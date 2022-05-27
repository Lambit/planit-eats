import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Image } from 'react-native';

//Components/Hooks
import { formatCurrency } from '../utils/formatCurrency';
import { CartContext } from '../navigation/context/CartContext';

//Packages
import { Heading, Box, Text, FlatList, HStack, Divider, Button } from 'native-base';

/*----CartScreen------
  Cart key - Cart-SdjR0lAH7VWONIA9byHps
*/ 

export function Cart ({ navigation, route }) {
  const {items, getTotalPrice} = useContext(CartContext);

  const toPayment = () => {
    navigation.navigate('Payment')
  }

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    const taxPrice = total * 0.625;
    const shippingPrice = total ? 0 : 10;
    const totalPlusTax = total + taxPrice + shippingPrice;
    console.log(total, 'Cart =================================');
    console.log(route.params, 'Cart ====');
    console.log(route.key, 'Cart $$$$$$');
    return (
      <>
       <Box safeArea='2' mr='4' alignItems='flex-end' flexDir='column'>

          <Text fontWeight='extrabold' fontSize='xl'>
            Shipping
          </Text>
          <Text fontSize='xl'>${formatCurrency(shippingPrice)}</Text>
          <Text fontWeight='extrabold' fontSize='xl'>
            Tax
          </Text>
          <Text fontSize='xl'>${formatCurrency(taxPrice)}</Text>
          <Text fontSize='3xl' fontWeight='extrabold'>
            Total
          </Text>
          <Text fontSize='4xl'>${formatCurrency(totalPlusTax)}</Text>
       </Box>
       <Box safeArea='2' mb='6' mr='4' alignItems='center' flexDir='column'> 
        <Button size='lg' w='80%' p='6' onPress={toPayment}>Checkout</Button>
       </Box>
       </>
    );
  }
function renderItem({item}) {
    return (
      <>
      <Box m='2'>
        <HStack  space="3" alignItems="center" flexDir='row'>

          <Image 
            source={item.meal.image}
            alt={item.name}
            style={{
              height: 120,
              width: 120,
              borderWidth: 2,
              borderColor: '#000',
              borderRadius:16,
            }}
          />
            <Box  m='1'  p='4' w='40%'>
              <Button p='0.5' mx='8' mb='2' > + </Button>
                <Text p='2' fontSize='xs' textAlign='center'>
                  {item.meal.name}
                </Text>
                <Text textAlign='center' fontSize='xs' fontWeight='extrabold'>
                  x {item.qty}
                </Text>
                  <Button p='0.5' mx='8' mt='2'  > - </Button>
            </Box>

              <Box m='1'  p='4' justifyContent='flex-end'>
                <Text fontSize='xs' textAlign='center' >
                  ${formatCurrency(item.totalPrice)}
                </Text>
              </Box>   
          </HStack>
       </Box>
     <Divider alignSelf='center' w='100%' mt='4' thickness='1' bg='#000'/>
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
      keyExtractor={(item) => item.meal.id.toString() || item.plans.id.toString()}
      ListFooterComponent={Totals}
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


