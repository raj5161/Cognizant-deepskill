import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = () => {
    const converted = (parseFloat(rupees) / 88.0).toFixed(2); // assume 1 Euro = 88 INR
    setEuro(converted);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Currency Convertor (INR ➡️ Euro)</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>{rupees} INR = {euro} Euro</p>}
    </div>
  );
}

export default CurrencyConvertor;
