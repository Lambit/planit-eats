import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, View } from 'react-native';

import ControlledInput from '../components/controlled-input/ControlledInput';
import FormButton from '../components/form-button/FormButton';

import { Text, Title } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';


export const schema = yup.object().shape({
  email: yup.string().email('Must enter valid email address.').required(),
  password: yup.string().min(10, 'Invalid Password. Forgot password? Click link to generate new passsword.').required(),
});



const LoginScreen = ({ navigation }) => {

    const { handleSubmit, control, errors} = useForm({
        resolver: yupResolver(schema)
    });
    console.log(errors);

    const onSignIn = () => {
        navigation.navigate('Home');
    };
    
    const onForgotPwd = () => {
        navigation.navigate('ForgotPass');
    };
    
    const onRegisterAcc = () => {
        navigation.navigate('Register');
    };
  return (
    // ----------------Background Image---------------------------  
    <ImageBackground source={require('../assets/img/avo-tom.png')} 
        accessibilityLabel='Tomato and herb background image.'
        resizeMode='cover'
        style={{
            width: 400, 
            height: '100%',
            overflow: 'hidden',
            justifyContent: 'center',
            }}>  
        <SafeAreaView style={logStyles.parent} >

            {/*------------Logo----------- */}
            <Title style={logStyles.title} >PlanIt Eats</Title>

                {/* ------Input Feilds------ */}
                <View style={logStyles.formInput} >
                <ControlledInput  
                    name="email" 
                    placeholder='Email' 
                    control={control}
                />
                <ControlledInput 
                    name='password'
                    placeholder='Password' 
                    secureTextEntry 
                    control={control}
                />
                </View>

                {/* -------Form Button-------- */}
                <FormButton 
                    text='Sign In' 
                    onPress={handleSubmit(onSignIn)} 
                    style={logStyles.formBtn}
                    bdColor='darkseagreen' 
                />

                {/* ------Forgot Password Button------ */}
                <FormButton 
                    text='Forgot Password' 
                    onPress={onForgotPwd} 
                    type='noBUTTON'
                    style={logStyles.formBtn} 
                />

                {/* --------Register Account--------- */}
                <Text style={logStyles.formSmText} > 
                    Don't have an account?
                </Text>

                <View style={logStyles.createAccountView}>
                    <Text 
                        style={logStyles.formSmTextLink}  
                        onPress={onRegisterAcc} 
                    > 
                        Create account here!
                    </Text>
                </View>
        </SafeAreaView>
    </ImageBackground>
    );
};

export const logStyles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
        borderColor: '#383bd6',
        borderWidth: 2,
    },
    title: {
        color: '#821111',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 50,
        padding: 10,
    },
    formInput: {
        width: '90%',
        marginTop: '16%',
        padding: 20,
    },
    formSmText: { 
        fontSize: 16,
        color: 'black',
        marginTop: 20, 
        borderColor: '#383bd6',
        borderWidth: 2,
        borderRadius: 8,
    },
    formSmTextLink: {
        color: '#dda0dd',
        fontSize: 24,
        fontWeight: 'bold',
        borderColor: '#dda0dd',
        borderWidth: 8,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fdf5e6',
        opacity: 1,
    },
    createAccountView: {
        flex: 1,
        justifyContent: 'flex-end',
        bottom: 0,
        margin: 10,
    }
});

export default LoginScreen;
