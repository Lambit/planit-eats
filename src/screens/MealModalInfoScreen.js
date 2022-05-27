import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet
  } from 'react-native';

//Components 
import { getChicken } from '../data/ChickenMealsData';
import { CartContext } from '../navigation/context/CartContext';

//Packages

/*-----MealDetails----- 
  Called when MeanuList is pressed. Contains more info about the slecter meal.
*/

export function MealModalInfoScreen({ route }) {
  const { mealId } = route.params;
  const [meal, setMeal] = useState({});

  console.log(route.params, 'MealsDetailsScreen ====');
  console.log(route.key, 'MealsDetailsScreen $$$$$$');

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setMeal(getChicken(mealId));
    console.log(mealId, '++++++++++++++++++++++++++')
  });

  function onAddToCart() {
    addItemToCart(meal.id);
  }

  return (
    <SafeAreaView >
      <ScrollView>
        <Image
          style={styles.image}
          source={meal.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{meal.name}</Text>
          <Text style={styles.price}>$ {meal.price}</Text>
          <Text style={styles.description}>{meal.description}</Text>
            <Button
                onPress={onAddToCart}
                title="Add to cart"
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});
