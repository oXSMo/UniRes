import  { useState } from "react";

function Table() {
  return (
    <section className="card px-0! overflow-auto">
      <HEADER />
      <TABLE />
    </section>
  );
}

const TABLE = () => {
  return (
    <table className="overflow-auto min-w-full text-sm mt-4">
      <thead className="sticky z-10  h-10 w-full text-neutral-500  border-t border-b border-gray-200 bg-white [&_th]:uppercase [&_th]:px-4   [&_th]:py-1.5  [&_div]:text-start    ">
        <tr className="bg-[#eef6ff]">
          <th className="min-w-44">
            <div className="">Studnet</div>
          </th>
          <th className="min-w-52">
            <div className="">WING /BLOCK</div>
          </th>
          <th className="min-w-24">
            <div className="">TYPE</div>
          </th>
          <th className="min-w-52">
            <div className="">Current OCCUPANT</div>
          </th>
          <th className="min-w-44">
            <div className="">STATUS</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {[...Array(8)].map((_) => (
          <tr className="h-11 [&_td]:px-4">
            <td className="font-bold tracking-wide">A-101</td>
            <td className="font-medium text-gray-500 tracking-wide">
              NorthWing Block-A
            </td>
            <td className="font-medium text-gray-500 tracking-wide">Single</td>
            <td className="font-medium text-gray-500 tracking-wide">
              Sohaib Mansouri
            </td>
            <td className="font-medium text-gray-500 tracking-wide">
              Occupied
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const HEADER = () => {
  const [filter, setFilter] = useState({ rooms: "all" });

  return (
    <header className="flex justify-between px-4">
      <aside
        className="grid grid-cols-3 gap-1 font-medium text-gray-600 text-xs px-2 py-1.5 bg-[#f0f0f0] rounded-md
        "
      >
        <BUTTON
          onClick={() => setFilter({ ...filter, rooms: "all" })}
          active={filter.rooms === "all"}
        >
          All Rooms
        </BUTTON>
        <BUTTON
          onClick={() => setFilter({ ...filter, rooms: "available" })}
          active={filter.rooms === "available"}
        >
          Available
        </BUTTON>
        <BUTTON
          onClick={() => setFilter({ ...filter, rooms: "repair" })}
          active={filter.rooms === "repair"}
        >
          Under Repair
        </BUTTON>
      </aside>
    </header>
  );
};

const BUTTON = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`cursor-pointer duration-300 p-1 px-1.5 font-bold rounded-md ${active && "bg-white text-primary"}`}
  >
    {children}
  </button>
);

export default Table;
