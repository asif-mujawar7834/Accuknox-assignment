import { getTotalCount } from "../../lib";
import { PieChartWithLegend } from "../charts/PieChartWithLegend";
const data = [
  { name: "Critical", value: 620, bg: "#3E2723" },
  { name: "High-Risk", value: 980, bg: "#BF360C" },
  { name: "Medium-Risk", value: 1375, bg: "#FF8F00" },
  { name: "Low-Risk", value: 1050, bg: "#6D4C41" },
];
const COLORS = ["#3E2723", "#BF360C", "#FF8F00", "#6D4C41"];
export const CloudMisConfigurations = () => {
  const totalCount = getTotalCount({ data });
  return (
    <PieChartWithLegend
      data={data}
      title="Cloud Resource Misconfiguration"
      colors={COLORS}
      total={totalCount}
    />
  );
};
