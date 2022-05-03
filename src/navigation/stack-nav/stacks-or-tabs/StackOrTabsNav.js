import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomAppBar } from '../../app-bar/AppBar';

// Firebase
import { auth } from '../../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

// StackScreens
import LoginScreen from '../../../screens/LoginScreen';
import RegisterScreen from '../../../screens/RegisterScreen';
import SunbscribeNSaveScreen from '../../../screens/SubscibeNSaveScreen';
import ForgotPasswordScreen from '../../../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../../../screens/NewPasswordScreens';

// TabsScreens
import HomeScreen from '../../../screens/HomeScreen';
import ProfileScreen from '../../../screens/ProfileScreen';
import ChickenMenuScreen from '../../../screens/ChickenMenuScreen';
import LoadingScreen from '../../../screens/LoadingScreen';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Check user Auth----Will be moved to a context provider
export const StackOrTabsNav = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  useEffect(() => {
    onAuthStateChanged(auth ,user => {
      if(user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    }) 
  },[]);

  // Check onAuth user state
  if(isSignedIn === true) {
    return (
      /* -------TAB-ROUTES------
            Home---->Profile...
      */
      <Tab.Navigator 
        initialRouteName='HomeTab'
          screenOptions={({ route }) => ({
            header: (props) => <CustomAppBar {...props}/>,
            headerShown: true,
            headerStyle: { backgroundColor:'#000000', width: '100%', position: 'absolute', alignSelf: 'center'},
            tabBarShowLabel: true,
            tabBarStyle:  {backgroundColor:'#000000'},
            tabBarInactiveTintColor: 'white',
            tabBarActiveTintColor: '#d44444',
          })}
      >
        <Tab.Screen name='HomeTab' component={HomeScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
        <Tab.Screen name='Chicken' component={ChickenMenuScreen} />
      </Tab.Navigator>
    );
  } else {
    return (
      /* -------STACK-ROUTES------

      Login--->Home or Login--->Register,

      Register--->SubNSave or Regeister--->(back)Login

      SubNSave---->Home or SubNSave--->(back)Login

      Login--->ForgotPassword then Forgotpassword--->NewPassword or FP--->(back)Login
      */

      <Stack.Navigator  initialRouteName='Login' 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SubNSav" component={SunbscribeNSaveScreen} />
        <Stack.Screen name="ForgotPass" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPass" component={NewPasswordScreen} />
      </Stack.Navigator>
    );
  }
};


