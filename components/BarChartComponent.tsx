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

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={500 / 300}>
      <BarChart data={productsData}>
        <XAxis
          dataKey="category"
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
          dataKey="sales"
          fill="#ffc107"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
