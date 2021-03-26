import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const AppButton = ({title, color, onPress}) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        backgroundColor: '#000000',
        borderRadius: 70,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    }
})
