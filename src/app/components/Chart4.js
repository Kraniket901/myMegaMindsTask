'use client';

import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
      series: [5, 95],
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        labels: ['Out of Stock', 'In Stock'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
    };
  }

  render() {
    return (
      <div>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width="500"
            />
      </div>
    );
  }
}

export default Chart4;