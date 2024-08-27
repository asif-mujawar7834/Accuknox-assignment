import { getTotalCount } from "../../lib";
import { SingleLineIndicator } from "../charts/SingleLineIndicator";

const data = [
  { id: 1, name: "critical", value: 20 },
  { id: 2, name: "high", value: 150 },
  { id: 3, name: "warning", value: 90 },
  { id: 4, name: "moderate", value: 70 },
  { id: 5, name: "notAvailable", value: 2 },
];

export const ImageRiskAssessment = () => {
  const totalCount = getTotalCount({ data });
  return (
    <div className="p-3 h-full w-full">
      <h2 className="font-bold mb-4 text-lg">Image Risk Assessment</h2>
      <p className="text-gray-700 font-normal text-[17px] mb-2">
        <span className="font-bold text-black">{totalCount}</span> total
        vulnerabilities
      </p>
      <SingleLineIndicator data={data} totalCount={totalCount} />
    </div>
  );
};
