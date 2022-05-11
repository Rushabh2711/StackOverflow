import { Grid } from "@mui/material";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Typography } from "@mui/material";

const data = [
  { name: "Tag A", value: 400 },
  { name: "Tag B", value: 300 },
  { name: "Tag C", value: 300 },
  { name: "Tag D", value: 200 },
  { name: "Tag E", value: 400 },
  { name: "Tag F", value: 300 },
  { name: "Tag G", value: 300 },
  { name: "Tag H", value: 200 },
  { name: "Tag I", value: 300 },
  { name: "Tag J", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PopularTag() {
  return (
    <Grid container spacing={1}>
    <Typography
      sx={{ fontSize: 20, color: "#212121", align: "left" }}
      color="text.secondary"
      gutterBottom
      align="left"
    >
     Top 10 most used tags.
    </Typography>
            <PieChart width={600} height={600}>
            <Pie
            
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={120}
                outerRadius={200}
                paddingAngle={5}
                fill="#82ca9d"
                label
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                
            </Pie>
            <Tooltip/>
            </PieChart>
        </Grid>
  );
}
