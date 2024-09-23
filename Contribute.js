// src/components/Contribute.js
import React, { useState } from 'react';

const Contribute = ({ campaignId }) => {
  const [amount, setAmount] = useState('');

  const handleContribute = (e) => {
    e.preventDefault();
    // Logic to interact with the blockchain for contributions
    console.log(`Contributed ${amount} to campaign ${campaignId}`);
  };

  return (
    <div>
      <h2>Contribute to this Campaign</h2>
      <form onSubmit={handleContribute}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Contribute</button>
      </form>
    </div>
  );
};

export default Contribute;
