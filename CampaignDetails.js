import React from 'react';
import { useParams } from 'react-router-dom';

const CampaignDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Campaign Details</h1>
      <p>Details about campaign ID: {id}</p>
      {/* Fetch campaign details from blockchain or API here */}
    </div>
  );
};

export default CampaignDetails;
