import { BarChartWithTitle } from "../charts/BarChartWithTitle";
const data = [
  { name: "Critical", count: 120 },
  { name: "High", count: 90 },
  { name: "Medium", count: 70 },
  { name: "Low", count: 50 },
  { name: "Info", count: 30 },
];

export const CSWPTop5Alerts = () => {
  return (
    <BarChartWithTitle
      title="Top 5 NameSpace Specific Alert"
      data={data}
      barColor="#1E201E"
    />
  );
};
