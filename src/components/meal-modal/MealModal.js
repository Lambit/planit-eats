import React, {useState} from 'react';
import { Image, TouchableOpacity } from 'react-native';

// Components
import { ChickenMealsData } from '../../data/ChickenMealsData';

//Packages
import {  Box, ScaleFade, ScrollView, Button, VStack, Text, Modal } from 'native-base';
import { checkAuthToken } from 'firebase-functions/lib/common/providers/https';

const MealModal = (props, {isOpen, onClose }) => {
    const { food } = props;
    
    
  return (
    <Modal isOpen={isOpen} onClose={onClose} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg">
        <Modal.Content>
            <Modal.CloseButton />
                <Modal.Header> {food.name} </Modal.Header>
                    <Modal.Body>
                      <Image 
                        source={food.image}
                        alt={food.name}
                      />
                      <Box>
                            <Text>
                                {food.name}
                            </Text>
                            <Text>
                                ${food.price}
                            </Text>
                            <Text>
                                {food.description}
                            </Text>
                      </Box>
                    </Modal.Body>
                    <Modal.Footer>
                        Proceed
                    </Modal.Footer>
        </Modal.Content>
    </Modal>
  );
};

export default MealModal;


// import React, { useEffect, useContext } from 'react';
// import { getMeals, getChicken } from '../../data/ChickenMealsData';
// import { Box, Heading, Text, Image, HStack, Center, Divider, IconButton, Icon, Pressable } from 'native-base';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { CartContext } from '../../../navigation/context/CartContext';

/*-----MealLayout-----
  Meal layout is a mapped section for the List that with contain the Meals data.
*/ 

// export function QuickBuyMenuLayout({id, name, description, cal, carb, protein, fat, sod, image, vitamin, onPress, pressBish }) 
//     {
//       return (
     
//             <Box
//                 w='100%'
//                 alignItems='center'
//                 justifyContent="center"
//                 flexDirection="column"
//                 shadow='7' 
//             >
//                 <Pressable 
//                      position="relative"
//                      pt='20'
//                     onPress={onPress}
//                 >
//                  <Image
//                    source={image}
//                    alt={name}
//                    h='40'
//                    resizeMode='contain'
//                   />
//                 </Pressable>

//                     <Box 
//                         position="absolute"
//                         w='40%'
//                         zIndex='2'
//                          >
//                         <Heading 
//                             bg= '#FFF'
//                             p='4'
//                             size="xs"
//                             textAlign='center' 
//                             fontWeight="400" 
//                             color= '#080930'
//                             borderWidth='1'
//                             borderColor="coolGrey.100"

//                         >
//                             {name}
//                         </Heading> 
//                     </Box>  
//                         <Box      
//                             position="relative"  
//                             pt='8'
//                             px='4'
//                             pb='5'
//                             w='80%'
//                             color= '#080930'
//                             bg= '#FFF'
//                         >
//                         <Text 
//                             textAlign='center'
//                             mt='4' 
//                         >
//                             {description}
//                         </Text>
//                         </Box> 

//                         <HStack 
//                             justifyContent='space-between'
//                             p='2'
//                             w='80%'
//                             bg= '#FFF'
//                             color= '#080930'
//                         >
//                         {/*-----------Small Globe Logo---------------------- */} 
//                             <Image source={require('../../assets/img/PlanItEatsLogo-globe-mobile.png')} 
//                                 accessibilityLabel='Globe Logo.'
//                                 alt='Logo'
//                                 h='50'
//                                 w='50'
//                                 shadow='6'
//                             />

//                                <IconButton
//                                  icon={
//                                    <Icon as={Ionicons} name="add-circle" size={50} onPress={pressBish}/>
//                                  } borderRadius='full' p='1' shadow='4' 
//                                  _icon={{
//                                    color: '#166534',
//                                  }} _hover={{
//                                    bg: "coolGray.800:alpha.20"
//                                  }} _pressed={{
//                                    _icon:{
//                                      name:'add-circle-outline',
//                                    },
//                                    _ios: {
//                                      _icon:{
//                                        size: '2xl'
//                                      }
//                                    }
//                                  }} _ios={{
//                                    _icon:{
//                                      size: '2xl',
//                                      _pressed: {
//                                        name:'add-circle'
//                                      }
//                                    }
//                                  }}
//                                />
//                             </HStack>
//             </Box>
           
      
        
//       );
//     }
    