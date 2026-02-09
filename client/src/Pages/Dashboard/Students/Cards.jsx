import Chart from "react-apexcharts";

function Cards() {
  return (
    <section className="grid grid-cols-3 gap-4   my-4">
      <CARD title="Role Distrubition" total={"450 Total"}>
        <div className="relative w-full bg-primary/15 rounded-full h-2.5 overflow-hidden mt-3">
          <div className="absolute h-full w-[96%] bg-primary" />
          <div className="absolute h-full w-[98%] bg-primary/50" />
        </div>
        <div className="flex justify-between items-center text-sm mt-4 font-medium">
          <div className="flex gap-2 items-center ">
            <span className="w-3 aspect-square rounded-full bg-primary" />
            Student
          </div>
          <h1>96%</h1>
        </div>
        <div className="flex justify-between items-center text-sm mt-2 font-medium">
          <div className="flex gap-2 items-center ">
            <span className="w-3 aspect-square rounded-full bg-primary" />
            Chef
          </div>
          <h1>2%</h1>
        </div>
        <div className="flex justify-between items-center text-sm mt-2 font-medium">
          <div className="flex gap-2 items-center ">
            <span className="w-3 aspect-square rounded-full bg-primary" />
            Admin
          </div>
          <h1>2%</h1>
        </div>
      </CARD>

      <CARD title="Year Of Study" total="Residency">
        <WeeklyBarChart />
      </CARD>
    </section>
  );
}

const CARD = ({ title, children, total }) => (
  <article className="card rounded-lg h-full grid grid-rows-[auto_1fr]">
    <aside>
      {" "}
      <h1 className="text-gray-500 font-bold uppercase text-[15px]  tracking-wide">
        {title}
      </h1>
      <h2 className="text-[28px] mt-1 font-bold tracking-wide">{total}</h2>
    </aside>
    <aside className="mt-auto">{children}</aside>
  </article>
);

const WeeklyBarChart = () => {
  const series = [
    {
      name: "Value",
      data: [30, 60, 45, 80, 25], // FR, SO, JR, SR, OR
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "45%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["FR", "SO", "JR", "SR", "OR"],
      labels: {
        style: {
          fontSize: "12px",
          colors: "#9CA3AF",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    colors: [
      ({ dataPointIndex }) => (dataPointIndex === 3 ? "#2563EB" : "#DBEAFE"), // highlight SR
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <Chart options={options} series={series} type="bar" height={160} />
    </div>
  );
};

export default Cards;
