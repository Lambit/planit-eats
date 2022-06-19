import React, { useState } from 'react';

//Components
import QuickAddIcon from '../quick-add-icon/QuickAddIcon';
import { chickenSvg } from '../../assets/img/svg/ChickenIcon';
import { heartRateSvg } from '../../assets/img/svg/HeartRateSvg';
import { herbSvg } from '../../assets/img/svg/HerbSvg';


//Package
import { Box, Text, Image, HStack, Divider, Pressable, Badge, Modal, ScrollView, Button, Heading, VStack, Center, ZStack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

/*-----QuickBuyMenuLayout-----
  QuickBuyMenuLayout is a mapped section for the List that with contain the Meals data.
*/ 

export function QuickBuyMenuLayout({id, name, images, metadata, description, cal, carb, protein, fat, sod, image, vitamin, gf, anti, hor, nat, price, onPress, }) 
    {
      const [showModal, setShowModal] = useState(false);
      return (
        <>
  
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} justifyContent="center" size="lg" mt='20'>

              <Modal.CloseButton ml='6' p='10' color='#FFF'/>


                <Box h='200' w='80%'>
                  <Image
                   source={images}
                   alt={name}
                   alignSelf='center'
                   h='220'
                   w='260'
                  />
                </Box>
                  <Modal.Body>
                    <ScrollView>
                    <Box
                      bg='coolGray.300'  
                      borderRadius="8"
                    >
                      <Modal.Header p='2' bg='#FFF' >   
                        <Box space={2} 
                          justifyContent="center" alignContent="space-between" 
                          p='2' 
                          bg='#EEE' 
                          borderRadius='4'
                          shadow={8}
                        >
                          <HStack space={2}  
                            justifyContent="center" alignContent="space-between" 
                            p='4'  
                            bg='#FFFFFF'
                            borderRadius="4"
                            shadow={6}
                          >
                          
                          <VStack space={6} justifyContent='flex-start' p='.5'>
                            <Box 
                              h='10'
                              w='100%'
                              p='2'
                              alignItems='center'
                              justifyContent="center"
                              bg='#FFF'
                              shadow={6}
                              borderRadius="4"
                            >
                              <Text fontSize='2xs' >{metadata.gf}</Text>
                            </Box>
                            <Box 
                              h='10'
                              w='100%'
                              p='2'
                              alignItems='center'
                              justifyContent="center"
                              bg='#FFF'
                              shadow={6}
                              borderRadius="4"
                            >
                              <Text fontSize='2xs' >{metadata.anti}</Text>
                            </Box>
                          </VStack>
                          
                          <Center p='1' shadow={8} zIndex='1' ><SvgXml xml={chickenSvg} width='50' height='50' /></Center>
          
                          <VStack space={6}  p='.5' >
                            <Box 
                              h='10'
                              w='100%'
                              p='2'
                              alignItems='center'
                              justifyContent="center"
                              bg='#FFF'
                              shadow={6}
                              borderRadius="4"
                            >
                              <Text fontSize='2xs'> {metadata.nat}</Text>
                            </Box>
                            <Box 
                              h='10'
                              w='100%'
                              p='2'
                              alignItems='center'
                              justifyContent="center"
                              bg='#FFF'
                              shadow={6}
                              borderRadius="4"
                            >
                              <Text fontSize='2xs' > {metadata.hor}</Text>
                            </Box>
                          </VStack>
                        </HStack>
                        </Box>
                      </Modal.Header>  
                      
                     
                      <Box 
                        justifyContent="flex-end" alignItems="flex-start" 
                        bg='coolGray.300' 
                      >
                        <VStack space={6} p="4" justifyContent='flex-start' >
                          <HStack width='100%'  
                            justifyContent="space-between" alignContent="center">
                              <Box justifyContent="center" alignSelf='flex-start' >
                                <Heading textAlign='center'  size="sm" fontWeight="400" >
                                  {name}
                                </Heading>
                            <Text mt='2'>${metadata.price}</Text>
                            </Box>
                            <Box justifyContent='center' borderWidth='2'>
                            <QuickAddIcon onPress={onPress}  />
                            </Box>
                          </HStack>
                        </VStack>
                      </Box>
                        
                          <Divider alignSelf='center' w='100%' thickness='1' bg='coolGray.400' mb='2'/>

                        <VStack justifyContent='center' bg='coolGray.300'>
                        <Box justifyContent="center"  mt='4'>
                                <Heading textAlign='center'  size="sm" fontWeight="400" >
                                  {name}
                                </Heading>
                                <Box p='4'><Text textAlign='center'>{description}</Text></Box>
                            </Box>
                        <HStack justifyContent='space-evenly' p='4'>
                        <SvgXml xml={heartRateSvg} width='80' height='80' alignSelf='center'   />

                        <SvgXml xml={herbSvg} width='80' height='80' alignSelf='center'   />
                        </HStack>
                        
                        <HStack justifyContent='space-between' p='4'>
                          <Box bg='#004282' p='4' borderRadius='4'shadow={6}><Text fontSize='2xs' fontWeight='extrabold' color='orange.400'>Cal:{' '}{' '}{metadata.cal}</Text></Box>
                          <Box  bg='#004282' p='4' borderRadius='4'shadow={6} ><Text fontSize='2xs' fontWeight='extrabold' color='orange.400'>Carbs:{' '}{' '}{metadata.carb}</Text></Box>
                          <Box  bg='#004282' p='4' borderRadius='4'shadow={6} ><Text fontSize='2xs' fontWeight='extrabold' color='orange.400'>Protein:{''}{' '}{metadata.protein}</Text></Box>
                        </HStack>
                        <HStack justifyContent='space-between' p='4'>
                          <Box  bg='#004282' p='4' borderRadius='4'shadow={6} ><Text fontSize='2xs' fontWeight='extrabold' color='orange.400'>Fat:{' '}{' '}{metadata.fat}</Text></Box>
                          <Box  bg='#004282' p='4' borderRadius='4'shadow={6} ><Text fontSize='2xs' fontWeight='extrabold' color='orange.400'>Sodium:{' '}{metadata.sod}</Text></Box>
                          <Box  bg='#004282' p='4' borderRadius='4'shadow={6} ><Text fontSize='2xs' fontWeight='extrabold' color='orange.400'>{metadata.gf}</Text></Box>
                        </HStack>
                        {/*-----------Small Globe Logo---------------------- */} 
                        <Image source={require('../../assets/img/PlanItEatsLogo-globe-mobile.png')} 
                          accessibilityLabel='Globe Logo.'
                          alt='Logo'
                          h='50'
                          w='50'
                          shadow='6'
                          alignSelf='center'
                          margin='4'
                        />
                        


                        </VStack>
                        
                        
                          

             
                         
                   
                        
                    </Box>
                    </ScrollView>
                    </Modal.Body>   
          
              </Modal> 
           
         

            <Divider alignSelf='center' w='100%' thickness='1' bg='#004282'/>

        
                <Box safeArea='1'  w='100%'>
                  <HStack 
                    space="1" 
                    alignItems="center" 
                    justifyContent='space-between'
                  >
                    <Pressable  shadow={9}  ml='2' onPress={() => setShowModal(true)}>
                      <Image 
                        // source={image}
                        source={images}
                        alt={name}
                        style={{
                          height: 100,
                          width: 100,
                          borderWidth: .5,
                          borderColor: '#000',
                          borderRadius: 8,
                          zIndex: 1,
                        }}
                      />
                    </Pressable>
                    
                      <Box w='55%' p='1' >
                        <Text fontWeight='semibold' fontSize='xs'>
                          {name}
                        </Text>
                        <Text p='1' fontSize='10' >{metadata.gf}</Text>
                         <Text p='1' fontSize='10' >{metadata.hor}</Text>
                        <Text p='1' fontSize='10' >{metadata.nat}</Text>
                          {/* <HStack space={1} justifyContent='space-between' p='2'>
                            <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '8' }} >Calories: {cal}</Badge>
                            <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '8' }} >Carbs: {carb}</Badge>
                            <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '8' }} >Protein: {protein}</Badge>
                          </HStack> */}
                      </Box>
                       
                          <VStack space={4} p='2' alignItems='flex-end'>
                          <SvgXml xml={chickenSvg} width='30' height='30' alignSelf='center'   />
                          <Button onPress={onPress} >+</Button>
                          {/* <QuickAddIcon onPress={onPress} alignSelf='center' /> */}
                          </VStack>
           
                  </HStack>   
        
                </Box>
     
     </>
        
  );
}
    
