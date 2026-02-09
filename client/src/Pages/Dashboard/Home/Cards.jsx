import React from "react";
import { MdPeople, MdTrendingUp } from "react-icons/md";

function Cards() {
  return (
    <article className="grid grid-cols-3 gap-4">
      <CARD
        title="Total students"
        much={1240}
        icon={<MdPeople />}
        progress={{ up: true, results: "12" }}
      />
      <CARD
        title="Oppupancy Rate"
        much={"94%"}
        icon={<MdPeople />}
        progress={{ up: true, results: "1.3" }}
      />
      <CARD
        title="Pending Requests"
        much={18}
        icon={<MdPeople />}
        progress={{ up: false, results: "5" }}
      />


    </article>
  );
}

const CARD = ({ title, much, icon, progress }) => {
  return (
    <nav className="card h-fit py-1!  grid grid-rows-[3fr_1fr]  tracking-wide">
      <aside className="flex gap-1  items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            {title}
          </h1>
          <h2 className="text-3xl font-bold ">{much}</h2>
        </div>
        <div className="p-2.5 bg-primary/10   rounded-md aspect-square">
          <div className="text-primary text-2xl">{icon}</div>
        </div>
      </aside>
      <aside
        className={`flex items-center px-6 pb-4 gap-2 font-medium  ${progress?.up ? "text-green-600" : "text-red-600"}`}
      >
        <MdTrendingUp className={!progress?.up && "-scale-y-100"} />
        <h1 className={""}>
          {progress?.up ? "+" : "-"} {progress?.results}{"%"}
          <span className="text-gray-400 pl-2">last month</span>
        </h1>
      </aside>
    </nav>
  );
};

export default Cards;
