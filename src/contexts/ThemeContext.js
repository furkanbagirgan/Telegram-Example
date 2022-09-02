import React, {useContext, createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');

  const getThemeValue = async () => {
    try {
      const value = await AsyncStorage.getItem('@themeValue');
      if(value !== null) {
        const themeValue=JSON.parse(value);
        setTheme(themeValue);
      }
    } catch(e) {
      console.log('Storage Read Error')
    }
  }

  useEffect(()=>{
    getThemeValue();
  },[]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  return useContext(ThemeContext);
}

export {useTheme, ThemeProvider};