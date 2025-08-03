import React from "react";

const ListofPlayers = () => {
  // Step 1: Declare array of 11 players with name and score
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 70 },
    { name: "Rishabh Pant", score: 68 },
    { name: "KL Rahul", score: 92 },
    { name: "Shreyas Iyer", score: 45 },
    { name: "Hardik Pandya", score: 77 },
    { name: "Jadeja", score: 53 },
    { name: "Bumrah", score: 30 },
    { name: "Siraj", score: 25 },
    { name: "Ashwin", score: 60 },
    { name: "Shubman Gill", score: 90 },
  ];

  // Step 2: Filter players with score < 70 using ES6 arrow function
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Filtered Players (Score &lt; 70)</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
