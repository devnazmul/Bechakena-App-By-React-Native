import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
        backgroundColor: '#F652A0',
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10
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
        color: '#333652'
    },
    Price: {
        fontSize: 20,
        color: '#E9EAEC',
        fontWeight: 'bold',
        paddingHorizontal: 20
    }
})
