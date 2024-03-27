import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ReUsableLineGraph = ({
  data,
  XAxisDataKey,
  LineOneDataKey,
  LineTwoStroke,
  LineOneStroke = "#387044",
  LineTwoDataKey = "#ffc107",
  title,
}: {
  title: string;
  data: any;
  XAxisDataKey: string;
  LineOneDataKey: string;
  LineTwoDataKey: string;
  LineTwoStroke?: string;
  LineOneStroke?: string;
}) => {
  const trafficSalesData = [
    { month: "Jan", traffic: 10000, sales: 800 },
    { month: "Feb", traffic: 12000, sales: 1000 },
    { month: "Mar", traffic: 15000, sales: 1200 },
    { month: "Apr", traffic: 8000, sales: 700 },
    { month: "May", traffic: 9000, sales: 850 },
  ];
  return (
    <div className="">
      <h3 className="px-6 py-4 scroll-m-20 text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey={XAxisDataKey} />
          <YAxis></YAxis>
          <Tooltip />
          <Line
            type="monotone"
            dataKey={LineOneDataKey}
            stroke={LineOneStroke}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey={LineTwoDataKey}
            stroke={LineTwoStroke}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReUsableLineGraph;
