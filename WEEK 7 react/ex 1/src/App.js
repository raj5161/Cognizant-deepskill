import logo from './logo.svg';
import './App.css';
import React from "react";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const flag = true; // Set to false to show IndianPlayers instead

  return (
    <div className="App">
      <h1>🏏 Welcome to Cricket App 🏏</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
