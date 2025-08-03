import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoggedIn ? <UserPage /> : <GuestPage />}
      <br />
      {isLoggedIn
        ? <LogoutButton onClick={handleLogoutClick} />
        : <LoginButton onClick={handleLoginClick} />
      }
    </div>
  );
}

export default App;
