import React from 'react'
import { ImageBackground, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppInput from '../components/AppInput'

import AppScreen from '../components/AppScreen'

const LoginScreen = () => {
    return (
        <ImageBackground style={styles.LoginScreen}  source={require('../assets/login.jpg')}>
            <AppScreen style={styles.screen}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require("../assets/logo.png")} />
                    <Text style={styles.Title} >Log In</Text>
                </View>
                <View style={styles.Inputs}>
                    <AppInput placeholder = 'Email/Username' dataType = 'string' />
                    <AppInput placeholder = 'Password' dataType = 'string' secure = {true} />
                    <TouchableOpacity style={styles.forgot}>
                        <Text>Forgot Password?</Text>
                    </TouchableOpacity>
                    <AppButton title={'Log In'} />
                </View>
                
                
            </AppScreen>
        </ImageBackground>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    
    LoginScreen: {
        flex: 1,
        paddingHorizontal: 15
    },
    Inputs: {
        flex:5,
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3
    },
    forgot: {
        marginBottom: 10,
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    Title: {
        fontSize: 40,
        color: '#0d2636',
        fontStyle: 'italic',
        fontWeight: 'bold'
        
    }
})
