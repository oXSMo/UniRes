import { CARD } from "../Room/Cards";
import Cards from "./Cards";
import Header from "./Header";
import MealPlanTable from "./MealsTable";
import Table from "./Table";

function Resturant() {
  return (
    <main className="w-full h-full overflow-x-hidden p-6">
      <Header />
      <Cards />
      <MealPlanTable />
      <Table />
    </main>
  );
}

export default Resturant;
