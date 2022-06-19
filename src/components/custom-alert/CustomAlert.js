import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

//Packages
import { useNavigation, useRoute } from '@react-navigation/native';


const CustomAlert = ({navigation, route}) => {
    Alert.alert(
      'Success', 'Your order is confirmed!',
      [
        {
          text: "OK",
          onPress: () => navigation.navigate('Login'),
        },
      ]
    );



  return (
    <View style={styles.container}>
      <Button title={"successAlert"} onPress={CustomAlert} />
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