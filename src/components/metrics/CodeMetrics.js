// Example usage in CodeMetrics.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { codeMetricsData } from '../../data/dummyData'; // Import dummy data for code metrics

const CodeMetrics = () => {
  // Function to format data for Recharts LineChart
  const formatData = (data) => {
    return data.map((entry, index) => ({
      name: `Day ${index + 1}`,
      metric1: entry.metric1, // Replace with actual metric properties
      metric2: entry.metric2, // Replace with actual metric properties
    }));
  };

  // Format the dummy data for display in the chart
  const formattedData = formatData(codeMetricsData);

  return (
    <div className="code-metrics">
      <h2>Code Related Metrics</h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="metric1" stroke="#8884d8" />
            <Line type="monotone" dataKey="metric2" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CodeMetrics;

