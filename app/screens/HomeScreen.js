import React, { useRef } from 'react'
import { ColorPropType, FlatList, StyleSheet, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import AppCard from '../components/AppCard'
import { Ionicons, EvilIcons, AntDesign, MaterialIcons, Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import AppCategory from '../components/AppCategory';
import color from '../config/Color'
import Color from '../config/Color';

var products = [
    {
        id: 1,
        Image: require('../assets/products/t-shirt.jpg'),
        Title: 'T-Shirt',
        Price: 52.99
    },
    {
        id: 2,
        Image: require('../assets/products/red-shoe.jpg'),
        Title: 'Red Shoe',
        Price: 85.33
    },
    {
        id: 3,
        Image: require('../assets/products/leather-jacket.jpg'),
        Title: 'Lether Jacket',
        Price: 64.8
    },
    {
        id: 4,
        Image: require('../assets/products/huddy.jpg'),
        Title: 'Huddy',
        Price: 53.6
    },
    {
        id: 5,
        Image: require('../assets/products/jens.jpg'),
        Title: 'jense Pant',
        Price: 252
    },
    {
        id: 6,
        Image: require('../assets/products/shirt.jpg'),
        Title: 'Shirt',
        Price: 176
    },
    {
        id: 7,
        Image: require('../assets/products/t-shirt.jpg'),
        Title: 'T-Shirt',
        Price: 52.99
    },
    {
        id: 8,
        Image: require('../assets/products/red-shoe.jpg'),
        Title: 'Red Shoe',
        Price: 85.33
    },
    {
        id: 9,
        Image: require('../assets/products/leather-jacket.jpg'),
        Title: 'Lether Jacket',
        Price: 64.8
    },
    {
        id: 10,
        Image: require('../assets/products/huddy.jpg'),
        Title: 'Huddy',
        Price: 53.6
    },
    {
        id: 11,
        Image: require('../assets/products/jens.jpg'),
        Title: 'jense Pant',
        Price: 252
    },
    {
        id: 12,
        Image: require('../assets/products/shirt.jpg'),
        Title: 'Shirt',
        Price: 176
    },
]
var categorys = [
    {
        id: 1,
        Image: require('../assets/Catregory/electronics.jpg'),
        Title: 'Electronics',
    },
    {
        id: 2,
        Image: require('../assets/Catregory/Mobiles.jpg'),
        Title: 'Mobiles',
    },
    {
        id: 3,
        Image: require('../assets/Catregory/Home.jpg'),
        Title: 'Home & Living',
    },
    {
        id: 4,
        Image: require('../assets/Catregory/Vehicles.jpg'),
        Title: 'Vehicles',
    },
    {
        id: 5,
        Image: require('../assets/Catregory/Property.jpg'),
        Title: 'Property',
    },
    {
        id: 6,
        Image: require('../assets/Catregory/Fashion.jpg'),
        Title: 'Fashion',
    },
    {
        id: 7,
        Image: require('../assets/Catregory/Essentials.jpg'),
        Title: 'Essentials',
    },
    {
        id: 8,
        Image: require('../assets/Catregory/Pets.jpeg'),
        Title: 'Pets & Animals',
    },
    {
        id: 9,
        Image: require('../assets/Catregory/Education.jpg'),
        Title: 'Education',
    },
    {
        id: 10,
        Image: require('../assets/Catregory/Jobs.jpg'),
        Title: 'Jobs',
    },
]
const HomeScreen = () => {

    const animation = useRef()


    return (
        <View style={styles.HomeScreen}>
            <View style={styles.topBar} >
                <TouchableOpacity>
                    <Ionicons name="ios-search-outline" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <EvilIcons name="cart" size={35} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.lst}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    style={styles.categorys}
                    horizontal={true}
                    data={categorys}
                    keyExtractor={category => category.id.toString()}
                    renderItem={({ item }) => <AppCategory Source={item.Image} Title={item.Title} />}
                />
                <FlatList
                    
                    showsVerticalScrollIndicator={false}
                    data={products}
                    keyExtractor={product => product.id.toString()}
                    renderItem={({ item }) => <AppCard Source={item.Image} Title={item.Title} Price={'$ '+item.Price}/>}
                />
            </View>
            <View style={styles.navBar} >
                <TouchableOpacity>
                    <AntDesign name="home" size={28} color={Color.light} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="category" size={28} color={Color.light} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addItems} >
                    <Entypo name="plus" size={35} color={color.primary} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="message-circle" size={28} color={Color.light} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="face-profile" size={28} color={Color.light} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    HomeScreen: {
        flex: 1,
        backgroundColor: color.light,
    },
    lst: {
        flex: 1
    },
    categorys: {
        marginBottom:10
    },
    topBar: {
        backgroundColor: color.primary,
        height: 70,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 10
    },
    navBar: {
        backgroundColor: color.primary,
        height: 50,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical:13,
    },
    addItems: {
        height: 60,
        width: 60,
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 5},
        shadowRadius: 5,
        elevation: 10
    }
})
