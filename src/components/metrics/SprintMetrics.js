// src/components/metrics/SprintMetrics.js

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { sprintMetricsData } from '../../data/dummyData'; // Import dummy data for sprint metrics

const SprintMetrics = () => {
  // Function to format data for Recharts BarChart
  const formatData = (data) => {
    return data.map((entry) => ({
      sprintName: entry.sprintName,
      metric1: entry.metric1, // Replace with actual metric properties
      metric2: entry.metric2, // Replace with actual metric properties
      // Add more metrics as needed
    }));
  };

  // Format the dummy data for display in the chart
  const formattedData = formatData(sprintMetricsData);

  return (
    <div className="sprint-metrics">
      <h2>Sprint Metrics</h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sprintName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="metric1" fill="#8884d8" />
            <Bar dataKey="metric2" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SprintMetrics;

