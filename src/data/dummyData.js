// src/data/dummyData.js

export const codeMetricsData = [
  { day: 1, metric1: 10, metric2: 20 },
  { day: 2, metric1: 15, metric2: 25 },
  { day: 3, metric1: 12, metric2: 22 },
  { day: 4, metric1: 18, metric2: 28 },
  { day: 5, metric1: 16, metric2: 26 },
];

export const sprintMetricsData = [
  { sprintName: 'Sprint 1', metric1: 80, metric2: 70 },
  { sprintName: 'Sprint 2', metric1: 85, metric2: 75 },
  { sprintName: 'Sprint 3', metric1: 78, metric2: 68 },
  { sprintName: 'Sprint 4', metric1: 90, metric2: 80 },
  { sprintName: 'Sprint 5', metric1: 82, metric2: 72 },
];

export const releaseMetricsData = [
  { releaseName: 'Release 1', metricValue: 30 },
  { releaseName: 'Release 2', metricValue: 40 },
  { releaseName: 'Release 3', metricValue: 35 },
  { releaseName: 'Release 4', metricValue: 45 },
  { releaseName: 'Release 5', metricValue: 38 },
];

export const teamMetricsData = [
  { metricName: 'Communication', metricValue: 80 },
  { metricName: 'Collaboration', metricValue: 85 },
  { metricName: 'Team Morale', metricValue: 75 },
  { metricName: 'Productivity', metricValue: 90 },
  { metricName: 'Efficiency', metricValue: 88 },
];

export default {
  codeMetricsData,
  sprintMetricsData,
  releaseMetricsData,
  teamMetricsData,
};

