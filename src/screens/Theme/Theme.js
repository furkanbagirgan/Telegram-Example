import React from 'react';
import {Text, View, SafeAreaView, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Theme.style';
import { useTheme } from '../../contexts/ThemeContext';

const Theme = () => {
  const {theme,setTheme}=useTheme();

  const changeTheme=async(theme)=>{
    try {
      await AsyncStorage.removeItem('@themeValue');
      await AsyncStorage.setItem('@themeValue', JSON.stringify(theme))
      setTheme(theme);
    } catch (error) {
      console.log('Storage Write Error');
    }
  }

  return (
    <SafeAreaView style={theme==='light' ? styles.lightContainer : styles.darkContainer}>
      <View style={styles.themeWrapper}>
        <TouchableHighlight onPress={()=>changeTheme('light')} underlayColor="#eee">
          <View style={styles.lightTheme}/>
        </TouchableHighlight>
        <Text style={theme==='light' ? styles.lightThemeText : styles.darkThemeText}>Light</Text>
      </View>
      <View style={styles.themeWrapper}>
        <TouchableHighlight onPress={()=>changeTheme('dark')} underlayColor="#eee">
          <View style={styles.darkTheme}/>
        </TouchableHighlight>
        <Text style={theme==='light' ? styles.lightThemeText : styles.darkThemeText}>Dark</Text>
      </View>
    </SafeAreaView>
  );
};

export default Theme;