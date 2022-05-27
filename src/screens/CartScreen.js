import React, { useState, useContext } from "react";
import { CartContext } from "../navigation/context/CartContext";
import { formatCurrency } from '../utils/formatCurrency'

// Components/Screens

// Packages
import { Box, Button, Heading,  HStack,  VStack, Text, Divider, ScrollView, Modal, ZStack, Center } from 'native-base';

const CartScreen = (props) => {
  
    const { cartItems, addToCart, subtractFromCart, removeFromCart, getTotalPrice, getItemsCount } = useContext(CartContext);
    const [checkingOut, setCheckingOut] = useState(false);
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.625;
    const shippingPrice = itemsPrice ? 0 : 10;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <Box safeArea='1' flex='1' bg='#080930'>
        <Heading fontSize="xl" p="4" pb="3" my='3' bg='#FFF'>
            Cart
        </Heading>
            <ScrollView>
                {cartItems.map((food) => (
                    <Box key={food.id}>
                        <VStack justifyContent='space-between' space={2} >
                            <Text size='xs'>{food.id}</Text>
                            <Image
                                source={food.image}
                                alt={food.name}
                                width='100'
                                height='100'
                            />
                            <Text>{food.name}</Text>
                            <Text>${food.price}</Text>

                            <Button value={food.qty} 
                                onClick={(e) => subtractFromCart(food, parseInt(e.target.value))}>
                                  Delete
                            </Button>
                              <Text>${food.qty}</Text>

                              <Button onClick={() => addToCart(coral)}>
                                Add
                              </Button>

                              <Text>
                              {formatCurrency(food.price * food.qty)}
                            </Text>

                              <Button value={food.qty} 
                                onClick={(e) => removeFromCart(food, parseInt(e.target.value))}>
                                  Remove
                              </Button>
                        </VStack>

                        <Divider />

                        <Center h="96">
                        <ZStack alignItems="center" justifyContent="center">
                          <Box bg="indigo.700" size="64" rounded="lg" />
                          <Box bg="indigo.500" size="48" rounded="lg" shadow={8} />
                          <Box bg="indigo.300" size="32" rounded="lg" shadow={8}>
                            <Text>item price:</Text>
                            <Text>{formatCurrency(itemsPrice)}</Text>
                            <Text>tax:</Text>
                            <Text>{formatCurrency(taxPrice)}</Text>
                            <Text>shipping pricw:</Text>
                            <Text>{formatCurrency(shippingPrice)}</Text>
                            <Text>total price:</Text>
                            <Text>{formatCurrency(totalPrice)}</Text>
                            <Button>Checkout</Button>
                          </Box>
                        </ZStack>
                      </Center>;

                    </Box>
            
                ))}
            </ScrollView>
    </Box>
  );
};

export default CartScreen