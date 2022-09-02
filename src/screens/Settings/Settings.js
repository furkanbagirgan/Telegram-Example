import React from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Settings.style';
import Button from '../../components/Button';
import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';

const Settings = ({navigation}) => {
  const {setCurrentUser}=useUser();
  const {theme}=useTheme();

  const goTheme=()=>{
    navigation.navigate('Theme');
  }

  const goEditProfile=()=>{
    navigation.navigate('Profile');
  }

  const logOut=async()=>{
    try {
      await AsyncStorage.removeItem('@userValue');
      await AsyncStorage.removeItem('@themeValue');
      setCurrentUser({});
    } catch (error) {
      console.log('Storage Write Error');
    }
  }

  return (
    <SafeAreaView style={theme==='light' ? styles.lightContainer : styles.darkContainer}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: 'https://picsum.photos/id/1010/150'}} style={styles.image}/>
      </View>
      <Button title='Theme' onClick={goTheme}/>
      <Button title='Edit profile' onClick={goEditProfile}/>
      <Button title='Log out' onClick={logOut}/>
    </SafeAreaView>
  );
};

export default Settings;