import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { workers } from '../dummyData'

const Workload = () => {
  return (
    <div className='bg-white flex-[73%] p-4'>
      <div className='flex items-center justify-between'>
        <p className='text-[#0A1629] text-[18px] font-bold'>Workload</p>
        <Link className='text-[14px] flex items-center gap-1 text-[#3F8CFF]' href="/workload">
          <p>View all</p>
          <ChevronRightIcon className='w-[16px]' />
        </Link>
      </div>
      <div className='grid mt-5 gap-4 grid-cols-4'>
        {
          workers.map((worker) => {
            return (
              <div key={worker.id} className='flex rounded-3xl bg-[#F4F9FD] p-4 items-center justify-center flex-col gap-2'>
                <img className='rounded-[50%] h-[50px] object-cover w-[50px]' src={worker.image} alt="" />
                <p className='text-[#0A1629] text-center text-[14px] font-bold'>{worker.name}</p>
                <p className='text-[#0A1629] text-[14px] font-normal'>{worker.role}</p>
                <p className='text-[#7D8592] px-[5px] rounded-[6px] border-[#7D8592] border-[1px] text-[12px] font-semibold'>{worker.level}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Workload