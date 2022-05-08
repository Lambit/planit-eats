# PlanIt Eats

### `npm start`

### `npx react-native run-ios`

### `npx react-native run-android`

# Overview

## Packages

* React-navigation/native-stack
* React-navigation/bottom-tabs
* Native-base forms/form-control
* Custom errors and state change
* Firebase Backend
* Firebase Authentication
* Firestore Database

 This application is being built with React Native, for Android, IOS and web applications. Firebases OAuthStateChange is called in the navigation page, to determine weather a user is logged in or not. If no said user, the initial page is LogInScreen, on the native stack navigation. Here currentUser can log in or register new account. If currentUser is authorized they are directed to the HomeScreen through the bottom-tab navigation. Here their data is diplayed, and they can adjust their profile as needed. As well as view PlanIt Eats menus and packages.

## LogInScreen & HomeScreen
<img src="https://user-images.githubusercontent.com/61482651/167281831-c6a91f5c-d2ad-4608-9ffc-0d437492b61b.png" width="400" height="800" margin="2px"><img src="https://user-images.githubusercontent.com/61482651/167281994-25c4658a-db36-49c4-b372-f9d5294a6b50.png" width="400" height="800">

 Within the components folder is controlled-inputs, form-buttons, confirmation-alert and several layouts. The theme's colors have still yet to be determined but a theme was created to easily pass props. The colors aren't final but the spacing, fonts, and break points are helpful. Using Native-Base, their controlled input was utilized and distributed/manipulated throughout the auth processes. The state of the form is set onTextChange, then custom form errors are called once a user has submitted the form. Within the formValidation function, Firebase functions are called to created authentication or save to cloud database. If there are errors they will be displayed so the user can make changes accordingly, if successful the currentUser state will be set and navigated to the HomeScreen on state change.
 
 A horizontal scroll bar is fixed at the top of the auth routes. This scroll bar has PlanIt Eats menus broken up into segments to get quick access to selected menu. In the data folder is menu data for each meal, which is passed through props. On selected menu screen the data is passed through the MenuLayout component and mapped to display all the menus meals. A meal can be clicked and a modal is propted with more information about the currently selected meal.
 
 Weekend goals: I want to keep installed packages to a minimum, and am trying to avoid using Redux. So use React hooks...useContext through navigation, for the applications cart. Also create an auth context where OAuthOnStateChange and helper functions can be passed easily. Lastly, seed Firestore Database with meals and utilize firebase-function to get data and display it.
