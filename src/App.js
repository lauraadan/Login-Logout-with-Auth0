import * as React from 'react'
import logo from './logo.svg';
import { useAuth0 } from '@auth0/auth0-react';

import { ChakraProvider } from '@chakra-ui/react'

import { LoginButton } from './Components/Login';
import { LogoutButton } from './Components/Logout';
import { Profile } from './Components/Profile';

import './App.css';


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;