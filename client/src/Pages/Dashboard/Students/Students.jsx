import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import Table from "./Table";

function Students() {
  return (
    <main className="w-full h-full overflow-x-hidden p-6">
      <Header />
      <Cards />
      <Table />
    </main>
  );
}

export default Students;
