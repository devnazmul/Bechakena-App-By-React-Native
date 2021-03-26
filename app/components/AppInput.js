import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const AppInput = ({placeholder, dataType, secure}) => {
    return (
        
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            keyboardType={dataType}
            secureTextEntry = {secure}
        />
        
    )
}

export default AppInput

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 15,
        height: 50,
        marginVertical: 15,
        backgroundColor: '#c3c9cd',
        borderRadius: 50,
        fontSize: 15,
        
    }
})
