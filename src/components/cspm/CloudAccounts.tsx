import { getTotalCount } from "../../lib";
import { PieChartWithLegend } from "../charts/PieChartWithLegend";

const data = [
  { name: "Failed", value: 1689, bg: "#FF0000" },
  { name: "Warning", value: 681, bg: "#FABC3F" },
  { name: "Not Available", value: 36, bg: "#686D76" },
  { name: "Passed", value: 7253, bg: "#387F39" },
];
const COLORS = ["#FF0000", "#FABC3F", "#686D76", "#387F39"];

export const CloudAccounts = () => {
  const totalCount = getTotalCount({ data });
  return (
    <PieChartWithLegend
      data={data}
      title="Cloud Account"
      colors={COLORS}
      total={totalCount}
    />
  );
};
