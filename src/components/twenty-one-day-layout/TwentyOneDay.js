import React from 'react';

// Components
import FormButton from '../form-button/FormButton';

// Packages
import { 
    HStack, 
    Center, 
    Heading, 
    Box, 
    Text, 
    Divider }
from 'native-base';

/*-----TwentyOneDay-----
  PlanIt Eats mission 21 day challenge styled with native-base being displayed on home page.
  This is the base to all of their meal packages.
*/ 

const TwentyOneDay = () => {
  return (
    <HStack space={6} justifyContent="center" my='4' >
      <Box safeArea='3'  w="80" bg="#4ade80" rounded="md" shadow={5} >
        <Center>
          <Heading m="2" >
            21 Day Challenge
          </Heading>
            <Divider m="2" thickness="2" bg="#bbf7d0" w="250"/>
              <Text m='2' >
                {" "} {" "} We have put together the missing components why most diets fail and 
                people end up regaining the weight. Our system combines the THREE components 
                necessary for success!
              </Text>
                <Heading m="2" textAlign='center' >KNOWLEDGE</Heading>
                  <Heading m="2" textAlign='center' >SUPPORT</Heading>
                    <Heading m="2" textAlign='center' >FOOD</Heading>
                      <Text m='2' >
                        {" "} {" "} You must have these three keys to sustainable lifetime success! You can 
                        achieve your wellness goals. Whether it is weightloss, muscle building or other health 
                        issues. Over the 21 days you will learn how to eat. That means everything from portion 
                        size and control, when to eat, and the most important aspect the WHY! You must eliminate 
                        the inflammatories and then give your body the right nutrients for success. We make all 
                        this simple in an easy to follow eating schedule when all that is required of you is to 
                        eat what we give you and follow the easy to follow guide.
                      </Text>
                        <Divider m="2" thickness="2" bg="#bbf7d0" w="250"/>
                          <Heading mx="2" my=".5" textAlign='center' >Proven 21 Challenge experiences:</Heading>
                            <Heading mx="2" my=".5" textAlign='center' size="sm">Weight Loss or Mean Muscle Gain</Heading>
                              <Heading mx="2" my=".5" textAlign='center' size="sm">Increased Energy</Heading>
                                <Heading mx="2" my=".5" textAlign='center' size="sm">Improved Sleep Quality</Heading>
                                  <Heading mx="2" my=".5" textAlign='center' size="sm">Less Craving</Heading>
                                    <Heading mx="2" my=".5" textAlign='center' size="sm">Improved Mental Cognition</Heading>
                                      <Divider m="4" thickness="2" bg="#bbf7d0" w="250"/>
                                        <Heading m="2" textAlign='center' >Change Your Life Today!</Heading>
                                          <FormButton 
                                            text='Sign Up' 
                                            bdColor='#080938'
                                          />
        </Center>
      </Box>
  </HStack>
  );
};

export default TwentyOneDay;