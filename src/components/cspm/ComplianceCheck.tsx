import { PieChartWithLegend } from "../charts/PieChartWithLegend";

const data = [
  { name: "Compliant", value: 3200, bg: "#021526" },
  { name: "Non-Compliant", value: 1450, bg: "#03346E" },
  { name: "Partial Compliance", value: 890, bg: "#6EACDA" },
  { name: "Not Assessed", value: 600, bg: "#E2E2B6" },
];
const COLORS = ["#021526", "#03346E", "#6EACDA", "#E2E2B6"];
export const ComplianceCheck = () => {
  return (
    <PieChartWithLegend
      data={data}
      title="Cloud Accounts"
      colors={COLORS}
      total={2583}
    />
  );
};
