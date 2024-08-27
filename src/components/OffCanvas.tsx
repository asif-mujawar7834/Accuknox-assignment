import {
  hideOrShowCanvas,
  resetWidgetsToBeRemoved,
  setToast,
  updateWidgets,
} from "../redux/reducers/dashboardslice";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { Tabs } from "./Tabs";

export const OffCanvas = () => {
  const { isCanvasOpen, categories, widgetsToBeRemoved } = useAppSelector(
    (state) => state.dashboard
  );
  const dispatch = useAppDispatch();
  const toggleCanvas = () => {
    dispatch(resetWidgetsToBeRemoved());
    dispatch(hideOrShowCanvas(!isCanvasOpen));
  };

  const handleConfirm = () => {
    dispatch(updateWidgets(widgetsToBeRemoved));
    dispatch(
      setToast({
        id: Date.now.toString(),
        message: "Widgets updated successfully",
        type: "success",
      })
    );
  };

  return (
    <div
      className={`bg-gray-500/50 duration-300 h-full fixed right-0 top-0 z-50 ${
        isCanvasOpen ? "w-full" : "w-0"
      }`}
      onClick={(e) => {
        e.stopPropagation();
        toggleCanvas();
      }}
    >
      <div
        className="w-full md:w-[50%] bg-white ml-auto h-full flex flex-col"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="bg-[#102C57] py-3 px-4 text-white flex items-center justify-between">
          <h1 className="font-semibold text-sm">Add Widgets</h1>
          <button
            className="hover:text-white text-2xl hover:bg-red-600 h-[30px] w-[30px] rounded-full flex items-center justify-center"
            onClick={toggleCanvas}
          >
            <span className="p-0 m-0 h-full w-full" style={{ lineHeight: "1" }}>
              &times;
            </span>
          </button>
        </div>
        <p className="mt-3 px-4">
          Personalise your dashboard by adding the following widgets
        </p>
        <Tabs categories={categories} />
        <div className="mx-auto my-2 md:ml-auto md:m-4">
          <button
            className="border-2 border-[#102C57] text-sm font-semibold py-3 px-10 rounded-md mr-2"
            onClick={toggleCanvas}
          >
            Cancel
          </button>
          <button
            className="border-2 bg-[#102C57] text-white text-sm font-semibold py-3 px-10 rounded-md"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
