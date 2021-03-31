import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native'

const AppCategory = ({Source, Title, onPress}) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
            <ImageBackground style={styles.Image} source={Source} resizeMode='cover' >
                <View style={styles.Details}>
                    <Text style={styles.Title}>{Title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default AppCategory

const styles = StyleSheet.create({
    cardContainer: {
        overflow: 'hidden',
        backgroundColor: '#F652A0',
        marginHorizontal: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: 200,
        height: 50,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 1, height: 1},
        shadowRadius: 5,
        elevation: 5
    },
    Image: {
        width: '100%',
    },
    Details: {
        height: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    Title: {
        fontSize: 21,
        
        color: '#fff'
    },
    TotalItems: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        paddingHorizontal: 20
    }
})
