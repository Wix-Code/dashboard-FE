import React from 'react'
import Workload from './components/Workload'
import NearestEvents from './components/NearestEvents'

export default function page() {
  return (
    <div className='hide-scrollbar'>
      <div></div>
      <div>
        <p className='text-[#7D8592] text-[14px] font-medium'>Welcome back, Wisdom!</p>
        <div className=''>
          <p className='text-[#0A1629] text-[34px] font-bold'>Dashboard</p>
          <div className='flex mt-6 gap-2'>
            <Workload />
            <NearestEvents />
          </div>
          <div className='flex mt-6 gap-2'>
            <Workload />
            <NearestEvents />
          </div>
          
        </div>
      </div>
    </div>
  )
}
