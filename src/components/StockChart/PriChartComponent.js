import React from "react";
import Chart from "./ChartPri";
import { getData } from "./Priutils";

import { TypeChooser } from "react-stockcharts/lib/helper";
// import { defaultScaleProvider } from 'react-stockcharts/lib/scale';

class PriChartComponent extends React.Component {
  componentDidMount() {
    getData().then((data) => {
      this.setState({ data });
    });
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return <Chart data={this.state.data.reverse().slice(0, 5).reverse()} />;
  }
}
export default PriChartComponent;
