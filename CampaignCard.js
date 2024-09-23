import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  return (
    <div className="campaign-card">
      <h3>{campaign.title}</h3>
      <p>{campaign.description}</p>
      <Link to={`/campaign/${campaign.id}`}>View Campaign</Link>
    </div>
  );
};

export default CampaignCard;
