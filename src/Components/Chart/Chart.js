import "./Chart.css";
import React from "react";
// First, make sure that you have ECharts for React installed and imported
import ECharts from "echarts-for-react";

const Chart = ({ options }) => {
  return <ECharts option={options} />;
};

export default Chart;
