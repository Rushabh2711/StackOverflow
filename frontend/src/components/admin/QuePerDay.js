import { Grid, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { BarChart, Bar, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  {
    name: "21 April",
    questions: 2400,
  },
  {
    name: "22 April",
    questions: 1398,
  },
  {
    name: "23 April",
    questions: 9800,
  },
  {
    name: "24 April",
    questions: 3908,
  },
  {
    name: "25 April",
    questions: 4800,
  },
  {
    name: "26 April",
    questions: 3800,
  },
  {
    name: "27 April",
    questions: 4300,
  },
];

export default function QusPerDay() {
  return (
    <Grid container spacing={1}>
        <Typography
          sx={{ fontSize: 20, color: "#212121", align: "left" }}
          color="text.secondary"
          gutterBottom
          align="left"
        >
          Number of questions posted per day
        </Typography>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="questions" fill="#8884d8" />
      </BarChart>
    </Grid>
  );
}
