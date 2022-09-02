import React from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Settings.style';
import Button from '../../components/Button';
import { useUser } from '../../contexts/UserContext';

const Settings = ({navigation}) => {
  const {setCurrentUser}=useUser();

  const theme=()=>{
    navigation.navigate('Theme');
  }

  const editProfile=()=>{
    navigation.navigate('Profile');
  }

  const logOut=async()=>{
    try {
      await AsyncStorage.removeItem('@userValue');
      setCurrentUser({});
    } catch (error) {
      console.log('Storage Write Error');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: 'https://picsum.photos/id/1010/150'}} style={styles.image}/>
      </View>
      <Button title='Theme' onClick={theme}/>
      <Button title='Edit profile' onClick={editProfile}/>
      <Button title='Log out' onClick={logOut}/>
    </SafeAreaView>
  );
};

export default Settings;