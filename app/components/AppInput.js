import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const AppInput = ({placeholder, dataType, secure, flexGrow}) => {
    return (
        
        <TextInput
            style={[styles.input, {flexGrow: flexGrow,}]}
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
        marginHorizontal: 5,
        height: 50,
        marginVertical: 15,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 50,
        fontSize: 17,
        flexGrow: 0,
    }
})
