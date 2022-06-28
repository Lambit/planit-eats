import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';

//Components
import { MealLayout } from '../components/meal-layout/MealLayout';
import { getMeals } from '../data/chicken/ChickenData';

/*-----MealList-----
    MealList imports the Meal layout component as well as the get meals function.
    It renders the meal layout plus props and sets the state through th getMeals 
    function. Returns a Flatlist to display data.
*/ 

export function MealMenuScreen ({ navigation }) {
function renderMeal({ item: meal }) {
    return (
        // Meal componant instance
        <MealLayout 
          {...meal} 
            onPress={() => {
            navigation.navigate('MealDetails', {
              mealId: meal.id,
            });
          }}
        />
    );
  }

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setMeals(getMeals());
  });

  console.log(route.params, 'MealListScreen ====');
  console.log(route.key, 'MealListScreen $$$$$$');

  return (
    <FlatList
      style={{backgroundColor: '#EEE'}}
      contentContainerStyle={{backgroundColor: '#EEE', paddingVertical: 8, marginHorizontal: 8,}}
      keyExtractor={(item) => item.id.toString()}
      data={meals}
      renderItem={renderMeal}
    />
  );
}


