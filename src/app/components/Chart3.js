'use client';

import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June']
        }
      },
      series: [
        {
          name: "Sales in 2020",
          data: [19, 14, 15, 17, 15, 16]
        }
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
              type="bar"
              width={window.innerWidth < 500?"250px":"600px"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chart3;