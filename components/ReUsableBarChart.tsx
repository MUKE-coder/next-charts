"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const productsData = [
  { category: "Shirts", sales: 200 },
  { category: "Pants", sales: 150 },
  { category: "Dresses", sales: 180 },
  { category: "Shoes", sales: 120 },
  { category: "Accessories", sales: 80 },
];

export function ReUsableBarChart({
  data,
  XAxisDataKey,
  BarDataKey,
  BarChartColor = "#ffc107",
  title,
}: {
  title: string;
  data: any;
  XAxisDataKey: string;
  BarDataKey: string;
  BarChartColor?: string;
}) {
  return (
    <div className="">
      <h3 className="px-6 py-4 scroll-m-20 text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%" aspect={500 / 300}>
        <BarChart data={data}>
          <XAxis
            dataKey={XAxisDataKey}
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip />
          <Bar
            dataKey={BarDataKey}
            fill={BarChartColor}
            radius={[4, 4, 0, 0]}
            className="fill-primary"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
