import { CARD } from "../Room/Cards";
import { MdLocalDining, MdGroups, MdPieChart } from "react-icons/md";

function Cards() {
  return (
    <section className="grid grid-cols-3 gap-4 h-40 my-4">
      <CARD
        title="Daily Meals Served"
        icon={<MdLocalDining />}
        total={"1245"}
        suffix={
          <span className="ml-0.5 text-green-500 font-medium text-base mt-auto">
            +12%
          </span>
        }
        more={<div className="self-end text-gray-400 ">Today vs Yesterday</div>}
        color="#2563EB"
      />
      <CARD
        title="Current Occupancy"
        icon={<MdGroups />}
        total={"75%"}
        more={
          <div className="relative h-1.5 w-full rounded-md bg-[#FA823033] overflow-hidden">
            <div className="w-3/4 bg-[#FA8230] h-full absolute" />
          </div>
        }
        color="#FA8230"
      />
      <CARD
        title="Budget Utilisation"
        icon={<MdPieChart />}
        total={"76%"}
        suffix={
          <span className="ml-0.5 text-green-500 font-medium text-base mt-auto">
            +12%
          </span>
        }
        more={<div className="self-end text-gray-400 ">Today vs Yesterday</div>}
        color="#16A34A"
      />
    </section>
  );
}

export default Cards;
