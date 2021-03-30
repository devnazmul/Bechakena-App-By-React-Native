import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'


const AppScreen = ({ children }) => {
    return (
        <SafeAreaView style = {styles.screen} >
            {children}
        </SafeAreaView>
    )
}

export default AppScreen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})
