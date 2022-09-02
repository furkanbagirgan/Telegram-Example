import React,{useState} from 'react';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Profile.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useUser } from '../../contexts/UserContext';

const Profile = () => {
  const {currentUser,setCurrentUser} = useUser();
  const [firstName,setFirstName]=useState(currentUser.firstName);
  const [lastName,setLastName]=useState(currentUser.lastName);
  const [userName,setUserName]=useState(currentUser.userName);

  const save= async ()=>{
    try {
      const userValue = JSON.stringify({
        ...currentUser,
        firstName,
        lastName,
        userName,
      });
      await AsyncStorage.mergeItem('@userValue', userValue);
      setCurrentUser({
        ...currentUser,
        firstName,
        lastName,
        userName,
      });
    } catch (error) {
      console.log('Storage Write Error');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder='First Name' placeholderTextColor='#8C8C8C' value={firstName} iconName='account-details' onChangeText={setFirstName}/>
      <Input placeholder='Last Name' placeholderTextColor='#8C8C8C' value={lastName} iconName='account-details' onChangeText={setLastName}/>
      <Input placeholder='User Name' placeholderTextColor='#8C8C8C' value={userName} iconName='account-box' onChangeText={setUserName}/>
      <Button title='Save' onClick={save}/>
    </SafeAreaView>
  );
};

export default Profile;