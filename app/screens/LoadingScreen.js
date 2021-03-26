import React from 'react'
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native'

import AppScreen from '../components/AppScreen'


const LoadingScreen = () => {
    return (
        <ImageBackground
            style={styles.ImageBackground}
            source={require("../assets/loading.jpg")}>
            <AppScreen>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../assets/logo.png")} />
                    <Text style={styles.Title} >Amazon</Text>
                </View>

                <View style={styles.loadingContainer}>
                    <Image style={styles.loading} source={require("../assets/loading.gif")} />
                </View>
            </AppScreen>
        </ImageBackground>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1,
    },
    logo: {
        width: 150,
        height: 150,
    },
    logoContainer: {
        alignItems: 'center',
        flex:5
    },
    loading: {
        height:80,
        width:80
    },
    loadingContainer: {
        alignItems: 'center',
        flex:1
    },
    Title: {
        fontSize: 50,
        color: '#0d2636',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
})
