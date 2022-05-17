import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from '../components/TinderCard'
import users from '../../TinderAssets/assets/data/users'
import AnimatedStack from '../components/AnimatedStack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

const HomeScreen = () =>{

  const onSwipeLeft = (user) => {
    console.warn("swipe left", user.name)
  };
  const onSwipeRight = (user) =>{
    console.warn("swipe right: ", user.name)
  }
  return (
    <View style={styles.PageContainer}>
      <AnimatedStack
        data={users}
        renderItem = {({ item }) => <Card user={item} />}
        onSwipeLeft = {onSwipeLeft}
        onSwipeRight = {onSwipeRight}
      />
      <View style={styles.icons}>
        <View style={styles.button}>
        <Entypo name="cross" size={38} color="#F76C6B"/>
        </View>
        {/* <View style={styles.button}>
        <FontAwesome name="star" size={38} color="#3AB4CC" />
        </View> */}
        <View style={styles.button}>
        <FontAwesome name="heart" size={38} color="#4FCC94" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PageContainer:{
    justifyContent: 'center', 
    alignItems:'center',
    flex: 1,
    width:'100%',
    backgroundColor: '#ededed',
  },
  icons : {
    flexDirection : 'row',
    justifyContent: 'space-around',
    width: '70%',
    padding: 10,
  },
  button:{
    backgroundColor: 'white',
    borderRadius:50,
    padding:10,
    justifyContent: 'center',
    alignItems:'center',
  }
})
export default HomeScreen;