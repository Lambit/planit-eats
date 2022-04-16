import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import ConfirmEmailScreen from '../../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../../screens/NewPasswordScreens';


const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{
            headerShown: false,
        }
      }
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ForgotPass" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewPass" component={NewPasswordScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;

