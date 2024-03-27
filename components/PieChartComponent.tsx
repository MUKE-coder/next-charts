"use client";
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const PieChartComponent = () => {
  interface Customer {
    age: number;
    gender: string;
    count: number;
  }
  const customerData: Customer[] = [
    { age: 20, gender: "M", count: 30 },
    { age: 25, gender: "F", count: 50 },
    { age: 30, gender: "M", count: 40 },
    { age: 35, gender: "F", count: 60 },
    { age: 40, gender: "M", count: 20 },
  ];
  const COLORS = ["#ffc107", "#5aa4ac"]; // Customize colors as needed

  const ageGroups: Record<number, number> = customerData.reduce((acc, curr) => {
    const ageGroup = Math.floor(curr.age / 10) * 10;
    acc[ageGroup] = (acc[ageGroup] || 0) + curr.count;
    return acc;
  }, {} as Record<number, number>);

  const chartData: { name: string; value: number }[] = Object.entries(
    ageGroups
  ).map(([age, count]) => ({
    name: `${age} - ${age + 9}`,
    value: count,
  }));

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
