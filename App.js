import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import CampaignList from './components/CampaignList.js';
import CreateCampaign from './components/CreateCampaign.js';
import CampaignDetails from './components/CampaignDetails.js';
import Dashboard from './components/Dashboard.js';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CampaignList />} />
        <Route path="/create" element={<CreateCampaign />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
