import { getTotalCount } from "../../lib";
import { SingleLineIndicator } from "../charts/SingleLineIndicator";
const data = [
  { id: 1, name: "critical", value: 10 },
  { id: 2, name: "high", value: 99 },
  { id: 3, name: "warning", value: 40 },
  { id: 4, name: "moderate", value: 180 },
  { id: 5, name: "notAvailable", value: 42 },
];

export const ImageSecurityIssues = () => {
  const totalCount = getTotalCount({ data });
  return (
    <div className="p-3 h-full w-full">
      <h2 className="font-bold mb-4 text-lg">Image Security Issues</h2>
      <p className="text-gray-700 font-normal text-[17px] mb-2">
        <span className="font-bold text-black">{totalCount}</span> total images
      </p>
      <SingleLineIndicator data={data} totalCount={totalCount} />
    </div>
  );
};
