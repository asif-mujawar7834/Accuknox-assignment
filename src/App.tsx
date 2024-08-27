import { Toaster } from "./components/Toaster";
import { Dashboard } from "./pages/Dashboard";
import { setToast } from "./redux/reducers/dashboardslice";
import { useAppDispatch, useAppSelector } from "./redux/Store";

function App() {
  const { toast } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();
  const handleRemoveToast = () => {
    dispatch(setToast(null));
  };
  return (
    <div className="bg-[#f0f5fa] h-screen overflow-auto w-full">
      <Dashboard />
      <Toaster toast={toast} removeToast={handleRemoveToast} />
    </div>
  );
}

export default App;
