import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import color from '../config/Color'

const AppCard = ({Source, Title, Price, onPress }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
            <Image style={styles.Image} source={Source} />
            <View style={styles.Details}>
                <Text style={styles.Title}>{Title}</Text>
                <Text style={styles.Price}>{Price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AppCard

const styles = StyleSheet.create({
    cardContainer: {
        overflow: 'hidden',
        backgroundColor: color.primary,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,

        shadowColor: '#ff5500',
        shadowOpacity: 1,
        shadowOffset: { width: 5, height: 5},
        shadowRadius: 4,
        elevation:5
    },
    Image: {
        height: 250,
        width: '100%',
    },
    Details: {
        height: 100,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    Title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: color.light
    },
    Price: {
        fontSize: 20,
        color: color.dark,
        fontWeight: 'bold',
        paddingHorizontal: 20
    }
})
