import React, { useState, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { db } from '../firebase-config';
import { setDoc, doc, getDoc, getDocs, deleteDoc, Timestamp, collection } from 'firebase/firestore';

// Components
import MealPlanLayout from '../components/meal-plan-layout/MealPlanLayout';
import FormButton from '../components/form-button/FormButton';
import LoadingScreen from './LoadingScreen';

// Packages
import { CommonActions } from '@react-navigation/native';
import {  Box, Heading, Divider, FlatList, } from 'native-base';


/* -----SelectMealPlanScreen-----
    Here the user is introduced to PlanItEats plans. After choosing selected plan they
    are routed to AddMealsToPlanScreen.

    // MealPlanLayout componant rendered
    // route.key = SelectMeal-McbpC26VK9VuEr-TNOd0Q
*/ 

const SelectMealPlan = ({ route, navigation }) => {
  const { email, zip, planId, planPrice, planName, planQty, mealPrice } = route.params;
  const [show, setShow]= useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [box, setBox] = useState([]);
  
//   Call when component is rendered
useEffect(() => {
const getBox = async () => {
    const querySnapshot = await getDocs(collection(db, "bulk-box"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
          setBox(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    })
}
getBox();
}, []);




  function renderPlan({ item: plan }) {
    const bg = plan.id === show ? 'coolGray.500' : 'coolGray.300'; 
    const borderColor = plan.id === show ? '#004282' : '#bbf7d0';
    const color = plan.id === show ? '#FFF' : '#080938';
    const text = plan.id === show ? `Selected` : null;

    return (
      <>
        <MealPlanLayout {...plan} 
          key={plan.id}
          bg={bg}
          borderColor={borderColor}
          color={color}
          text={text}
          onPress={() => {
            setShow(plan.id)
              navigation.dispatch({ 
                ...CommonActions.setParams({planId: plan.id, planPrice: plan.metadata.price, planName: plan.name, planQty: plan.metadata.meals, mealPrice: plan.metadata.mealPrice, }),
                source: route.key,
              });
            }}
        />
      </>
    );
  }
  // plans set to an array
  // const [planState, setPlanState] = useState([]);

  // Gets the plans data and set the state to an array
  // useEffect(() => {
  //   setPlanState(getPlans());

  // });


  // Nav-functions ------------ to AddMealsToPlanScreen with params
  const toAddMeal = () => {
    navigation.navigate('AddMeal', { 
      email: email,
      zip: zip,
      planId: planId,
      planPrice: planPrice,
      planName: planName,
      planQty: planQty ,
      mealPrice: mealPrice,
      
    });
  };

  return (
    // -----Background Image-----
    <ImageBackground source={require('../assets/img/cut-veg.jpeg')} 
      accessibilityLabel='Tomato and herb background image.'
      resizeMode='cover'
      style={{
        width: 400, 
        height: '100%',
        overflow: 'hidden',
        justifyContent: 'center',
        }
      }
    > 
    <SafeAreaView style={{flex: 1, alignItems: 'center', marginBottom: 40, }}>

      {/*-----Box that holds Title and message----- */}
      <Box 
        safeArea='2'
        px='2' 
        mt='10'
        w="80%" 
        maxW="300" 
        bg='coolGray.300'  
        opacity='.7'
        alignItems='center'
        borderWidth="2" 
        borderColor='#bbf7d0' 
        borderRadius="8"
        shadow='4'
        mb='8'
      >
        <Heading 
          size="xl" 
          fontWeight="600" 
          color= '#080930'
        >
            Bulk Boxes
        </Heading> 
          <Divider m="2" thickness="2" bg="#bbf7d0" w="260"/>
            <Heading 
              size="xs" 
              m='2'
              fontWeight="400" 
              color='#080930' 
            >
                Our goal is to provide nutrient rich, fully prepared food with the belief that if 
                you eat better you live better. In today's modern world proper nutritional choices are scarce and your time is limited. 
                Create a bulk box subscription today to recieve your favorite meals every week. Discounts are applied to each box and 
                updating your subscription is a simple and fast.
            </Heading> 
        </Box> 

       { isLoading 
       ? 
        <LoadingScreen /> 
       :
        <FlatList
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          data={box}
          renderItem={renderPlan}
          extraData={route.params}
          style={{ paddingTop: 40, marginEnd: 10, marginStart: 2, }}
        /> 
       }
      
      <FormButton 
       text='Continue' 
       onPress={toAddMeal}
       bdColor='#080938'
      /> 
    </SafeAreaView>
    </ImageBackground>
  );
};

export default SelectMealPlan;
