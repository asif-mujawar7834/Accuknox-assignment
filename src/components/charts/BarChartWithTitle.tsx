import { FC } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { NoGraphData } from "../NoGraphData";
import { BarChartWithTitleProps } from "../../types";

export const BarChartWithTitle: FC<BarChartWithTitleProps> = ({
  title,
  data,
  barColor,
}) => (
  <>
    {data.length > 0 ? (
      <div className="p-3 h-full w-full">
        <h2 className="font-bold mb-4">{title}</h2>
        <div className="relative h-[240px] w-full">
          <div className="absolute left-0 right-0 bottom-0 top-0">
            <ResponsiveContainer width="100%" height={"100%"}>
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  tick={{ fill: "gray", fontWeight: "500", fontSize: "14px" }}
                />
                <YAxis
                  width={30}
                  tick={{ fill: "gray", fontWeight: "500", fontSize: "14px" }}
                />
                <Tooltip />
                <Bar dataKey="count" fill={barColor} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    ) : (
      <NoGraphData />
    )}
  </>
);
