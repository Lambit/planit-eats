import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { Controller } from 'react-hook-form';


const ControlledInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
  return (
    <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <>
                <View 
                    style={[
                    styles.container, 
                    {borderColor: error ? 'red' : '#383bd6'},
                    ]}
                >
                    <TextInput 
                        mode='flat'
                        selectionColor='darkgreen'
                        activeUnderlineColor='darkseagreen'
                        value={value} 
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry} 
                        style={styles.input} 
                    />
                </View>   
                {error && (
                    <Text 
                        style={{
                            color: 'red', 
                            textAlign: 'center'
                        }}
                    > 
                        {error.message || 'Error'}
                    </Text>
                    )
                }
            </>
        )} 
    />
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        marginVertical: 10,
    },
    input: {}
})

export default ControlledInput;