import React from 'react';

import {UserProvider} from './contexts/UserContext';
import {ThemeProvider} from './contexts/ThemeContext';
import Navigation from './Navigation';

const App = () => {
  //It is the main file of the application. Here, the theme and user contexts surround the application.
  return (
    <UserProvider>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
