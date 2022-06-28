import React, { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer, useNavigation, useLinkBuilder } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, initialWindowMetrics, } from 'react-native-safe-area-context';
import { eatsTheme } from '../../theme/theme';


// Firebase
import { auth } from '../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

// StackScreens
import LoginScreen from '../../screens/LoginScreen';
import RegisterZipScreen from '../../screens/RegisterZipScreen';
import SelectMealPlanScreen from '../../screens/SelectMealPlanScreen';
import AddMealsToPlanScreen from '../../screens/AddMealsToPlanScreen';
import BillingScreen from '../../screens/BillingScreen';
import CheckoutScreen from '../../screens/CheckoutScreen';
import SuccessScreen from '../../screens/SuccessScreen';
import { CartIcon } from '../../components/cart-icon/CartIcon';
import RegisterScreen from '../../screens/RegisterScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../../screens/NewPasswordScreens';

// TabsScreens
import HomeScreen from '../../screens/HomeScreen';
import LoadingScreen from '../../screens/LoadingScreen';

// Test
import { MealMenuScreen } from '../../screens/MealMenuScreen';
import { MealModalInfoScreen } from '../../screens/MealModalInfoScreen';
import { CartScreen } from '../../screens/CartScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const linking = {
  prefixes: ['planiteats.app://', 'https://planiteats.app'],
  // prefixes: ['planiteats.app://', 'https://planiteats.app.com'],
  config: {
    initialRouteName: 'login',
    screens: {
      LoginScreen: 'login',
      RegisterZipScreen: 'cancel',
      CheckoutScreen: 'checkout',
      RegisterScreen: 'success',
    }
  }
};

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
     
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer 
          theme={eatsTheme}  
        >
          <Tab.Navigator 
            // initialRouteName='HomeTab'
              screenOptions={({ route }) => ({
                headerShown: true,
                headerTitleStyle: {fontSize: 26, color:"#FFF"},
                tabBarShowLabel: true,
                tabBarStyle:  {backgroundColor:'#000000', padding: 2},
                tabBarIconStyle:  { padding: 2, marginBottom: 1 },
                tabBarLabelStyle:  {marginBottom: 4},
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: '#d44444',
              })}
          >
            <Tab.Screen name='HomeTab' component={HomeScreen} 
              options={({ navigation }) => ({
                header: () => <Image source={require('../../assets/img/PlanItEatsLogo-text-mobile.png')} 
                accessibilityLabel='Text Logo.'
                style={{ alignSelf: 'center', width: '50%', height: 80, marginTop: 40}}
                />})} 
            />
             {/* <Tab.Screen name='Checkout' component={CheckoutScreen} 
                       options={({ navigation }) => ({
                        headerRight: () => <CartIcon navigation={navigation} />,
                        })} 
             /> 
             <Tab.Screen name='Success' component={SuccessScreen} 
                       options={({ navigation }) => ({
                        headerRight: () => <CartIcon navigation={navigation} />,
                        })} 
             />  */}
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  } else {
    return (

      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer 
          theme={eatsTheme}  
          linking={linking}
          fallback={<LoadingScreen />}
        >
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
            <Stack.Screen name='Cart' component={CartScreen} 
              options={({ navigation }) => ({
              headerRight: () => <CartIcon navigation={navigation} />,
              })} 
            />
            <Stack.Screen name='Billing' component={BillingScreen} 
              options={({ navigation }) => ({
              headerRight: () => <CartIcon navigation={navigation} />
              })}
            />
            <Stack.Screen name='Checkout' component={CheckoutScreen} 
              options={({ navigation }) => ({
              headerRight: () => <CartIcon navigation={navigation} />,
              })} 
            />
            <Stack.Screen name='Success' component={SuccessScreen} options={{
              headerShown: false,
            }}
            />
            <Stack.Screen name="ForgotPass" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPass" component={NewPasswordScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
};
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 26,
  }
});


