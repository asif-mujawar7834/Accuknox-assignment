import { FC } from "react";
import { SingleLineIndicatorProps } from "../../types";

export const SingleLineIndicator: FC<SingleLineIndicatorProps> = ({
  data,
  totalCount,
}) => {
  const colors = {
    critical: "#c82819",
    high: "#6e0f0a",
    warning: "#eb9132",
    moderate: "#f0c341",
    notAvailable: "#aaaaaa",
    success: "#19a55a",
    failed: "#c82819",
    ["in progress"]: "#f0c341",
  };

  return (
    <div>
      <div className="flex w-full rounded-full overflow-hidden">
        {data.map((item) => (
          <div
            key={item.id}
            className={`h-6`}
            style={{
              width: `${(item.value / totalCount) * 100}%`,
              background: colors[item.name as keyof typeof colors],
            }}
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-2 mt-5 gap-4 text-sm">
        {data.map((d) => (
          <div className="flex items-center gap-2" key={d.name}>
            <div
              className={`h-5 w-5 rounded-md`}
              style={{ background: colors[d.name as keyof typeof colors] }}
            ></div>
            <span className="font-semibold text-[#3C3D37]">
              {d.name} ({d.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
