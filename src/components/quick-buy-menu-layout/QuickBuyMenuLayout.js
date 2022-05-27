import React from 'react';

//Components
import QuickAddIcon from '../quick-add-icon/QuickAddIcon';

//Package
import { Box, Text, Image, HStack, Divider, Pressable, Badge } from 'native-base';

/*-----MealLayout-----
  Meal layout is a mapped section for the List that with contain the Meals data.
*/ 

export function QuickBuyMenuLayout({id, name, description, cal, carb, protein, fat, sod, image, vitamin, onPress, pressBish }) 
    {
      return (
        <>
          <Box m='2'>
              <HStack  space="1" alignItems="center" flexDir='row'>
                <Image 
                  source={image}
                  alt={name}
                  style={{
                    height: 100,
                    width: 100,
                    borderWidth: 2,
                    borderColor: '#000',
                    borderRadius:16,
                  }}
                />
                  <Box w='50%' p='1'>
                      <Text p='2' fontSize='md' textAlign='center'>
                        {name}
                      </Text>
                          <HStack space={1} justifyContent='space-between' p='2'>
                              <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '8' }} >Calories: {cal}</Badge>
                              <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '8' }} >Carbs: {carb}</Badge>
                              <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '8' }} >Protein: {protein}</Badge>
                          </HStack>
                  </Box>
                  <Box m='1'  p='4' justifyContent='flex-end'>
                    <QuickAddIcon onPress={onPress} />
                  </Box>   
              </HStack>
          </Box>
          <Divider alignSelf='center' w='100%' mt='4' thickness='1' bg='#000'/>
     </>





        
           
      
        
      );
    }
    
