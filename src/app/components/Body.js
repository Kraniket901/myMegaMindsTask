'use client';
import React from 'react'
import { IoHelpOutline } from 'react-icons/io5';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';
import Sidebar from './Sidebar';

const boxProp = [
  {
    title: "Total Sales Amount",
    price: "$1,384,604",
    color: "#7c3bec"
  },
  {
    title: "Total Orders",
    price: "36",
    color: "#ee4445"
  },
  {
    title: "Total Products",
    price: "96",
    color: "#f49e0a"
  }, {
    title: "Total Users",
    price: "11",
    color: "#10b880"
  }
];

const Body = () => {
  return (
    <>
      <div className='flex h-full flex-col lg:flex-row'>
        <div>
        <Sidebar/>
        </div>
        <div className='p-5 lg:px-[80px] flex flex-col w-full'>
          <div className='flex justify-between flex-wrap items-center'>
            {
              boxProp.map((item, id) => (
                <div
                  key={id}
                  style={{ backgroundColor: item.color }}
                  className="w-[300px] rounded-lg px-5 py-9 mb-2"
                >
                  <p className="text-xl font-medium">{item.title}</p>
                  <h3 className="text-4xl font-semibold mt-2">{item.price}</h3>
                </div>
              ))
            }
          </div>
          <div className='flex justify-center lg:justify-between my-2 flex-wrap'>
            <div className='bg-white p-0 lg:p-4 rounded-lg my-2'>
            <Chart1/>
            </div>
            <div className='bg-white rounded-lg h-full flex flex-col justify-center items-center my-2'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-600'>ORDER STATUS</h2>
              <Chart2/>
            </div>
          </div>
          <div className='flex justify-center lg:justify-between items-center flex-wrap'>
            <div className='bg-white p-0 lg:p-4 rounded-lg my-2'>
              <Chart3/>
            </div>
            <div className='bg-white rounded-lg h-full flex flex-col justify-center items-center my-2'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-600' >STOCK STATUS</h2>
              <Chart4/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body