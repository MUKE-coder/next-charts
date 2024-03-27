import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TrafficSalesChart = () => {
  const trafficSalesData = [
    { month: "Jan", traffic: 10000, sales: 800 },
    { month: "Feb", traffic: 12000, sales: 1000 },
    { month: "Mar", traffic: 15000, sales: 1200 },
    { month: "Apr", traffic: 8000, sales: 700 },
    { month: "May", traffic: 9000, sales: 850 },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={trafficSalesData}>
        <XAxis dataKey="month" />
        <YAxis></YAxis>
        <Tooltip />
        <Line type="monotone" dataKey="traffic" stroke="#387044" dot={false} />
        <Line type="monotone" dataKey="sales" stroke="#ffc107" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrafficSalesChart;
