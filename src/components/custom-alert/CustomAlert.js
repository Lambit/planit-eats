import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

//Packages
import { useNavigation, useRoute } from '@react-navigation/native';


const CustomAlert = () => {
    Alert.alert(
      "Great Choices!",
      "Proceed to checkout!",
      [
        {
          text: "OK",
          onPress: () => seeCart(),
        },
        { 
            text: "Cancel", 
            onPress: () => selectAgain(),
            style: "cancel"
        }
      ]
    );



  return (
    <View style={styles.container}>
      <Button title={"2-Button Alert"} onPress={CustomAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});



export default CustomAlert;