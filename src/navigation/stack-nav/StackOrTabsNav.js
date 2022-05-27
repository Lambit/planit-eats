import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Firebase
import { auth } from '../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

// StackScreens
import LoginScreen from '../../screens/LoginScreen';
import RegisterZipScreen from '../../screens/RegisterZipScreen';
import SelectMealPlanScreen from '../../screens/SelectMealPlanScreen';
import AddMealsToPlanScreen from '../../screens/AddMealsToPlanScreen';
import CartScreen from '../../screens/CartScreen';
import PaymentScreen from '../../screens/PaymentScreen';
import { CartIcon } from '../../components/cart-icon/CartIcon';
import RegisterScreen from '../../screens/RegisterScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../../screens/NewPasswordScreens';

// TabsScreens
import HomeScreen from '../../screens/HomeScreen';
import ChickenMenuScreen from '../../screens/ChickenMenuScreen';
import LoadingScreen from '../../screens/LoadingScreen';

// Test
import { MealMenuScreen } from '../../screens/MealMenuScreen';
import { MealModalInfoScreen } from '../../screens/MealModalInfoScreen';
import { Cart } from '../../screens/Cart';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/*-----StackOrTabsNav-----
  Checks the state of the user to decide which navigation to display. If logged in
  display Tabs. Else display stack to register new user of sign in.
*/ 

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
           
            headerShown: true,
            headerStyle: { backgroundColor:'#000000', width: '100%', position: 'absolute', alignSelf: 'center'},
            tabBarShowLabel: true,
            tabBarStyle:  {backgroundColor:'#000000'},
            tabBarInactiveTintColor: 'white',
            tabBarActiveTintColor: '#d44444',
          })}
      >
        <Tab.Screen name='HomeTab' component={HomeScreen} />
        <Tab.Screen name='Chicken' component={ChickenMenuScreen} />
      </Tab.Navigator>
    );
  } else {
    return (

      
      /* -------STACK-ROUTES------

      Login--->Home or Login--->RegZip,

      RegZip--->SelectMeal or RegZip--->(back)Login

      SubNSave---->Home or SubNSave--->(back)Login

      Login--->ForgotPassword then Forgotpassword--->NewPassword or FP--->(back)Login
      */

      <Stack.Navigator  initialRouteName='Login' 
        screenOptions={{
          headerMode: 'screen',
          headerStyle: {backgroundColor: '#000',},
          headerTitleStyle: styles.headerTitle,
          
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="RegZip" component={RegisterZipScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="SelectMeal" component={SelectMealPlanScreen} 
          options={({ navigation }) => ({
          headerRight: () => <CartIcon navigation={navigation} />,
          })} 
        />
        <Stack.Screen name="AddMeal" component={AddMealsToPlanScreen} 
          options={({ navigation }) => ({
          headerRight: () => <CartIcon navigation={navigation} />,
          })} 
        />
        <Stack.Screen name="Meals" component={MealMenuScreen} 
          options={({ navigation }) => ({
          headerRight: () => <CartIcon navigation={navigation} />,
          })} 
        />
        <Stack.Screen name="MealInfo" component={MealModalInfoScreen} 
          options={({ navigation }) => ({
          headerRight: () => <CartIcon navigation={navigation} />,
          })} 
        />
        <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
          headerRight: () => <CartIcon navigation={navigation} />,
          })} 
        />
        <Stack.Screen name='Payment' component={PaymentScreen} 
          options={({ navigation }) => ({
          headerRight: () => <CartIcon navigation={navigation} />,
          })} 
        />
        <Stack.Screen name="ForgotPass" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPass" component={NewPasswordScreen} />
      </Stack.Navigator>
    );
  }
};
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 26,
  }
});


