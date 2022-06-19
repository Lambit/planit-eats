import React from 'react';

// Packages
import { Pressable, Box, VStack, Text, } from 'native-base';

/*-----MealPlanLayout----- 
  Payge layout to render a Flatlist for the SelectMealPlanScreen, props are assined and passed. To be defined later in the function renderPlan().
*/ 

const MealPlanLayout = ({ id, name, metadata, qty, price, onPress, bg, borderColor, color, text, mealPrice }) => {
  return (
    <Pressable 
      w='40'
      h='40'
      opacity='.9'
      justifyContent='center' 
      onPress={onPress} 
    >      
      <Box 
        alignSelf='center'
        justifyContent='center'
        h='90%'
        w='90%' 
        p='2'
        bg={bg}
        borderWidth="2" 
        borderColor={borderColor} 
        shadow="3"  
        rounded="8"
      >
        <VStack alignItems='center'>
          <Text color={color} textAlign='center' paddingTop='1'  > 
            {text} 
          </Text> 

          <Text  color={color}fontWeight='bold'  textAlign='center' > 
            {name}
          </Text>

          <Text color={color}textAlign='center' > 
            {metadata.meals} Meals
            {/* {meals} Meals */}
          </Text>

          <Text color={color}textAlign='center' paddingBottom='3'> 
            ${metadata.price} 
            {/* ${price}  */}
          </Text>
        </VStack> 
      </Box>   
    </Pressable> 
  );
};

export default MealPlanLayout;




