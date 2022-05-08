import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

// Components
import HorizontalMenuBar from '../components/horizontal-menu-bar/HorizontalMenuBar';
import MenuLayout from '../components/menu-layout/MenuLayout';
import { ChickenMealsData } from '../data/ChickenMealsData';

/*-----ChickenScreenMenu-----
  Menu Screen displayed, mapping chicken data, through MenuLayout and displaying it.
*/ 

const ChickenMenuScreen = () => {
    const { chicken } = ChickenMealsData;
  return (
    //Safey area wrapper with styles
    <SafeAreaView style={homeStyles.safeAreaContainer}>
        <HorizontalMenuBar />
    <ScrollView>
        {/* Page Title ----------------------------------- */}
        <View>
            <Text style={homeStyles.homeTitle}>Chicken</Text>
        </View>
        {/* Mapped Coral Data ---------------------------- */}
        <View style={homeStyles.mappedDataContainer}>
            {chicken.map((food) => (
                <MenuLayout key={food.id} food={food} />
            ))}
        </View>    
    </ScrollView>
    </SafeAreaView>
  );
};

export default ChickenMenuScreen;

export const homeStyles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
    },
    homeTitle: {
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 8,
        margin: 20,
        padding: 10,
    },
    mappedDataContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        textItems: 'center',
        justifyContent: 'center',
    },
});