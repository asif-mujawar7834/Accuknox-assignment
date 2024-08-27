import { useEffect, useState } from "react";
import { useScreenSize } from "../hooks/useScreenSize";
import { FaAngleDown, FaBars, FaClock, FaPlus, FaTimes } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { GoKebabHorizontal } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { hideOrShowCanvas } from "../redux/reducers/dashboardslice";

export const DashboardHeader = () => {
  const [showMobileButton, setShowMobileButton] = useState(false);
  const dispatch = useAppDispatch();
  const { isCanvasOpen } = useAppSelector((state) => state.dashboard);
  const { width } = useScreenSize();
  useEffect(() => {
    setShowMobileButton(false);
  }, [width < 640]);

  const handleCanvas = () => {
    dispatch(hideOrShowCanvas(!isCanvasOpen));
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-black font-bold text-xl sm:text-3xl">
        CNAPP Dashboard
      </h1>
      <button
        className="md:hidden text-xl bg-white p-2 rounded-md"
        onClick={() => setShowMobileButton(!showMobileButton)}
      >
        {showMobileButton ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`${
          showMobileButton
            ? "absolute md:flex flex-col"
            : "hidden md:flex flex-col md:w-max"
        } top-[155px] rounded-md p-3 backdrop-blur-md md:top-auto md:p-0 right-4 md:right-auto z-30 md:z-auto bg-gray-400/30 flex flex-col md:bg-transparent md:relative md:flex-row items-center gap-4 text-gray-500`}
      >
        <button
          className="border border-gray-300 flex items-center gap-2 bg-white rounded-md py-2 px-4 font-semibold text-sm duration-300 hover:bg-blue-500 hover:text-white"
          onClick={() => {
            setShowMobileButton(false);
            handleCanvas();
          }}
        >
          Add Widget
          <FaPlus />
        </button>
        <button className="border border-gray-300 flex items-center gap-2 p-2 bg-white rounded-md duration-300 hover:bg-blue-500 hover:text-white">
          <FaRepeat />
        </button>
        <button className="border border-gray-300 flex items-center gap-2 p-2 bg-white rounded-md duration-300 hover:bg-blue-500 hover:text-white">
          <GoKebabHorizontal className="rotate-90" />
        </button>
        <button className="text-sm font-semibold border border-gray-300 flex items-center gap-2 p-2 bg-white rounded-md divide-x-2 duration-300 hover:bg-blue-500 hover:text-white">
          <span className="pr-1">
            <FaClock />
          </span>
          <div className="flex items-center gap-2 pl-2">
            Last 2 Days
            <span>
              <FaAngleDown />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
