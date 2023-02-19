import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

import { LoginButton } from './Components/Login';
import { LogoutButton } from './Components/Logout';
import { Profile } from './Components/Profile';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
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
  );
}

export default App;