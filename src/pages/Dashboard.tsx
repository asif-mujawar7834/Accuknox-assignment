import { useAppSelector } from "../redux/Store";
import { OffCanvas } from "../components/OffCanvas";
import { Header } from "../components/Header";
import { DashboardHeader } from "../components/DashboardHeader";
import { CategoryCard } from "../components/CategoryCard";

export const Dashboard = () => {
  const { categories, searchQuery } = useAppSelector(
    (state) => state.dashboard
  );

  return (
    <section className="relative">
      <Header />
      <div className="p-4 md:p-10 text-black mt-4">
        <DashboardHeader />
        {categories.map((category) => {
          const searchText = searchQuery.toLowerCase();
          const filteredWidgets = category.widgets.filter(
            (widget) =>
              widget.isActive && widget.name.toLowerCase().includes(searchText)
          );

          return filteredWidgets.length > 0 || !searchQuery ? (
            <CategoryCard category={category} key={category.id} />
          ) : null;
        })}
        {categories.every(
          (category) =>
            category.widgets.filter(
              (widget) =>
                widget.isActive &&
                widget.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0
        ) && (
          <div className="text-center text-gray-500 mt-10 bg-white rounded-md py-6">
            <p className="text-xl font-semibold">No Widgets Found</p>
            <p className="text-sm mt-2">
              Try adjusting your search or add a new widget to the dashboard.
            </p>
          </div>
        )}
        <OffCanvas />
      </div>
    </section>
  );
};
