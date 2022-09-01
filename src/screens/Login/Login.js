import React,{useState} from 'react';
import {SafeAreaView,View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from './Login.style';
import Input from '../../components/Input'
import CountryCodes from '../../CountryCodes.json';

const Login = () => {
  const [selectedPhoneCode, setSelectedPhoneCode] = useState('+90');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [userName,setUserName]=useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContent}>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedPhoneCode}
            style={styles.picker}
            dropdownIconColor='#8C8C8C'
            mode='dropdown'
            onValueChange={(itemValue, itemPosition) =>
              setSelectedPhoneCode(itemValue)
            }>
            {
              CountryCodes.map((item,index)=> <Picker.Item key={index} label={item.code+' '+item.dial_code} value={item.dial_code} />)
            }
          </Picker>
        </View>
        <View style={styles.phoneWrapper}>
          <Input placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType='numeric'/>
        </View>
      </View>
      <Input placeholder="First Name" placeholderTextColor='#8C8C8C' value={firstName} iconName="phone" onChangeText={setFirstName}/>
      <Input placeholder="Last Name" placeholderTextColor='#8C8C8C' value={lastName} iconName="phone" onChangeText={setLastName}/>
      <Input placeholder="User Name" placeholderTextColor='#8C8C8C' value={userName} iconName="phone" onChangeText={setUserName}/>
    </SafeAreaView>
  );
};

//<Button title="Giriş Yap" onClick={login} theme="secondary" loading={loading}/>

export default Login;