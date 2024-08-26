import { FaAngleDown, FaClock, FaPlus, FaTimes, FaBars } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import {
  addOrRemoveWidget,
  hideOrShowCanvas,
} from "../redux/reducers/dashboardslice";
import { OffCanvas } from "../components/OffCanvas";
import { FaRepeat } from "react-icons/fa6";
import { GoKebabHorizontal } from "react-icons/go";
import { Header } from "../components/Header";

import { useEffect, useState } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

export const Dashboard = () => {
  const { categories, isCanvasOpen } = useAppSelector(
    (state) => state.dashboard
  );

  const [showMobileButton, setShowMobileButton] = useState(false);
  const { width } = useScreenSize();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setShowMobileButton(false);
  }, [width < 640]);

  const removeWidget = (
    categoryId: number,
    widgetId: number,
    isActive: boolean
  ) => {
    dispatch(
      addOrRemoveWidget({
        categoryId: categoryId,
        widgetId: widgetId,
        isActive: isActive,
      })
    );
  };

  const toggleCanvas = () => {
    dispatch(hideOrShowCanvas(!isCanvasOpen));
  };

  return (
    <section className="relative">
      <Header />
      <div className="p-4 md:p-10 text-black mt-6">
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
            } top-[155px] rounded-md p-3 backdrop-blur-md md:top-auto md:p-0 right-4 md:right-auto z-10 md:z-auto bg-gray-300/30 flex flex-col md:bg-transparent md:relative md:flex-row items-center gap-4 text-gray-500`}
          >
            <button className="border border-gray-300 flex items-center gap-2 bg-white rounded-md py-2 px-4 font-semibold text-sm duration-300 hover:bg-blue-500 hover:text-white">
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
        {categories.map((category) => (
          <div key={category.id} className="p-1 sm:p-3">
            <h1 className="text-black font-bold text-lg sm:text-xl mb-2">
              {category.name}
            </h1>
            <div className="bg-[#ebf0f5] sm:auto-rows-[300px] w-full p-2 sm:p-4 gap-4 grid grid-cols-auto-fill sm:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(430px,_1fr))] rounded-md">
              {category.widgets
                .filter((widget) => widget.isActive)
                .map((widget) => (
                  <div
                    key={widget.id}
                    className="bg-white rounded-md p-1 sm:p-3 relative group"
                  >
                    <button
                      className="absolute text-black text-2xl top-4 right-4 sm:top-5 sm:right-5 duration-300 rounded-full h-[30px] w-[30px] hover:bg-red-600 hover:text-white p-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-30"
                      onClick={() =>
                        removeWidget(category.id, widget.id, false)
                      }
                    >
                      <span
                        className="p-0 m-0 h-full w-full"
                        style={{ lineHeight: "1" }}
                      >
                        &times;
                      </span>
                    </button>
                    <widget.Component />
                  </div>
                ))}
              {category.widgets.filter((widget) => widget.isActive).length <
                6 && (
                <div className="h-[300px] bg-white p-3 flex items-center justify-center rounded-md">
                  <button
                    className="text-gray-400 font-bold text-sm flex items-center gap-4 px-3 py-2 border border-gray-300 rounded-md"
                    onClick={toggleCanvas}
                  >
                    <FaPlus />
                    Add Widget
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        <OffCanvas />
      </div>
    </section>
  );
};
