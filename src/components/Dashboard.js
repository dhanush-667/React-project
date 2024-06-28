// src/components/Dashboard.js
// sample

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CodeMetrics from './metrics/CodeMetrics';
import SprintMetrics from './metrics/SprintMetrics';
import ReleaseMetrics from './metrics/ReleaseMetrics';
import TeamMetrics from './metrics/TeamMetrics';
import '../index.css'; // Import global styles from the root of src

const Dashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState('code'); // Default to 'code' metric

  // Function to handle metric selection
  const handleMetricSelect = (metric) => {
    setSelectedMetric(metric);
  };

  return (
    <div className="dashboard">
      <Sidebar onSelectMetric={handleMetricSelect} />
      <div className="dashboard-content">
        <h1>Software Development Metrics Dashboard</h1>
        {/* Conditionally render selected metric components */}
        {selectedMetric === 'code' && <CodeMetrics />}
        {selectedMetric === 'sprint' && <SprintMetrics />}
        {selectedMetric === 'release' && <ReleaseMetrics />}
        {selectedMetric === 'team' && <TeamMetrics />}
      </div>
    </div>
  );
};

export default Dashboard;

