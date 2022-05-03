import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native'
// import { Appbar } from 'react-native-paper'
import { AppBar, StatusBar, Box, HStack, Icon, IconButton, Text, Center, Menu, } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function CustomAppBar({ navigation, back }) {
    // const [visible, setVisible] = React.useState(false);
    // const openMenu = () => setVisible(true);
    // const closeMenu = () => setVisible(false);
  
    // return (
    //   <Appbar.Header>
    //     {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
    //     <Appbar.Content title="My awesome app" />
    //     {!back ? (
    //       <Menu
    //         visible={visible}
    //         onDismiss={closeMenu}
    //         anchor={
    //           <Appbar.Action icon="menu" color="white" onPress={openMenu} />
    //         }>
    //         <Menu.Item onPress={() => {console.log('Option 1 was pressed')}} title="Option 1" />
    //         <Menu.Item onPress={() => {console.log('Option 2 was pressed')}} title="Option 2" />
    //         <Menu.Item onPress={() => {console.log('Option 3 was pressed')}} title="Option 3" disabled />
    //       </Menu>
    //     ) : null}
    //   </Appbar.Header>
    // );

  return  <>
      <StatusBar bg="#16a34a" barStyle="light-content" />
      <Box safeAreaTop bg="#000000" />
      <HStack bg="#000000" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
              <Image source={require('../../assets/img/PlanItEatsLogo-text-mobile.png')}
                style={{width:150, height:40, resizeMode: 'cover',}} />
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
        </HStack>
      </HStack>
    </>;
}


// const styles = styles({})
