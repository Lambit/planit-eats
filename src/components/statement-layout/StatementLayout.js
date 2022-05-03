import React from 'react';
import { 
    HStack, 
    Center, 
    Heading, 
    Box, 
    Text, 
    Divider }
from 'native-base';

const StatementLayout = () => {
  return (
    <HStack space={6} justifyContent="center" my='4' >
      <Box safeArea='3'  w="80" bg="#4ade80" rounded="md" shadow={5} >
        <Center>
          <Heading m="2" >
            Our Mission
          </Heading>
            <Divider m="2" thickness="2" bg="#bbf7d0" w="250"/>
              <Text m='2' >
                {" "} {" "} Our goal is to provide nutrient rich, fully prepared food with the 
                belief that if you eat better you live better. In today's modern world 
                proper nutritional choices are scarce and your time is limited. Created 
                for you, by you, to help you live your best life.
              </Text>
              <Text m='2' >
                {" "} {" "} Our journey began in 2002 as the Healthy Grille in North Dartmouth, MA. 
                We have been on a mission to educate the public through our food about the effects of 
                good nutrition on the body. Nutrient rich foods can be delicious and make a positive 
                change in your life. Gut health is now known to affect your blood pressure, cholesterol, 
                energy level, aging, cognitive function and more.
              </Text>
              <Heading m="2" textAlign='center' >WE VIEW FOOD AS MEDICINE</Heading>
              <Text m='2' >
                {" "} {" "} It is our commitment to continue our research to find ingredients and foods 
                that are beneficial to your health. We at Planit Eats will continue to evolve and adapt 
                our menu creations as new information becomes available. The more knowledge you and your 
                family have the more powerful you become.
              </Text>
              <Text m='2' >
                {" "} {" "} All our foods are <Text fontWeight='bold'>GLUTEN FREE, SUGAR FREE</Text> and{" "} 
                <Text fontWeight='bold'>DAIRY FREE.</Text> Let us take on the burden of shopping, cooking 
                and cleaning. 
              </Text>
              <Text m='2' >
                {" "} {" "} We deliver to homes and businesses all throughout New England! If you are near 
                one of our Grab-N-Go locations, we are open 7 days a week, with delicious, nutritious food 
                for you to stop in and Grab-N-Go!
              </Text>
        </Center>
      </Box>
  </HStack>
  );
};

export default StatementLayout;