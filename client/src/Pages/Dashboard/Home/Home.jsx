import Header from "./Header";
import Cards from "./Cards";
import Charts from "./Charts";
import Table from "./Table";

function Home() {
  return (
    <main className="w-full h-full overflow-x-hidden ">
      <Header />
      <section className="p-6 pt-8 space-y-8">
        <Cards />
        <Charts />
        <Table />
      </section>
    </main>
  );
}

export default Home;
