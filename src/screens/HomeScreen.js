import React, { useState, useEffect, useContext } from 'react';
import { Image, ImageBackground,  Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { eatsTheme } from '../theme/theme';

// Components
import HorizontalMenuBar from '../components/horizontal-menu-bar/HorizontalMenuBar';
import HorizontalAds from '../components/horizontal-ads/HorizontalAds';
import FormButton from '../components/form-button/FormButton';
import StatementLayout from '../components/statement-layout/StatementLayout';
import TwentyOneDay from '../components/twenty-one-day-layout/TwentyOneDay';

// Packages
import { HStack, Center, ScrollView, Heading, Box, Text, Divider, Flex } from 'native-base';

// Firebase
import { auth} from '../firebase-config';
import { db } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { setDoc, doc, getDoc, deleteDoc, Timestamp } from 'firebase/firestore';

/* ----HomeScreen------
  key --- HomeTab-Yo_jFpaAC9faAp24-KNmS
  Initial Auth route, once a user is logged they are routed here. The below
  functions are temporary placed here for testing. IconMenu will be its own 
  component. HStack Layout will be similar to current state. 
*/ 

const HomeScreen = ({ route }) => {
  const { letSpace, weights, breakpoints, lineHi, bR } = eatsTheme;
  console.log(route.params, 'HomeScreen ====');
  const navigation = useNavigation();
  // users from cloudDb function
  const [userDoc, setUserDoc]= useState(null);


  // Signout currentUser ---> back to Login onAuthChange.
  const onSignOut = () => {
    signOut(auth);
  }

  // setCurrentUser is just to get visual of JSON data --- testCase
  // function setCurrentUser() {
  //   const user = auth.currentUser;
  //   if (user) {
  //     const uid = user.uid;
  //     const email = user.email;
  //     console.log('User email: ', user.email);
  //     console.log('User uid: ',user.uid);
  //     console.log('User refreshToken: ',user.refreshToken);
  //     console.log('User createdAt: ',user.createdAt);
  //     console.log('User accessToken: ',user.accessToken);
  //   }
  // };
  // setCurrentUser();

  //---------Cloud Firsestore API----------
  // Create new doc Cloud Firebase
  const createCloudDoc = async () => {
    const user = auth.currentUser;
    const saveUser = doc(db, 'user', user.uid.toString())
    const userData = {
      'email': user.email.toString(),
      'createdAt': Timestamp.fromDate(new Date()),
      'accessToken': user.accessToken.toString(),
    }
    await setDoc(saveUser, userData)
    .then(() => {
      alert("Doc set kid!")
    })
    .catch((err) => {
      alert(err.message)
    })
  };

  // Read doc Cloud Firebase
  const readCloudDb = async () => {
    const newDoc = doc(db, 'user', 'user-doc')
    await getDoc(newDoc)
    .then((snapshot) => {
      if(snapshot.exists){
      setUserDoc(snapshot.data())
      } else {
        alert("Doc set kid!")
      }
    })
    .catch((err) => {
      alert(err.message)
    })
  };

  // Update doc Cloud Firebase
  const updateCloudDb = async () => {
    const currentDoc = doc(db, 'user', 'user-doc')
      // If merge === true merge with the existing doc. If false refresh
    await setDoc(currentDoc, value, {merge: merge})
    .then(() => {
      alert("Doc updated kid!")
    })
    .catch((err) => {
      alert(err.message)
    })
  };

  // Delete doc Cloud Firebase
  const deleteCloudDb = async () => {
    const currentDoc = doc(db, 'user', 'user-doc')
    await deleteDoc(currentDoc)
    .then(() => {
      alert("Doc DELETED kid!")
    })
    .catch((err) => {
      alert(err.message)
    })
  };

  //     db.collection('bulk-box')
//   .where('active', '==', true)
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach(async function (doc) {
//       console.log(doc.id, ' => ', doc.data());
//       const priceSnap = await doc.ref.collection('prices').get();
//       priceSnap.docs.forEach((doc) => {
//         console.log(doc.id, ' => ', doc.data());
//       });
//     });
//   });


// ---------------get all bulkboxes----------------
//   const getBox = async () => {
//   const querySnapshot = await getDocs(collection(db, "bulk-box"));
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//     const bulkDocs = doc.id;
//     return bulkDocs;
//   });
// };

  //---------Cloud Firsestore API End----------
 
  return (
    <>

    {/* <SafeAreaView style={{ flex: 1, alignContent:'center', backgroundColor: eatsTheme.white, }}> */}
      <Box bg={eatsTheme.white} >
      <HorizontalMenuBar />
        {/* Icon horizontal scroll - this will be a full menu easy access to meals */}
          {/*------------------------------HomeScreen-------------------------*/}
          <ScrollView>
          
          <HorizontalAds />
              {/* --------------Eat Better Image-------------------- */}
              <Center m="4">
                <Image source={require('../assets/img/eat-better.jpg')} 
                  accessibilityLabel='Eat better.'
                  style={{
                      width: '90%', 
                      height: 80,
                      resizeMode: 'contain',
                      }
                    }
                  />
                </Center>
                  
                {/*--------------Box1 currentUser info/plans/goals----------------- */}
                <HStack space={6} justifyContent="center" my='4' >
                  <Box safeArea='3' w='90%' bg="orange.400" rounded="md" shadow={5} >
                    <Center> 
                      <Heading m="2" >Welcome</Heading>
                        <Divider m="2" thickness="2" bg="#bbf7d0" w="250"/>
                          {/* currentUsers Info Name/email-------------------- */}
                          <Text m='2'>
                            {auth.currentUser.uid}
                          </Text>
                          <Text m="2">
                            {auth.currentUser.email}
                          </Text>
                            <Divider m="2" thickness="2" bg="#bbf7d0" w="250" />
                  
                            {/* 
                                If currentUsers has meal plan then display meal plan info
                                If no meal plan display Oreder Now button that links to
                                order form.
                            */}
  
                            <Heading m="2">Meal Plan</Heading>
                              <Text m="2">Meals</Text>
                              <Text m="2">Order Schedule</Text>
                              <Text m="2">Recent Orders</Text>
                                <FormButton 
                                  text='Change Plan'  
                                  bdColor='#080938'
                                  onPress={createCloudDoc}
                                />
                                  <Divider m="2" thickness="2" bg="#bbf7d0" w="250" />
                                    {/* Display if met with-----button links to meet/re-meet */}
                                    <Heading m="2">Consultation</Heading>
                                      <Text m="2">Meet with Mike or Met with Mike</Text>
                                      {
                                        userDoc != null &&
                                        <Text>{userDoc.name}</Text>
                                      }
                                      <FormButton 
                                        text='Schedule Now'  
                                        bdColor='#080938'
                                        onPress={readCloudDb}
                                      />
                                        {/* SignOut button testCase-------------------------- */}
                                        <Divider m="2" thickness="2" bg="#bbf7d0" w="250" />
                                          {/* Logout button testCase */}
                                          <FormButton 
                                            text='Sign Out' 
                                            onPress={onSignOut} 
                                            bdColor='#080938'
                                          />
                      </Center> 
                    </Box>
                  </HStack>

                  {/* -----------------Logo Image--------------------------------------- */}
                  <Center>
                    <Image source={require('../assets/img/PlanItEatsLogo-globe-mobile.png')}
                      accessibilityLabel='Globe Logo.'
                          style={{
                              width: 200, 
                              height: 200, 
                              }
                          }
                    />
                  </Center> 
                        
                  {/*-----------------HStack layout PlanIt Eats Statement------------- */}
                  <StatementLayout />
                        
                  
                  {/*-----------------HStack layout 21 Day Challenge-------------*/}  
                  <TwentyOneDay />    

                  {/*----------------testCase Stacks-----------------------------*/}
                  <HStack space={6} justifyContent="center" my='4' >
                    <Box safeArea='3' w='80' bg="orange.400" rounded="md" shadow={5}>
                    </Box>
                  </HStack>

                  <HStack space={6} justifyContent="center" my='4' >
                    <Box h="80" w="80" bg="teal.500" rounded="md" shadow={5} />
                  </HStack>

                  <HStack space={6} justifyContent="center" my='4' >
                    <Box h="80" w="80" bg="teal.500" rounded="md" shadow={5} />
                  </HStack>
          </ScrollView>
      </Box>
    {/* </SafeAreaView> */}
    </>
  );
};

export default HomeScreen;


