import React,{useState} from 'react';
import {SafeAreaView,View,Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CountryCodes from '../../CountryCodes.json';
import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';

const Login = () => {
  const [selectedPhoneCode, setSelectedPhoneCode] = useState('+90');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [userName,setUserName]=useState('');
  const {setCurrentUser} = useUser();
  const {theme}=useTheme();

  const login= async ()=>{
    try {
      const userValue = JSON.stringify({
        phoneNumber:selectedPhoneCode+phoneNumber,
        firstName,
        lastName,
        userName,
      });
      await AsyncStorage.setItem('@userValue', userValue);
      await AsyncStorage.setItem('@themeValue', JSON.stringify('light'));
      setCurrentUser({
        phoneNumber:selectedPhoneCode+phoneNumber,
        firstName,
        lastName,
        userName,
      });
    } catch (error) {
      console.log('Storage Write Error');
    }
  }

  return (
    <SafeAreaView style={theme==='light' ? styles.lightContainer : styles.darkContainer}>
      <Text style={styles.header}>Telegram</Text>
      <View style={styles.rowContent}>
        <View style={theme==='light' ? styles.lightPickerWrapper : styles.darkPickerWrapper}>
          <Picker
            selectedValue={selectedPhoneCode}
            style={styles.picker}
            dropdownIconColor='#8C8C8C'
            onValueChange={(itemValue, itemPosition) =>
              setSelectedPhoneCode(itemValue)
            }>
            {
              CountryCodes.map((item,index)=> <Picker.Item key={index} label={item.code+' '+item.dial_code} value={item.dial_code} />)
            }
          </Picker>
        </View>
        <View style={styles.phoneWrapper}>
          <Input placeholder='Phone Number' theme={theme} placeholderTextColor='#8C8C8C' value={phoneNumber} iconName='phone' onChangeText={setPhoneNumber} keyboardType='numeric'/>
        </View>
      </View>
      <Input placeholder='First Name' theme={theme} placeholderTextColor='#8C8C8C' value={firstName} iconName='account-details' onChangeText={setFirstName}/>
      <Input placeholder='Last Name' theme={theme} placeholderTextColor='#8C8C8C' value={lastName} iconName='account-details' onChangeText={setLastName}/>
      <Input placeholder='User Name' theme={theme} placeholderTextColor='#8C8C8C' value={userName} iconName='account-box' onChangeText={setUserName}/>
      <Button title='Giriş Yap' onClick={login}/>
    </SafeAreaView>
  );
};

export default Login;