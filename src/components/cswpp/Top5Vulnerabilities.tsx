import { BarChartWithTitle } from "../charts/BarChartWithTitle";

const vulnerabilityData = [
  { name: "Critical", count: 85 },
  { name: "High", count: 70 },
  { name: "Medium", count: 45 },
  { name: "Low", count: 30 },
  { name: "Info", count: 20 },
];

export const Top5VulnerabilityTypes = () => (
  <BarChartWithTitle
    title="Top 5 Vulnerability Types"
    data={vulnerabilityData}
    barColor="#F05A7E"
  />
);
