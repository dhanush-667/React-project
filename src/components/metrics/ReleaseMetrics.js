// src/components/metrics/ReleaseMetrics.js

import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { releaseMetricsData } from '../../data/dummyData'; // Import dummy data for release metrics

const ReleaseMetrics = () => {
  // Function to format data for Recharts PieChart
  const formatData = (data) => {
    return data.map((entry) => ({
      name: entry.releaseName,
      value: entry.metricValue, // Replace with actual metric property
    }));
  };

  // Format the dummy data for display in the chart
  const formattedData = formatData(releaseMetricsData);

  return (
    <div className="release-metrics">
      <h2>Release Metrics</h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={formattedData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReleaseMetrics;

