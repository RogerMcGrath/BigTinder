import React from 'react'
import {View,Text,StyleSheet, SafeAreaView,Image} from 'react-native'
import users from '../../TinderAssets/assets/data/users'

const LikesScreen = () => {
    return(
        <SafeAreaView style = {styles.root}>
            <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 24, color:'#F63a6e'}}>Your Likes</Text>
            <View style={styles.users}>
            {users.map(user => (
                <View style={styles.user}>
                    <Image source={{uri: user.image}} style={styles.image}/>
                </View>
            ))}
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flex: 1,
        padding: 10,
    },
    container: {
        padding: 10,
    },
    users:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    user:{
        width: 100,
        height:100,
        margin:10,
        borderRadius: 50,
        borderWidth: 2,
        padding : 2,
        borderColor: '#F63a6e'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius : 50,
    }
})

export default LikesScreen