import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';


export default function LoadingScreen() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator 
        size='large' 
        color={"#000"} 
        barStyle = 'dark-content'  
        style={{
         backgroundColor: 'coolGray.300', 
         padding: 30, 
         opacity: .7,
         borderWidth: 2,
         borderColor: '#bbf7d0',
         borderRadius: 8,
         }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
      
    }
  });