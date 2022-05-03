import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';


export default function LoadingScreen() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color={"orange.400"} />
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