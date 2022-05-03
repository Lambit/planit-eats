import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/* -----------MenuLayout----------
    Page layout for all menus listed
*/ 

const MenuLayout = (props)  => {
    const { food } = props;
  return (
  
    <View style={styles.container}>  
        <TouchableOpacity 
            onPress={() => console.warn('pressed')}>
                <Image 
                    source={food.image} 
                    alt={food.name} 
                    style={styles.foodImg} 
                />
            <Text style={styles.foodName}>
                {food.name}
            </Text>

            <Text style={styles.foodPrice}>
                ${food.price}
            </Text>
        </TouchableOpacity>
    </View>

  );
};

export default MenuLayout;

const styles = StyleSheet.create({
    // Coral Data
    container:{
        margin: 8,
        padding: 2,
        textAlign: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
       
    },
    foodImg:{
        width: 150,
        height: 150,
        margin: 10,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
    },
    foodName:{
        color: '#000',
        fontWeight: '800',
        marginBottom: 10,
        textAlign: 'center'
    },
    foodPrice:{
        color: '#dc2626',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
    },
});