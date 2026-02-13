import { IoIosBed } from "react-icons/io";
import { LiaChartBarSolid } from "react-icons/lia";
import { GiAutoRepair } from "react-icons/gi";

function Cards() {
  return (
    <section className="grid md:grid-cols-3 gap-4  my-4">
      <CARD
        title="Total Rooms"
        icon={<IoIosBed />}
        total={"450"}
        suffix={
          <span className="ml-0.5 text-gray-500 font-medium text-base">
            Total
          </span>
        }
        more={<div className="self-end text-gray-400 ">updated 5m ago</div>}
        color="#2563EB"
      />
      <CARD
        title="Occupancy Rate"
        icon={<LiaChartBarSolid />}
        total={"62"}
        suffix={
          <span className="ml-0.5 text-green-600 font-medium text-base mt-auto">
            +2%
          </span>
        }
        more={
          <div className="w-full bg-gray-200 h-1.5 rounded-full relative overflow-hidden">
            <div className="bg-green-600 w-3/4 h-full absolute" />
          </div>
        }
        color="#00A63E"
      />
      <CARD
        title="Occupancy Rate"
        icon={<GiAutoRepair />}
        total={"12"}
        suffix={
          <span className="ml-0.5 text-[#F59E0B] font-medium text-base mt-auto">
            -3
          </span>
        }
        more={
          <div className="self-end text-gray-400 ">
            Decrease from last month
          </div>
        }
        color="#F59E0B"
      />
    </section>
  );
}

export const CARD = ({ title, icon, total, suffix, more, color }) => {
  return (
    <aside className="w-full rounded-lg card grid grid-rows-[1fr_auto_15px]">
      <div className="flex justify-between ">
        <h1 className="text-gray-500 font-medium tracking-wide">{title}</h1>
        <div
          style={{ color, background: `${color}22` }}
          className="p-2  rounded-md  text-2xl h-fit"
        >
          {icon}
        </div>
      </div>

      <div className="flex gap-2 mb-2">
        <h1 className="text-3xl font-bold">{total} </h1>
        {suffix}
      </div>
      <div className="text-sm mt-auto">{more}</div>
    </aside>
  );
};

export default Cards;
