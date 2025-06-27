import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import HelpBoard from './HelpBoard';
import SubmitRequest from './SubmitRequest';
import MyRequests from './MyRequests';
//import MapView from './MapView';
import Settings from './Settings';

function Dashboard() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: '2rem' }}>
          <Routes>
            <Route path="/dashboard" element={<Navigate to="/dashboard/home" />} />
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/helpboard" element={<HelpBoard />} />
            <Route path="/dashboard/submit" element={<SubmitRequest />} />
            <Route path="/dashboard/myrequests" element={<MyRequests />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
