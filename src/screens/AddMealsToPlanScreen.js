import React, { useContext, useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

// Firebase
import { auth } from '../firebase-config';
import { db } from '../firebase-config';
import { getDocs,  collection, } from 'firebase/firestore';

// Components
import { CartContext } from '../navigation/context/CartContext';
import { QuickBuyMenuLayout } from '../components/quick-buy-menu-layout/QuickBuyMenuLayout';
import FormButton from '../components/form-button/FormButton';
import LoadingScreen from './LoadingScreen';

// Packages
import { Box, Divider, Heading,  HStack,  VStack, FlatList, Center,} from 'native-base';

/*-----AddMealsToPlanScreen----- 
  key = AddMeal-iwbRpivExxxZXWWdeBOGN
  param = {"email": "ddsdsd", "planId": 500, "zip": "dsdsdsdsd"}
  planId = 500
*/ 

const AddMealsToPlanScreen = ({ navigation, route }) => { 
  const { items, addItemToCart, getItemsCount, } = useContext(CartContext);
  const { email, zip, planId,  planPrice, planName, planQty, mealPrice } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  /* Set meals data state to an array to be used in a flatlist */ 
  const [meals, setMeals] = useState([]);
  const priceVal = parseFloat(mealPrice);
  const taxPrice = 0.0625 * mealPrice;
  const totalPlusTax = priceVal + taxPrice;

  // const displaySavings = () => {
  //   const makeValue = totalPlusTax.toFixed(2);
  //   const countVale = makeValue * getItemsCount();
  //   if ([items.length ++]) {
  //     return countVale;
  //   }
    // console.log(displaySavings);
  // }

  // ---------------get all meals----------------
  // Call when component is rendered
  useEffect(() => {
    const getMealData = async () => {
        const querySnapshot = await getDocs(collection(db, "meals"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
              setMeals(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
        })
    }
    getMealData();
  }, []);

  // console.log(mealPrice);

  const seeCart = () => {
    navigation.navigate('Cart', {
      email: email,
      zip: zip,
      planId: planId,
      planPrice: planPrice,
      planName: planName,
      planQty: planQty,
    });
  };

    /* 
    Render <QuickBuyMenuLayout and spread the props. Navigation function
      to CartScreen with params of data sent. onAddToCart once meal.id equals
      Bulk-Box meal quantity send user to cart.
  */ 
  function renderMeal({ item: meal }) {
    const seeCart = () => {
      navigation.navigate('Cart', {
        email: email,
        zip: zip,
        planId: planId,
        planPrice: planPrice,
        planName: planName,
        planQty: planQty,
        
      });
    };

    const onAddToCart = () =>  {
      addItemToCart(meal);
      if(planQty == [items.length + 1])
      return seeCart();
    }
    
    return (
        // Meal componant instance
        <QuickBuyMenuLayout 
          {...meal} key={items.id}
          onPress={() => {
              onAddToCart();
            }}   
        />
    );
  }

  // useEffect(() => {
  //   setMeals(getMeals());
  // });
  
   /* -------flatlist veiw--------------------- */ 
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

    <Box safeArea='1' h="320" w="100%" bg='#080938' borderTopLeftRadius='8' >
      <HStack mx='6' justifyContent='space-between'>
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
          <Box
            mx='6' 
            justifyContent='space-between' 
          >
           <HStack space={10}>
              <Heading  fontSize="md" py="4"  mb='3' color='#EEE' >
                {planName}
              </Heading>

              <Heading  fontSize="md" p="4" pb="3"  mb='3' color='#EEE' >
                ${planPrice}
              </Heading>


              <Heading fontSize="md" p="4" pb="3" ml='4' mb='3' color='#EEE' >
                {getItemsCount()}
              </Heading>
            </HStack>
          </Box>
          <Center>
            <VStack 
              space={2}
              alignContent='center'

            >
            {/* <Box w='180' h='16'  borderRadius='6' bg='coolGray.400' shadow={4} >

            <Heading fontSize="md" p="4" pb="4"  color='#004282' textAlign='center'>
                {displaySavings}  
              </Heading>
              </Box> */}
      
            </VStack>

            <Box>
            <FormButton 
              text='Cart' 
              onPress={seeCart} 
              bdColor='#0077e6'
            />
            </Box>
          </Center>
    </Box>
  </>
    

  );
};

export default AddMealsToPlanScreen;

