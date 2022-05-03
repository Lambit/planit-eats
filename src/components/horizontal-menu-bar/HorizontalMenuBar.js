import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Packages
import Feather from "react-native-vector-icons/Feather";
import { HStack, Center, ScrollView, Badge, Button } from 'native-base';

const HorizontalMenuBar = ({route}) => {
  const navigation = useNavigation();
  
  const toChicken = () => {
    navigation.navigate('Chicken');
  }

  return (
    <HStack>
        {/* Icon horizontal scroll ---- this will be a full menu easy access to meals */}
        <ScrollView horizontal={true}  py='5' flex='1'>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2" >Full Menu</Button>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2" onPress={toChicken}>Chicken</Button>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2">Beef</Button>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2">Seafood</Button>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2">Turkey</Button>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2">Breakfast</Button>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2">Snacks</Button>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2">Desserts</Button>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2">Soup</Button>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2">Vegan</Button>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2">Keto</Button>
          
            <Button variant="outline" mx="2" p="2" borderRadius="20" borderWidth="2">Smoothies</Button>


          {/* <Center h="20" w="20" rounded="md" shadow={3}>
            <Feather name='eye' size={30} style={{marginLeft: 20, marginRight: 20,}}/>
          </Center>
          <Center h="20" w="20" rounded="md" shadow={3}>
            <Feather name='eye' size={30} style={{marginLeft: 20, marginRight: 20,}}/>
          </Center>
          <Center h="20" w="20" rounded="md" shadow={3}>
            <Feather name='eye' size={30} style={{marginLeft: 20, marginRight: 20,}}/>
          </Center>
          <Center h="20" w="20" rounded="md" shadow={3}>
            <Feather name='eye' size={30} style={{marginLeft: 20, marginRight: 20,}}/>
          </Center>
          <Center h="20" w="20" rounded="md" shadow={3}>
            <Feather name='eye' size={30} style={{marginLeft: 20, marginRight: 20,}}/>
          </Center>
          <Center h="20" w="20" rounded="md" shadow={3}>
            <Feather name='eye' size={30} style={{marginLeft: 20, marginRight: 20,}}/>
          </Center>
          <Center h="20" w="20" rounded="md" shadow={3}>
            <Feather name='eye' size={30} style={{marginLeft: 20, marginRight: 20,}}/>
          </Center> */}
        </ScrollView>
    </HStack>
  );
};

export default HorizontalMenuBar;