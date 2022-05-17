import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, StyleSheet,SafeAreaView} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './src/screens/HomeScreen';
import LikesScreen from './src/screens/LikesScreen';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

const App = () =>{
  const[activeScreen,setActiveScreen] = useState('HOME');

  const color = '#b5b5b5'
  const activeColor = '#f76c6b'
  return (
    <SafeAreaView style={styles.root}>
    <View style={styles.PageContainer}>
      <View style={styles.topNavigation}>
      <Pressable onPress={() => setActiveScreen('HOME')}>
      <Fontisto name="tinder" size={30} color={activeScreen === 'HOME' ? activeColor : color}/>
      </Pressable>
      <MaterialCommunityIcons name='star-four-points' size={30} color={color}/>
      <Pressable onPress={() => setActiveScreen('LIST')}>
      <FontAwesome name="list" size={30} color={activeScreen === 'LIST' ? activeColor : color}/>
      </Pressable>
      <FontAwesome name ="user" size={30} color={color}/>
      </View>
      {activeScreen === 'HOME' && <HomeScreen/>}
      {activeScreen === 'LIST' && <LikesScreen/>}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    // backgroundColor:'#ededed'
  },
  PageContainer:{
    justifyContent: 'center', 
    alignItems:'center',
    flex:1
  },
  topNavigation :{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  }
})
export default App;