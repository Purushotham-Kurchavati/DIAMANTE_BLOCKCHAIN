import React, { useState, useEffect } from 'react';
import CampaignCard from './CampaignCard.js'; // Ensure .js extension is included

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  // Simulate fetching campaigns from blockchain or API
  useEffect(() => {
    const fetchedCampaigns = [
      { id: 1, title: 'Build a School', description: 'Fundraising to build a school in rural areas' },
      { id: 2, title: 'Clean Water Initiative', description: 'Help provide clean water' },
    ];
    setCampaigns(fetchedCampaigns);
  }, []);

  return (
    <div>
      <h1>Active Campaigns</h1>
      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default CampaignList;
