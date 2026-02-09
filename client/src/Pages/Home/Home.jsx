import Navbar from "./Navbar";
import bg from "../../Assets/UniBG.jpg";
import { LuChevronRight } from "react-icons/lu";
function Home() {
  return (
    <main className="h-screen grid grid-rows-[auto_1fr] max-w-8xl mx-auto w-full relative">
      <Navbar />
      <article className="w-full h-full grid grid-cols-[1fr_auto_1fr] relative z-10">
        <aside className="h-full self-center grid items-center px-10 pl-16">
          <div className="space-y-10 relative ">
            <p className="absolute right-0 top-6 text-xl opacity-60 z-0">
              ++++
            </p>
            <h1 className="text-[110px] font-black tracking-wider leading-24">
              <span className="text-primary">REAL</span> <br /> ESTATE
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium dolorem provident eos consequuntur, officiis ipsum id
              nam tenetur tempore unde aut pariatur necessitatibus deleniti sunt
              ea. Ex dolor eaque consequatur?
            </p>
            <button className="rounded-full cursor-pointer border-black border-2 px-8 py-1.5 font-semibold tracking-wide w-32">
              Sign In
            </button>
          </div>
        </aside>

        <aside className="grid grid-rows-3 [&_h1]:text-4xl [&_h1]:font-bold [&_p]:font-medium [&_p]:text-2xl py-8">
          <h1>
            100+ <br /> <p>ROOM</p>
          </h1>
          <h1>
            100+ <br /> <p>ROOM</p>
          </h1>
          <h1>
            100+ <br /> <p>ROOM</p>
          </h1>
        </aside>
        <aside className="w-full h-full items-center grid relative">
          <CHEVS />
          <PLUSES />
          <div className="absolute right-0 h-full w-1/2 bg-[#222222] z-0" />
          <div className="p-12 relative z-10">
            <div className=" shadow-2xl shadow-black overflow-hidden max-h-fit bg-black/10">
              <img
                src={bg}
                className="h-full object-cover object-center rounded"
                alt=""
              />
            </div>
          </div>
        </aside>
        <LINES />
      </article>
      <div className="absolute h-8 z-0 bottom-0 bg-primary rounded-[0px_600px_0_0px] w-7/12" />
    </main>
  );
}

const LINES = () => (
  <aside className="space-y-1.5 absolute top-6 -translate-x-1/2 [&_div]:h-1 [&_div]:bg-primary [&_div]:w-14  2xl:[&_div]:hidden">
    <div /> <div /> <div /> <div /> <div />
  </aside>
);

const CHEVS = () => (
  <aside className="flex gap-px absolute top-6 right-6 2xl:hidden z-10 text-white">
    <LuChevronRight />
    <LuChevronRight />
    <LuChevronRight />
    <LuChevronRight />
    <LuChevronRight />
  </aside>
);
const PLUSES = () => (
  <aside className="flex gap-px absolute bottom-6 right-20 2xl:hidden z-10 text-white text-xl opacity-60">
    ++++++
  </aside>
);

export default Home;
