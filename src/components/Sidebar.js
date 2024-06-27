// src/components/Sidebar.js

import React from 'react';
import '../index.css'; // Import global styles from the root of src

const Sidebar = ({ onSelectMetric }) => {
  // Example sidebar content
  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <button onClick={() => onSelectMetric('code')}>Code Metrics</button>
      <button onClick={() => onSelectMetric('sprint')}>Sprint Metrics</button>
      <button onClick={() => onSelectMetric('release')}>Release Metrics</button>
      <button onClick={() => onSelectMetric('team')}>Team Metrics</button>
    </div>
  );
};

export default Sidebar;

