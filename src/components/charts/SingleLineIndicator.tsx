import { FC } from "react";
import { SingleLineIndicatorProps } from "../../types";

export const SingleLineIndicator: FC<SingleLineIndicatorProps> = ({ data }) => {
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

  const total = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div>
      <div className="flex w-full rounded-full overflow-hidden">
        {data.map((item) => (
          <div
            key={item.id}
            className={`h-6`}
            style={{
              width: `${(item.count / total) * 100}%`,
              background: colors[item.name],
            }}
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-2 mt-5 gap-4">
        {data.map((d) => (
          <div className="flex items-center gap-2" key={d.name}>
            <div
              className={`h-5 w-5 rounded-md`}
              style={{ background: colors[d.name] }}
            ></div>
            <span className="font-semibold text-black">
              {d.name} ({d.count})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
