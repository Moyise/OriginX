import React from "react";
import DoughnutChart from "../../charts/DoughnutChart";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function DashboardCard06() {
  const chartData = {
    labels: ["United States", "Italy", "Other"],
    datasets: [
      {
        label: "Top Countries",
        data: [35, 30, 35],
        backgroundColor: [
          tailwindConfig().theme.colors.yellow[400],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.purple[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.yellow[500],
          tailwindConfig().theme.colors.blue[800],
          tailwindConfig().theme.colors.purple[900],
        ],
        hoverBorderColor: tailwindConfig().theme.colors.gray[400],
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-black shadow-lg rounded-sm border border-gray-900">
      <header className="px-5 py-4 border-b border-gray-800">
        <h2 className="font-semibold text-white">Top Countries</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard06;
