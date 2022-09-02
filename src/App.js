import React from 'react';

import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './Navigation';

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
