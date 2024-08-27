const data = [
  { name: "Critical", value: 1120, bg: "#0D7C66" },
  { name: "High", value: 900, bg: "#41B3A2" },
  { name: "Medium", value: 1575, bg: "#37B5B6" },
  { name: "Low", value: 800, bg: "#4CAF50" },
  { name: "Info", value: 200, bg: "#254336" },
];
const COLORS = ["#0D7C66", "#41B3A2", "#37B5B6", "#4CAF50", "#254336"];
import { getTotalCount } from "../../lib";
import { PieChartWithLegend } from "../charts/PieChartWithLegend";
export const CSPMOverview = () => {
  const totalCount = getTotalCount({ data });
  return (
    <PieChartWithLegend
      data={data}
      title="CSPM Overview"
      colors={COLORS}
      total={totalCount}
    />
  );
};
