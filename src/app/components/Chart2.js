'use client';

import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
      series: [20, 5, 75],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Processing', 'Shipped', 'Delivered'],
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
              type="pie"
              width={window.innerWidth < 500?"300px":"500px"}
            />
      </div>
    );
  }
}

export default Chart2;