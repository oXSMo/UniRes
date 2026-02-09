import Cards from "./Cards";
import Header from "./Header";
import Table from "./Table";

function Room() {
  return (
    <main className="w-full h-full overflow-x-hidden p-6">
      <Header />
      <Cards />
      <Table/>
    </main>
  );
}

export default Room;
