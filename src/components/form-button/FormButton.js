import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

/* -----Form Button-----
    Buttons to be implimented and utilized throught web app, with 
    custom styles and props passed.
*/ 

const FormButton = ({ onPress, text, type , bdColor, fgColor }) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[
            styles.button, 
            styles[`button_${type}`], 
            bdColor ? {backgroundColor: bdColor} : {},
            ]
        } 
    >
        <Text 
            style={[
                styles.text, 
                styles[`text_${type}`], 
                fgColor ? {color: fgColor} : {},
                ]
            }
        >
          {text}
          {/* <Feather /> */}
        </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      padding: 18, 
      marginTop: 20,
      width: '60%', 
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOpacity: 0.2,
      shadowRadius: 2,
      shadowColor: 'black',
      shadowOffset: {
      height: 4,
      width: 4,
      },
      elevation: 6,
    },
    text: {
      color: 'white', 
      fontWeight: 'bold', 
      fontSize: 18,
    },
    button_noBUTTON: {},
  
    text_noBUTTON: {
      color: 'black',
    },
});

export default FormButton;