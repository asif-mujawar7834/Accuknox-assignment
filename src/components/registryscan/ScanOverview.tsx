import { SingleLineIndicator } from "../charts/SingleLineIndicator";
const scanStatusData = [
  { id: 1, name: "success", count: 120 },
  { id: 2, name: "failed", count: 15 },
  { id: 3, name: "in progress", count: 5 },
];

const total = scanStatusData.reduce((sum, item) => sum + item.count, 0);

export const ScanOverviewStatus = () => {
  return (
    <div className="p-3 h-full w-full">
      <h2 className="font-bold mb-4 text-lg"> Scan Status Overview</h2>
      <p className="text-gray-700 font-normal text-[17px] mb-2">
        <span className="font-bold text-black">{total}</span> scanned
      </p>
      <SingleLineIndicator data={scanStatusData} />
    </div>
  );
};
