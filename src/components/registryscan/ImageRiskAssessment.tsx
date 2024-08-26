import { SingleLineIndicator } from "../charts/SingleLineIndicator";
const data = [
  { id: 1, name: "critical", count: 20 },
  { id: 2, name: "high", count: 150 },
  { id: 3, name: "warning", count: 90 },
  { id: 4, name: "moderate", count: 70 },
  { id: 5, name: "notAvailable", count: 2 },
];

const total = data.reduce((sum, item) => sum + item.count, 0);

export const ImageRiskAssessment = () => {
  return (
    <div className="p-3 h-full w-full">
      <h2 className="font-bold mb-4 text-lg">Image Risk Assessment</h2>
      <p className="text-gray-700 font-normal text-[17px] mb-2">
        <span className="font-bold text-black">{total}</span> total
        vulnerabilities
      </p>
      <SingleLineIndicator data={data} />
    </div>
  );
};
