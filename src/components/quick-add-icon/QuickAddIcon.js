import React from 'react';

import { addSvg } from '../../assets/img/svg/AddSvg';

// Packages
import { IconButton, Icon, AddIcon, } from 'native-base';
import { SvgXml } from 'react-native-svg';

// import Ionicons from 'react-native-vector-icons/Ionicons';


const QuickAddIcon = ({ onPress }) => {
  return (
    <IconButton
        icon={<AddIcon  onPress={onPress}/>} 
          borderRadius='full'  
          color='#0077e6'
          _icon={{
            color: '#004282',
            size: 30,
          }} _pressed={{
            color: '#0077e6',

          }} 
  />
  );
};

export default QuickAddIcon;



  /* 
  Call when component is rendered, maps over bulk box collection. 
     Then sets state to and object with an id presented. 
  */   
//   useEffect(() => {
//   const getBox = async () => {
//       const querySnapshot = await getDocs(collection(db, "bulk-box"));
//       querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//             setBox(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));

//       })
//   }
// setPlanState(getBox(box.id));
// }, []);

  /* 
    Render <QuickBuyMenuLayout and spread the props. Navigation function
      to CartScreen with params of data sent. onAddToCart once meal.id equals
      Bulk-Box meal quantity send user to cart.
  */ 
//   function renderMeal({ item: meal }) {
//     const seeCart = () => {
//       navigation.navigate('Cart', {
//         email: email,
//         zip: zip,
//         planId: planId,
//         mealId: meal.id,
//         mealName: meal.name,
//         planPrice: planPrice,
//         planName: planName,
//         planQty: planQty,
//       });
//     };
//     const onAddToCart = () =>  {
//       addItemToCart(meal.id);
//       if(meal.id  === planQty - 1)
//       return seeCart(); 
//     }
//     return (
//         // Meal componant instance
//         <QuickBuyMenuLayout 
//           {...meal} 
//           onPress={() => {
//               onAddToCart();
//             }}
            
         
//         />
//     );
//   }

//   /* Set meals data state to an array to be used in a flatlist */ 
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     setMeals(getMeals());
//   });
//   /* -------flatlist veiw--------------------- */ 
//   return (    
//   <>
//     <Heading fontSize="xl"  p='6' bg='#FFF'>
//       Pick Your Meals!
//     </Heading>

//     <FlatList
//       style={{backgroundColor: '#EEE'}}
//       contentContainerStyle={{backgroundColor: 'coolGrey.300', marginHorizontal: 2,}}
//       keyExtractor={(item) => item.id.toString()}
//       data={meals}
//       renderItem={renderMeal}
//       extraData={route.params}
//     />
//     <Box safeArea='1' h="290" w="100%" bg='#080938' borderTopLeftRadius='8' >
//       <HStack mx='6' justifyContent='space-between'>
//         <Heading alignContent='center' fontSize="xs" p="2" mt='3' color='#EEE'>
//           Meal Plan
//         </Heading>
//         <Heading alignContent='center'  fontSize="xs" p="2"  mt='3' color='#EEE'>
//           Cart Price
//         </Heading>
//         <Heading  fontSize="xs" p="2" mt='3' color='#EEE'>
//           Meal Count
//         </Heading>
//       </HStack>
//         <Divider w='90%' alignSelf='center' m='2' mb='4' thickness='2' />
//           <HStack
//             mx='6' 
//             justifyContent='space-between' 
//           >
//            <HStack space={10}>
//             <Heading  fontSize="md" py="4"  mb='3' color='#EEE' >
//               {planName}
//             </Heading>
    
//             <Heading  fontSize="md" p="4" pb="3" mr='10' mb='3' color='#EEE' >
//             {/* {formatCurrency(getTotalPrice())} */}
//               {planPrice}
//             </Heading>
//             <ZStack alignItems="center" justifyContent="center"  mr='3'>
        
//             <Box size='16'  borderRadius='6' bg='#0077e6' shadow={4} />
//             <Box size='12'  borderRadius='6' bg='#4aa9ff' shadow={4} />
//             <Box size='8'  borderRadius='6' bg='#addbff' shadow={8} />
//             <Heading  fontSize="md" p="4" pb="4"  color='#004282' textAlign='center'>
//               {getItemsCount()}
//             </Heading>
        
//             </ZStack>
//             </HStack>
//           </HStack>
//           <Center>
//             <VStack 
//               mt='10'
//             >
//             <ZStack alignItems="center" justifyContent="center"  mt='8'>
//             <Box w='200' h='20'  borderRadius='6' bg='#004282' />
//             <Box w='180' h='16'  borderRadius='6' bg='#0077e6' shadow={4} />
//             <Box w='160' h='12' borderRadius='6' bg='#4aa9ff' shadow={4} />
//             <Box w='140' h='8' borderRadius='6' bg='#addbff' shadow={8} />
//             <Heading fontSize="md" p="4" pb="4"  color='#004282' textAlign='center'>
//                 {planQty}
//               </Heading>
//             </ZStack>
//             </VStack>
//           </Center>
//     </Box>
//   </>
    

//   );
// };