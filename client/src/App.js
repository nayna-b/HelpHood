import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Pages
import Home from './components/Home';
//import MapView from './components/MapView';

// Dashboard with Sidebar and Tabs
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapView />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    minHeight: '100vh',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f4f7f8',
    display: 'flex',
    flexDirection: 'column'
  }
};

export default App;
