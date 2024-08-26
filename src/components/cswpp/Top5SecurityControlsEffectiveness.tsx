import { BarChartWithTitle } from "../charts/BarChartWithTitle";

const controlsData = [
  { name: "Firewall", count: 90 },
  { name: "Intrusion Detection", count: 80 },
  { name: "Encryption", count: 70 },
  { name: "Access Control", count: 60 },
  { name: "Monitoring", count: 50 },
];

export const Top5SecurityControlsEffectiveness = () => (
  <BarChartWithTitle
    title="Top 5 Security Controls Effectiveness"
    data={controlsData}
    barColor="#3572EF"
  />
);
