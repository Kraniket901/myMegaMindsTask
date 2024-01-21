import React from 'react'
import Image from 'next/image'
import Dropdown from './Dropdown'

const Sidebar = () => {
  return (
    <div className='w-full md:w-[400px] lg:w-[400px] flex flex-col overflow-y-auto bg-[#1f2937]'>
          <div>
            <div className='flex bg-[#374050] rounded-md bounded-lg m-5 p-3'>
              <div className='flex flex-col justify-center'>
                <Image alt='profile-pic' src="https://space4water.org/s4w/web/sites/default/files/styles/square/public/images/person/2021-09/Arjen-Haag.jpg?itok=qT3r7_8P" width={70} height={70} className='rounded-full' />
              </div>
              <div className='flex flex-col justify-center pl-4'>
                <h3 className='text-xl font-semibold'>Jhon Doe</h3>
                <p>superadmin@flipkart.com</p>
              </div>
            </div>
            <div className='m-5 p-3 text-xl overflow-y-auto'>
              <Dropdown/>
            </div>
          </div>
          <div className='flex flex-col bg-[#374050] rounded-lg m-5 p-3'>
            <h5 className='text-lg'>Developed with Passion by :</h5>
            <h3 className='text-2xl font-semibold'>Aniket Kumar</h3>
            <p>kraniket123654@gmail.com</p>
          </div>
        </div>
  )
}

export default Sidebar