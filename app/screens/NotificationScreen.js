import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, MaterialIcons , Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import Color from '../config/Color';
import { FlatList } from 'react-native-gesture-handler';
const NotificationScreen = ({navigation}) => {
    return (
        <View style={[styles.NotificationScreen,{flex:1}]} >
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <FlatList
                    
                />
            </View>
            <View style={[styles.navBar]} >
                <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}}>
                    <AntDesign name="home" size={28} color={Color.light} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SmsScreen')}>
                    <Feather name="message-circle" size={28} color={Color.light} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addItems} onPress={() => navigation.navigate('AddItemScreen')} >
                    <Entypo name="plus" size={35} color={Color.primary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
                    <MaterialIcons name="notifications-none" size={28} color={Color.light} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <MaterialCommunityIcons name="account-circle-outline" size={28} color={Color.light} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: Color.primary,
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
