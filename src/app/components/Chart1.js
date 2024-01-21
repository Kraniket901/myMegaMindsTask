'use client';

import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        }
      },
      series: [
        {
          name: "Sales in 2020",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 90, 89, 83, 95]
        },
        {
          name: "Sales in 2021",
          data: [45, 67, 50, 30, 29, 43, 45, 41, 27, 45, 32, 40]
        },
        {
          name: "Sales in 2022",
          data: [3, 6, 5, 20, 19, 13, 4, 1, 4, 12, 20, 21]
        },
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width={window.innerWidth < 500?"250px":"600px"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chart1;