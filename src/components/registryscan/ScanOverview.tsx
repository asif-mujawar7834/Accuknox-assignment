import { getTotalCount } from "../../lib";
import { SingleLineIndicator } from "../charts/SingleLineIndicator";
const data = [
  { id: 1, name: "success", value: 120 },
  { id: 2, name: "failed", value: 15 },
  { id: 3, name: "in progress", value: 5 },
];

export const ScanOverviewStatus = () => {
  const totalCount = getTotalCount({ data });
  return (
    <div className="p-3 h-full w-full">
      <h2 className="font-bold mb-4 text-lg"> Scan Status Overview</h2>
      <p className="text-gray-700 font-normal text-[17px] mb-2">
        <span className="font-bold text-black">{totalCount}</span> scanned
      </p>
      <SingleLineIndicator data={data} totalCount={totalCount} />
    </div>
  );
};
