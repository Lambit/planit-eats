import React, { useState, useEffect, useContext } from 'react';
import { ImageBackground,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import MealPlanLayout from '../components/meal-plan-layout/MealPlanLayout';
import FormButton from '../components/form-button/FormButton';
import { getPlans } from '../data/meal-plans/mealPlanData';

// Packages
import { CommonActions } from '@react-navigation/native';
import {  Box, Heading, Divider, Text, FlatList, } from 'native-base';

/* -----SelectMealPlanScreen-----
    Here the user is introduced to PlanItEats plans. After choosing selected plan they
    are routed to AddMealsToPlanScreen.

    // MealPlanLayout componant rendered
    // route.key = SelectMeal-McbpC26VK9VuEr-TNOd0Q
*/ 

const SelectMealPlan = ({ route, navigation }) => {
  const { email, zip, planId, planPrice } = route.params;
  const [show, setShow]= useState(null);

  function renderPlan({ item: plan }) {
    const bg = plan.id === show ? 'coolGray.500' : 'coolGray.300'; 
    const borderColor = plan.id === show ? '#004282' : '#bbf7d0';
    const color = plan.id === show ? '#FFF' : '#080938';
    const text = plan.id === show ? `Selected` : null;

    return (
      <>
        <MealPlanLayout {...plan} 
          bg={bg}
          borderColor={borderColor}
          color={color}
          text={text}
          onPress={() => {
            setShow(plan.id)
              navigation.dispatch({ 
                ...CommonActions.setParams({planId: plan.id, planPrice: plan.price }),
                source: route.key,
              });
            }}
        />
      </>
    );
  }
  // plans set to an array
  const [planState, setPlanState] = useState([]);

  // Gets the plans data and set the state to an array
  useEffect(() => {
    setPlanState(getPlans());
  });

  // Nav-functions ------------ to AddMealsToPlanScreen with params
  const toAddMeal = () => {
    navigation.navigate('AddMeal', { 
      email: email,
      zip: zip,
      planId: planId,
      planPrice: planPrice,
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
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>

      {/*-----Box that holds Title and message----- */}
      <Box 
        safeArea='2'
        px='2' 
        w="80%" 
        maxW="300" 
        bg='coolGray.300'  
        opacity='.7'
        alignItems='center'
        borderWidth="2" 
        borderColor='#bbf7d0' 
        borderRadius="8"
        shadow='4'
      >
        <Heading 
          size="xl" 
          fontWeight="600" 
          color= '#080930'
        >
            Meal Plans
        </Heading> 
          <Divider m="2" thickness="2" bg="#bbf7d0" w="260"/>
            <Heading 
              size="sm" 
              m='2'
              fontWeight="400" 
              color='#080930' 
            >
                Hello {`${email}`}! our goal is to provide nutrient rich, fully prepared food with the belief that if 
                you eat better you live better. In today's modern world proper nutritional choices are scarce and your time is limited. 
                Created for you, by you, to help you live your best life. We have location with in the area of {`${zip}`}.
            </Heading> 
              <Text textAlign='center' fontWeight='bold'>Pick A Plan</Text>
              <Text textAlign='center'>{`${email}`}</Text>
              <Text textAlign='center'>{`${zip}`}</Text>
        </Box> 

        <FlatList
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          data={planState}
          renderItem={renderPlan}
          extraData={route.params}
        />
      
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
