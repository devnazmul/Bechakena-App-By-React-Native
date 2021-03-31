import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlightBase, View } from 'react-native'

const AppSms = ({Source, Name, ShortSms}) => {
    return (
        <TouchableHighlightBase style={styles.AppSms} >
            <Image style={styles.Profile} source={Source} />
            <View>
                <Text>{Name}</Text>
                <Text>{ShortSms}</Text>
            </View>
        </TouchableHighlightBase>
    )
}

export default AppSms

const styles = StyleSheet.create({
    AppSms: {
        height: 100,
        marginVertical: 10,
        
    },
    Profile: {
        height: 50,
        width: 50
    }
})
