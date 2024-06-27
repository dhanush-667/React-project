// src/components/metrics/TeamMetrics.js

import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { teamMetricsData } from '../../data/dummyData'; // Import dummy data for team metrics

const TeamMetrics = () => {
  // Function to format data for Recharts RadarChart
  const formatData = (data) => {
    return data.map((entry) => ({
      metricName: entry.metricName,
      metricValue: entry.metricValue, // Replace with actual metric property
    }));
  };

  // Format the dummy data for display in the chart
  const formattedData = formatData(teamMetricsData);

  return (
    <div className="team-metrics">
      <h2>Team Metrics</h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <RadarChart outerRadius={150} data={formattedData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="metricName" />
            <Radar name="Metrics" dataKey="metricValue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TeamMetrics;

