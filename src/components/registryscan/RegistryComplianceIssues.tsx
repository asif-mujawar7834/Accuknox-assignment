import { SingleLineIndicator } from "../charts/SingleLineIndicator";
const complianceIssuesData = [
  { id: 1, name: "critical", count: 12 },
  { id: 2, name: "high", count: 7 },
  { id: 3, name: "moderate", count: 5 },
  { id: 4, name: "warning", count: 3 },
];
const total = complianceIssuesData.reduce((sum, item) => sum + item.count, 0);

export const RegistryComplianceIssues = () => {
  return (
    <div className="p-3 h-full w-full">
      <h2 className="font-bold mb-4 text-lg">Registry Compliance Issues</h2>
      <p className="text-gray-700 font-normal text-[17px] mb-2">
        <span className="font-bold text-black">{total}</span> registry
        compliance
      </p>
      <SingleLineIndicator data={complianceIssuesData} />
    </div>
  );
};
