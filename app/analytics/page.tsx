"use client";
import { ReUsableBarChart } from "@/components/ReUsableBarChart";
import ReUsableLineGraph from "@/components/ReUsableLineGraph";
import ReUsablePieChart from "@/components/ReUsablePieChart";
// analytics.tsx
import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// Interface for product data
interface Product {
  category: string;
  sales: number;
}

// Interface for traffic and sales data
interface TrafficSales {
  month: string;
  traffic: number;
  sales: number;
}

// Interface for customer acquisition data
interface AcquisitionChannel {
  channel: string;
  newCustomers: number;
}

// Interface for inventory data
interface InventoryItem {
  product: string;
  stock: number;
}
const pieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
// Example data (replace with your actual data)
const productData: Product[] = [
  { category: "Shirts", sales: 200 },
  { category: "Pants", sales: 150 },
  { category: "Dresses", sales: 180 },
  { category: "Shoes", sales: 120 },
  { category: "Accessories", sales: 80 },
];

const trafficSalesData: TrafficSales[] = [
  { month: "Jan", traffic: 10000, sales: 800 },
  { month: "Feb", traffic: 12000, sales: 1000 },
  { month: "Mar", traffic: 15000, sales: 1200 },
  { month: "Apr", traffic: 8000, sales: 700 },
  { month: "May", traffic: 9000, sales: 850 },
];

const acquisitionData: AcquisitionChannel[] = [
  { channel: "Organic Search", newCustomers: 50 },
  { channel: "Email Marketing", newCustomers: 30 },
  { channel: "Social Media", newCustomers: 20 },
  { channel: "Paid Advertising", newCustomers: 15 },
];

const inventoryData: InventoryItem[] = [
  { product: "Shirt A", stock: 50 },
  { product: "Shirt B", stock: 30 },
  { product: "Pants", stock: 25 },
  { product: "Dress", stock: 10 },
];

const AnalyticsPage = () => {
  return (
    <div className="py-8 ">
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        E-commerce Analytics
      </h1>
      {/* Product Performance */}
      <div className="grid grid-cols-2 max-w-6xl mx-auto py-8">
        <ReUsableBarChart
          BarDataKey="sales"
          XAxisDataKey="category"
          data={productData}
          title="Product Performance"
        />
        <ReUsableBarChart
          BarDataKey="newCustomers"
          XAxisDataKey="channel"
          data={acquisitionData}
          title="Customer Acquisition"
          BarChartColor="#8884d8"
        />

        <ReUsableBarChart
          BarDataKey="stock"
          XAxisDataKey="product"
          data={inventoryData}
          title="Inventory Management"
          BarChartColor="#c53333"
        />
        <ReUsableLineGraph
          data={trafficSalesData}
          XAxisDataKey="month"
          LineOneDataKey="traffic"
          LineTwoDataKey="sales"
          title="Sales Trends"
        />
        <ReUsablePieChart
          title="Customer"
          data={pieChartData}
          colors={COLORS}
        />
      </div>
    </div>
  );
};

export default AnalyticsPage;
