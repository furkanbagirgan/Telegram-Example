import React, {useContext, createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  //The data to be kept in the theme context is here.
  const [theme, setTheme] = useState('light');

  //With this function, it is checked whether a theme has selected in before by connecting to the storage.
  const getThemeValue = async () => {
    try {
      const value = await AsyncStorage.getItem('@themeValue');
      if (value !== null) {
        const themeValue = JSON.parse(value);
        setTheme(themeValue);
      }
    } catch (e) {
      console.log('Storage Read Error');
    }
  };

  //The getThemeValue function is made to run when the application first starts.
  useEffect(() => {
    getThemeValue();
  }, []);

  //The data kept in the context with the Provider is opened to the outside.
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

//By creating the useTheme hook, easy access to the data in the context is provided.
function useTheme() {
  return useContext(ThemeContext);
}

export {useTheme, ThemeProvider};
