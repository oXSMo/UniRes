import { useState } from "react";
import Chart from "react-apexcharts";

function Charts() {
  return (
    <main className="grid gap-6 xl:grid-cols-[7fr_3fr] ">
      <section className="w-full   card">
        <aside className="flex justify-between">
          <h1 className="text-lg tracking-wider font-bold ">
            Occupancy Trends <br />
            <span className="text-gray-400 font-medium text-sm">
              Averege Monthly Shit
            </span>
          </h1>
        </aside>

        <WingBarChart />
      </section>
      <aside className="card overflow-hidden ">
        <div className="flex justify-between">
          <h1 className="text-lg tracking-wider font-bold ">
            Room Status <br />
            <span className="text-gray-400 font-medium text-sm">
              Live Unit Distribution
            </span>
          </h1>
        </div>
        <OccupancyDonut />
      </aside>
    </main>
  );
}

function WingBarChart() {
  const chartOptions = {
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
    grid: {
      strokeDashArray: 4,
    },
    xaxis: {
      categories: ["Wing A", "Wing B", "Wing C", "Wing D"],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: 400,
      tickAmount: 4,
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} patients`,
      },
    },
  };

  const chartSeries = [
    {
      name: "Patients",
      data: [320, 180, 250, 390], // real-looking stats
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={220}
      />
    </div>
  );
}

const OccupancyDonut = () => {
  const series = [350, 100, 50];

  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Occupied", "Vacant", "Cleaning"],
    colors: ["#2563EB", "#10B981", "#F59E0B"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            value: {
              show: true,
              fontSize: "28px",
              fontWeight: 600,
              formatter: () => "500",
            },
            total: {
              show: true,
              label: "UNITS",
              fontSize: "12px",
              fontWeight: 500,
            },
          },
        },
      },
    },
  };

  return (
    <>
      {/* Donut */}
      <Chart options={options} series={series} type="donut" height={180} />

      {/* Values under donut */}
      <div style={{ marginTop: 12 }}>
        <LegendItem color="#2563EB" label="Occupied" value={350} />
        <LegendItem color="#10B981" label="Vacant" value={100} />
        <LegendItem color="#F59E0B" label="Cleaning" value={50} />
      </div>
    </>
  );
};

const LegendItem = ({ color, label, value }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
      padding: "8px 12px",
      borderRadius: 8,
      background: "#F9FAFB",
      fontSize: 14,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: color,
        }}
      />
      {label}
    </div>
    <strong>{value}</strong>
  </div>
);

export default Charts;
