import React from 'react';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';

//Packages
import { Box, Heading, Divider, HStack, Badge, IconButton, Icon, AddIcon } from 'native-base';

/*-----MealLayout-----
  Meal layout is a mapped section for the List that with contain the Meals data.
*/ 

export function MealLayout({ 
  id, name, cal, carb, protein, fat, sod, image, vitamin, onPress, onClick 
  }) 
    {
      return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
          <Image
            source={image}
            alt={name}
              style={{
                width: '100%',
                height: 200,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
          />
          <Box p='4'>
            <Heading 
              size="xl"
              textAlign='center' 
              fontWeight="400" 
              color= '#080930'
            >
                {name}
            </Heading> 
            
            <Divider m='2' alignSelf='center' />
            
            {/* <Text>{vitamin}</Text> */} 
            
            <HStack space={2} justifyContent='space-between' p='2'>
              <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '10' }} >Calories: {cal}</Badge>
              <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '10' }} >Carbs: {carb}</Badge>
              <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '10' }} >Protein: {protein}</Badge>
              <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '10' }} >Fat: {fat}</Badge>
              <Badge variant='solid' _text={{ textAlign: 'center', fontSize: '10' }} >Sodium: {sod}</Badge> 
            </HStack>
            
            <Divider m='2' alignSelf='center' />
            
            <HStack justifyContent='space-between' p='2'>
            {/*-----------Small Globe Logo---------------------- */} 
            <Image source={require('../../assets/img/PlanItEatsLogo-globe-mobile.png')} 
              accessibilityLabel='Globe Logo.'
              style={{
                  width: 50, 
                  height: 50,
                  // shadowOpacity: 0.3,
                  // shadowRadius: 4,
                  // shadowColor: 'black',
                  // shadowOffset: {
                  //   height: 0,
                  //   width: 2,
                //   }
                }}
              />

              {/* <IconButton
                icon={
                  <Icon as={AddIcon} size={50} onClick={onClick}/>
                } borderRadius='full' p='1' shadow='4' 
                _icon={{
                  color: '#166534',
                }} _hover={{
                  bg: "coolGray.800:alpha.20"
                }} _pressed={{
                  _icon:{
                    name:'add-circle-outline',
                  },
                  _ios: {
                    _icon:{
                      size: '2xl'
                    }
                  }
                }} _ios={{
                  _icon:{
                    size: '2xl',
                    _pressed: {
                      name:'add-circle'
                    }
                  }
                }}
              /> */}
          </HStack>
          </Box>
        </TouchableOpacity>
      );
    }
    
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // shadowColor: 'black',
    // marginVertical: 20,
  }
});