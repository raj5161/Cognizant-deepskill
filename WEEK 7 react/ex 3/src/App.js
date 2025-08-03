import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayMessage = (message) => {
    alert(message);
  };

  const handlePress = (e) => {
    console.log("I was clicked");
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>
      <h2>Counter: {count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayMessage("Welcome")}>Say Welcome</button>

      <br /><br />

      <button onClick={handlePress}>OnPress</button>

      <br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
