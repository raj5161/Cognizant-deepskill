import React from "react";

const IndianPlayers = () => {
  // a. Destructuring for Odd and Even team players
  const allPlayers = ["Virat", "Rohit", "Gill", "Pant", "Hardik", "Jadeja"];
  const [odd1, even1, odd2, even2, odd3, even3] = allPlayers;

  // b. Merge T20 and RanjiTrophy Players
  const T20Players = ["Surya", "Ishan", "Tilak"];
  const RanjiPlayers = ["Pujara", "Rahane", "Karun Nair"];
  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2>Merged List of T20 and Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
