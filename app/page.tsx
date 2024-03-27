"use client";
import { Overview } from "@/components/BarChartComponent";
import PieChartComponent from "@/components/PieChartComponent";
import TrafficSalesChart from "@/components/TrafficSales";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-3 max-w-6xl mx-auto">
      <Overview />
      <PieChartComponent />
      <TrafficSalesChart />
    </main>
  );
}
