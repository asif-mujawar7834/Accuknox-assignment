import { BarChartWithTitle } from "../charts/BarChartWithTitle";

const incidentData = [
  { name: "Unauthorized Access", count: 75 },
  { name: "Data Breach", count: 60 },
  { name: "Service Outage", count: 50 },
  { name: "Phishing", count: 40 },
  { name: "Malware", count: 30 },
];

export const Top5IncidentTypes = () => (
  <BarChartWithTitle
    title="Top 5 Incident Types"
    data={incidentData}
    barColor="#FABC3F"
  />
);
