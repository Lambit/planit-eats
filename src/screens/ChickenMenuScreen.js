import React from 'react';
import {  SafeAreaView, ScrollView, StyleSheet } from 'react-native';

// Components
import HorizontalMenuBar from '../components/horizontal-menu-bar/HorizontalMenuBar';
import MenuLayout from '../components/menu-layout/MenuLayout';
import { ChickenMealsData } from '../data/ChickenMealsData';

//Packages
import { Box, Heading } from 'native-base';

/*-----ChickenScreenMenu-----
  Menu Screen displayed, mapping chicken data, through MenuLayout and displaying it.
*/ 

const ChickenMenuScreen = () => {
    const { chicken } = ChickenMealsData;
    console.log(route.params, 'ChickenMenuScreen ====');
    console.log(route.key, 'ChickenMenuScreen $$$$$$');
  return (
    <Box safeArea='1' bg='#080930'>
        <Heading fontSize="xl" p="4" pb="3" my='3' bg='#FFF'>
          Pick Your Meals!
        </Heading>
        <ScrollView>
            {chicken.map((food) => (
                <MenuLayout key={food.id} food={food} />
            ))}
        </ScrollView>
    </Box>
  );
};

export default ChickenMenuScreen;

    //Safey area wrapper with styles
    // <SafeAreaView style={homeStyles.safeAreaContainer}>
    //     <HorizontalMenuBar />
    // <ScrollView>
    //     {/* Page Title ----------------------------------- */}
    //     <View>
    //         <Text style={homeStyles.homeTitle}>Chicken</Text>
    //     </View>
    //     {/* Mapped Coral Data ---------------------------- */}
    //     <View style={homeStyles.mappedDataContainer}>
    //         {chicken.map((food) => (
    //             <MenuLayout key={food.id} food={food} />
    //         ))}
    //     </View>    
    // </ScrollView>
    // </SafeAreaView>