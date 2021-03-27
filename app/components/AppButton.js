import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const AppButton = ({title, bgColor, color, onPress}) => {
    return (
        <TouchableOpacity style={[styles.btn, {backgroundColor: bgColor}]} onPress={onPress}>
            <Text style={[styles.title, {color: color}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#000000',
        borderRadius: 70,
        marginVertical: 5
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    }
})
