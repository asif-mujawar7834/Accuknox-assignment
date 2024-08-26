import { BarChartWithTitle } from "../charts/BarChartWithTitle";

const complianceData = [
  { name: "GDPR", count: 60 },
  { name: "HIPAA", count: 45 },
  { name: "PCI-DSS", count: 30 },
  { name: "ISO", count: 25 },
  { name: "NIST", count: 20 },
];

export const Top5ComplianceIssues = () => (
  <BarChartWithTitle
    title="Top 5 Compliance Issues"
    data={complianceData}
    barColor="#387F39"
  />
);
