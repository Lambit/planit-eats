import React, { useContext, useState, useEffect } from 'react';

// Components
import { getPlanById } from '../data/meal-plans/mealPlanData';
import { getMeals } from '../data/ChickenMealsData.js';
import { CartContext } from '../navigation/context/CartContext';
import { QuickBuyMenuLayout } from '../components/quick-buy-menu-layout/QuickBuyMenuLayout';
import { formatCurrency } from '../utils/formatCurrency';

// Packages
import { Box, Divider, Heading,  HStack,  VStack, Text, FlatList, Center, Button } from 'native-base';


/*-----AddMealsToPlanScreen----- 
  key = AddMeal-iwbRpivExxxZXWWdeBOGN
  param = {"email": "ddsdsd", "planId": 500, "zip": "dsdsdsdsd"}
  planId = 500
*/ 

const AddMealsToPlanScreen = ({ navigation, route }) => { 
  const { items, addPlanToCart, addItemToCart, getItemsCount, getTotalPrice } = useContext(CartContext);
  const { email, zip, planId, mealId, planPrice } = route.params;
  const [planState, setPlanState] = useState({});
  const seeCart = () => {
    navigation.navigate('Cart', {
      email: email,
      zip: zip,
      planId: planId,
      planPrice: planPrice,
    });
  };

  useEffect(() => {
    setPlanState(getPlanById(planId));
    console.log(planId, mealId, 'planId-------------------');
  });
  function renderMeal({ item: meal }) {
    const onAddToCart = () =>  {
      addItemToCart(meal.id);
      if(items.length  === planState.qty - 1)
      return seeCart(); 
    }
    return (
        // Meal componant instance
        <QuickBuyMenuLayout 
          {...meal} 
          onPress={() => {
              onAddToCart();
            }}
         
        />

    );
  }

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setMeals(getMeals());
  });
   
  console.log(planState, 'planState-------------------');
  console.log(route.params, 'AddMealsScreen ====');
  console.log(route.key, 'AddMealsScreen $$$$$$');
  // console.log(getTotalPrice);
  // console.log(planState.price);

  return (    
  <>
    <Heading fontSize="xl"  p='6' bg='#FFF'>
      Pick Your Meals!
    </Heading>

    <FlatList
      style={{backgroundColor: '#EEE'}}
      contentContainerStyle={{backgroundColor: 'coolGrey.300', marginHorizontal: 2,}}
      keyExtractor={(item) => item.id.toString()}
      data={meals}
      renderItem={renderMeal}
      extraData={route.params}
    />
    <Box safeArea='1' h="320" w="100%" bg='#000' borderTopLeftRadius='8' >
          <HStack mx='6' justifyContent='space-between' >
            <Heading alignContent='center' fontSize="xs" p="2" mt='3' color='#EEE'>
              Meal Plan
            </Heading>
            <Heading alignContent='center'  fontSize="xs" p="2"  mt='3' color='#EEE'>
              Cart Price
            </Heading>
            <Heading  fontSize="xs" p="2" mt='3' color='#EEE'>
              Meal Count
            </Heading>
          </HStack>

            <Divider w='90%' alignSelf='center' m='2' mb='4' thickness='2' />
              <HStack mx='6' justifyContent='space-between' >
                <Heading  fontSize="md" p="4" pb="3" mr='4' mb='3' bg='#EEE'>
                  {planState.name}
                </Heading>
                <Heading  fontSize="md" p="4" pb="3" mr='10' mb='3' bg='#EEE'>
                {formatCurrency(getTotalPrice())}
                </Heading>
                <Heading  fontSize="md" p="4" pb="3" mr='4' mb='3' bg='#EEE'>
                  {getItemsCount()}
                </Heading>
              </HStack>
                <Center>
                  <VStack space='4' mt='2'>
                    <Text color='#FFF' textAlign='center' >{`${email}`}</Text>
                    <Text color='#FFF' textAlign='center' >Pick {planState.qty} meals </Text>
                    <Text color='#FFF' textAlign='center' >Plan Price: ${planState.price}</Text>
                      <Button mb='1' onPress={seeCart}>savings</Button>
                  </VStack>
                </Center>
    </Box>
  </>
    

  );
};

export default AddMealsToPlanScreen;

