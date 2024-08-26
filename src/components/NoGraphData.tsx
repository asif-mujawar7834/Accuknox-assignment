import { VscGraph } from "react-icons/vsc";

export const NoGraphData = () => {
  return (
    <div className="flex items-center flex-col gap-2 opacity-45 justify-center m-auto h-full w-full">
      <VscGraph className="text-5xl" />
      <p className="text-black font-semibold text-lg">
        No Graph Data Available
      </p>
    </div>
  );
};
