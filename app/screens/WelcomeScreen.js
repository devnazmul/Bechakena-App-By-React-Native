import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import AppScreen from '../components/AppScreen'
import AppInput from '../components/AppInput'
import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
    return (
        
        <ImageBackground blurRadius={1} style={styles.WelcomeScreen} source={require('../assets/welcome.jpg')}>
            <AppScreen>
                <View style={styles.container}>
                    <Text style={styles.Title} >Sign Up</Text>
                </View>

                <View style={styles.Inputs}>
                    <View style={styles.rowInputs}>
                        <AppInput flexGrow = {1} placeholder='First Name' dataType='string' />
                        <AppInput flexGrow = {1} placeholder = 'Last Name' dataType = 'string' />
                    </View>
                    <AppInput placeholder='Email' dataType='string' />
                    <AppInput placeholder = 'Username' dataType = 'string' />
                    <AppInput placeholder='Password' dataType='string' secure={true} />
                    <AppInput placeholder='Confirm password' dataType='string' secure={true} />

                    <AppButton color='#fff' bgColor='#000' title={'Sign Up'} />
                    
                    <View style={styles.goToLogIn}>
                        <Text style={styles.haveAccText}>Already have an account?</Text>
                        <AppButton color='#000' bgColor='#fff' title={'Log In'} />
                    </View>
                </View>

            </AppScreen>
        </ImageBackground>
        
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    WelcomeScreen: {
        flex: 1,
        paddingHorizontal: 15,
    },
    rowInputs: {
        flexDirection: 'row',
    },
    btn: {
        marginTop: 10
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 10,
    },
    goToLogIn: {
        marginTop: 20
    },
    haveAccText: {
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 10,
        color: '#fff'
    },
    logo: {
        width: 100,
        height: 100,
    },
    Title: {
        fontSize: 40,
        color: '#0d2636',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 20,
    },
    Inputs: {
        flex: 200,
        paddingVertical: 30,
    },
})
