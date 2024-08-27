import { getTotalCount } from "../../lib";
import { SingleLineIndicator } from "../charts/SingleLineIndicator";
const data = [
  { id: 1, name: "critical", value: 12 },
  { id: 2, name: "high", value: 7 },
  { id: 3, name: "moderate", value: 5 },
  { id: 4, name: "warning", value: 3 },
];

export const RegistryComplianceIssues = () => {
  const totalCount = getTotalCount({ data });
  return (
    <div className="p-3 h-full w-full">
      <h2 className="font-bold mb-4 text-lg">Registry Compliance Issues</h2>
      <p className="text-gray-700 font-normal text-[17px] mb-2">
        <span className="font-bold text-black">{totalCount}</span> registry
        compliance
      </p>
      <SingleLineIndicator data={data} totalCount={totalCount} />
    </div>
  );
};
