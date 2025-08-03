import logo from './logo.svg';
import './App.css';
import React from "react";
import "./App.css";

function App() {
  const element = "Office Space";
  const sr = "https://i.ibb.co/tC0wm0P/office.png"; // Use your own or this placeholder

  const officeSpaces = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Regus", Rent: 70000, Address: "Bangalore" },
    { Name: "WeWork", Rent: 55000, Address: "Mumbai" },
    { Name: "Innov8", Rent: 65000, Address: "Hyderabad" },
  ];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {officeSpaces.map((item, index) => {
        const colors = [];
        if (item.Rent <= 60000) {
          colors.push("textRed");
        } else {
          colors.push("textGreen");
        }

        return (
          <div key={index} className="box">
            <img src={sr} width="25%" height="25%" alt="Office Space" />
            <h2>Name: {item.Name}</h2>
            <h3 className={colors.join(" ")}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
