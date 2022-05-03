import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';

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
      marginTop: 40,
      width: '60%', 
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5
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