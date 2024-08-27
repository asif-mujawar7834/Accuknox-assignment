import { useState } from "react";
import { categoryType } from "../types";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { setWidgetsToBeRemoved } from "../redux/reducers/dashboardslice";

export const Tabs = ({ categories }: { categories: categoryType[] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { widgetsToBeRemoved } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  const toggleWidgets = (
    categoryId: number,
    widgetId: number,
    isActive: boolean
  ) => {
    dispatch(
      setWidgetsToBeRemoved({ categoryId, widgetId, isActive: !isActive })
    );
  };

  return (
    <div className="flex-1">
      <div className="border-b border-gray-400">
        {categories.map((category, index) => (
          <button
            key={category.id}
            className={`py-4 px-2 md:py-5 md:px-5 font-semibold text-xs md:text-sm ${
              index === activeTab
                ? "text-black border-b-2 border-black font-bold"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="p-4 flex flex-col gap-4">
        {widgetsToBeRemoved[activeTab]?.widgets.map((widget) => (
          <div
            className="border border-gray-400 p-2 rounded-md flex items-center gap-3"
            key={widget.id}
          >
            <input
              onChange={() =>
                toggleWidgets(
                  categories[activeTab].id,
                  widget.id,
                  widget.isActive
                )
              }
              checked={widget.isActive}
              type="checkbox"
              className="h-[20px] w-[20px] cursor-pointer accent-[#102C57] text-red-500"
            />
            <span className="text-sm font-semibold text-gray-500">
              {widget?.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
