import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

export default function Chart({ formData }) {
  const data = formData.reduce((acc, { category }) => {
    const index = acc.findIndex((item) => item.name === category);
    if (index === -1) {
      acc.push({ name: category, value: 1 });
    } else {
      acc[index].value++;
    }
    return acc;
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer id="ResponsiveContainer">
        <PieChart>
          <Pie dataKey="value" data={data} fill="#000" label outerRadius={80} paddingAngle={5} labelLine={false}>
            {data.map((entry, index) => (
              <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
