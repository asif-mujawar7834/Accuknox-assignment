// CustomPieLabel.tsx
import React from "react";
import { CustomLabelProps } from "../types";

const CustomPieLabel: React.FC<CustomLabelProps> = ({ viewBox, count }) => {
  const { cx, cy } = viewBox;

  return (
    <foreignObject x={cx - 50} y={cy - 25} width={100} height={50}>
      <div
        className="text-lg font-bold text-black flex flex-col"
        style={{ textAlign: "center", color: "black" }}
      >
        <span className="text-xl m-0">{count}</span>
        <span className="text-sm m-0 font-semibold">Total</span>
      </div>
    </foreignObject>
  );
};

export default CustomPieLabel;
