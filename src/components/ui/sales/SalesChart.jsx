"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", total: 4500 },
  { name: "Feb", total: 3800 },
  { name: "Mar", total: 5200 },
  { name: "Apr", total: 4700 },
  { name: "May", total: 6100 },
  { name: "Jun", total: 5800 },
  { name: "Jul", total: 7200 },
  { name: "Aug", total: 6900 },
  { name: "Sep", total: 7500 },
  { name: "Oct", total: 8100 },
  { name: "Nov", total: 7800 },
  { name: "Dec", total: 9200 },
];

export default function SalesChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>Monthly sales for the year</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
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
            <Bar dataKey="total" fill="#0B5393" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
