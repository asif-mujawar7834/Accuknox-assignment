import { BarChartWithTitle } from "../charts/BarChartWithTitle";

const resourceData = [
  { name: "VMs", count: 95 },
  { name: "Containers", count: 80 },
  { name: "Databases", count: 60 },
  { name: "Networks", count: 50 },
  { name: "Storage", count: 40 },
];

export const Top5AffectedResources = () => (
  <BarChartWithTitle
    title="Top 5 Affected Resources"
    data={resourceData}
    barColor="#C40C0C"
  />
);
