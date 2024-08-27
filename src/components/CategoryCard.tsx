import { FaPlus } from "react-icons/fa";
import { componentMapping } from "../constants";
import {
  addOrRemoveWidget,
  hideOrShowCanvas,
  setWidgetsToBeRemoved,
} from "../redux/reducers/dashboardslice";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { categoryType } from "../types";

export const CategoryCard = ({ category }: { category: categoryType }) => {
  const { searchQuery, isCanvasOpen } = useAppSelector(
    (state) => state.dashboard
  );
  const dispatch = useAppDispatch();

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
    dispatch(
      setWidgetsToBeRemoved({
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
    <div key={category.id} className="p-1 sm:p-3">
      <h1 className="text-black font-bold text-lg sm:text-xl mb-2">
        {category.name}
      </h1>
      <div className="bg-[#ebf0f5] sm:auto-rows-[300px] w-full p-2 sm:p-4 gap-4 grid grid-cols-auto-fill sm:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(430px,_1fr))] rounded-md">
        {category.widgets
          .filter(
            (widget) =>
              widget.isActive &&
              widget.name
                .toLocaleLowerCase()
                .includes(searchQuery.toLowerCase())
          )
          .map((widget) => {
            const Component = componentMapping[widget.Component];
            return (
              <div
                key={widget.id}
                className="bg-white rounded-md p-1 sm:p-3 relative group"
              >
                <button
                  className="absolute text-black text-2xl top-4 right-4 sm:top-5 sm:right-5 duration-300 rounded-full h-[30px] w-[30px] hover:bg-red-600 hover:text-white p-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-30"
                  onClick={() => removeWidget(category.id, widget.id, false)}
                >
                  <span
                    className="p-0 m-0 h-full w-full"
                    style={{ lineHeight: "1" }}
                  >
                    &times;
                  </span>
                </button>
                <Component />
              </div>
            );
          })}
        {category.widgets.filter((widget) => widget.isActive).length < 6 && (
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
  );
};
