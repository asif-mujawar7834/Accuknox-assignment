import { getTotalCount } from "../../lib";
import { PieChartWithLegend } from "../charts/PieChartWithLegend";
const data = [
  { name: "Connected", value: 2, bg: "#3572EF" },
  { name: "Not Connected", value: 2, bg: "#D1E9F6" },
];
const COLORS = ["#3572EF", "#D1E9F6"];
export const CloudAccountRiskAssessment = () => {
  const totalCount = getTotalCount({ data });
  return (
    <PieChartWithLegend
      data={data}
      title="Cloud Account Risk Assessment"
      colors={COLORS}
      total={totalCount}
    />
  );
};
