import { FC } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { PieChartWithLegendProps } from "../../types";
import CustomPieLabel from "../CustomGraphLabel";

export const PieChartWithLegend: FC<PieChartWithLegendProps> = ({
  data,
  colors,
  total,
  title,
}) => {
  return (
    <div className="p-3 relative h-full w-full">
      <h2 className="font-bold">{title}</h2>
      <div className="flex flex-col sm:flex-row items-center justify-between h-full w-full">
        <div className="h-[300px] w-full sm:w-[50%]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                startAngle={90}
                endAngle={-360}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
                <Label
                  content={(props) => (
                    <CustomPieLabel {...props} count={total} />
                  )}
                  position="center"
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mb-6 w-full flex justify-center sm:block sm:mb-0 sm:w-[49%]">
          <div className="ml-0 flex flex-col gap-3 text-sm sm:ml-5">
            {data.map((d) => (
              <div className="flex items-center gap-2" key={d.name}>
                <div
                  className={`h-5 w-5 rounded-md`}
                  style={{ background: d.bg }}
                ></div>
                <span className="font-semibold">
                  {d.name} ({d.value})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
