import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 600,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 960,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1480,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1300,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1500,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 1430,
    amt: 1700,
  },
  {
    name: "Page G",
    uv: 590,
    pv: 600,
    amt: 1400,
  },
  {
    name: "Page h",
    uv: 868,
    pv: 960,
    amt: 1506,
  },
  {
    name: "Page i",
    uv: 1397,
    pv: 1480,
    amt: 989,
  },
  {
    name: "Page j",
    uv: 1480,
    pv: 1300,
    amt: 1228,
  },
  {
    name: "Page k",
    uv: 1520,
    pv: 1500,
    amt: 1100,
  },
  {
    name: "Page l",
    uv: 1400,
    pv: 1430,
    amt: 1700,
  },
  {
    name: "Page m",
    uv: 590,
    pv: 600,
    amt: 1400,
  },
  {
    name: "Page n",
    uv: 868,
    pv: 960,
    amt: 1506,
  },
  {
    name: "Page o",
    uv: 1397,
    pv: 1480,
    amt: 989,
  },
  {
    name: "Page p",
    uv: 1480,
    pv: 1300,
    amt: 1228,
  },
  {
    name: "Page q",
    uv: 1520,
    pv: 1500,
    amt: 1100,
  },
  {
    name: "Page r",
    uv: 1400,
    pv: 1430,
    amt: 1700,
  },
];

export default class RechartData extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/composed-chart-of-same-data-i67zd";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={30} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Line type="monotone" dataKey="pv" stroke="#0fa300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
