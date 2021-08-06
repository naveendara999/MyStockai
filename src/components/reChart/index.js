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
  BarChart,
  ReferenceLine,
  Brush,
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 600,
//     amt: 1400,
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 960,
//     amt: 1506,
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1480,
//     amt: 989,
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1300,
//     amt: 1228,
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1500,
//     amt: 1100,
//   },
//   {
//     name: "Page F",
//     uv: null,
//     pv: 1430,
//     amt: 1700,
//   },
//   {
//     name: "Page G",
//     uv: null,
//     pv: 600,
//     amt: 1400,
//   },
//   {
//     name: "Page h",
//     uv: 868,
//     pv: 960,
//     amt: 1506,
//   },
//   {
//     name: "Page i",
//     uv: 1397,
//     pv: 1480,
//     amt: 989,
//   },
//   {
//     name: "Page j",
//     uv: 1480,
//     pv: 1300,
//     amt: 1228,
//   },
//   {
//     name: "Page k",
//     uv: 1520,
//     pv: 1500,
//     amt: 1100,
//   },
//   {
//     name: "Page l",
//     uv: 1400,
//     pv: 1430,
//     amt: 1700,
//   },
//   {
//     name: "Page m",
//     uv: 590,
//     pv: 600,
//     amt: 1400,
//   },
//   {
//     name: "Page n",
//     uv: 868,
//     pv: 960,
//     amt: 1506,
//   },
//   {
//     name: "Page o",
//     uv: null,
//     pv: 1480,
//     amt: 989,
//   },
//   {
//     name: "Page p",
//     uv: null,
//     pv: 1300,
//     amt: 1228,
//   },
//   {
//     name: "Page q",
//     uv: null,
//     pv: 1500,
//     amt: 1100,
//   },
//   {
//     name: "Page r",
//     uv: null,
//     pv: 1430,
//     amt: 1700,
//   },
// ];

const RechartData = (props) => {
  const data = props.data;
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
        <XAxis dataKey="date" scale="band" />
        <YAxis dataKey="high" />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "10px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="date" markerWidth={50} height={30} stroke="#8884d8" />
        <Area
          type="monotone"
          dataKey="predicted_price"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="open" barSize={30} fill="#413ea0" />
        <Line type="monotone" dataKey="open" stroke="#ff7300" />
        <Line type="monotone" dataKey="predicted_price" stroke="#0fa300" />
      </ComposedChart>
    </ResponsiveContainer>
    // <ResponsiveContainer width="100%" height="100%">
    //   <BarChart
    //     width={500}
    //     height={300}
    //     data={data}
    //     margin={{
    //       top: 5,
    //       right: 30,
    //       left: 20,
    //       bottom: 5,
    //     }}
    //   >
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     <Tooltip />
    //     <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "10px" }} />
    //     <ReferenceLine y={0} stroke="#000" />
    //     <Brush dataKey="name" height={30} stroke="#8884d8" />
    //     <Bar dataKey="uv" barSize={30} fill="#413ea0" />
    //     <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    //   </BarChart>
    // </ResponsiveContainer>
  );
};

export default RechartData;
