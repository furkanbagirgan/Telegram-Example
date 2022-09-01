import React from 'react';
import { UserProvider } from './contexts/UserContext';
import Navigation from './Navigation';

const App = () => {
  return (
    <UserProvider>
      <Navigation />
    </UserProvider>
  );
};

export default App;
