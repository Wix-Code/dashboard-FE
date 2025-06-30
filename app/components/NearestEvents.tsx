import { ArrowUpIcon, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { events } from '../dummyData'

const NearestEvents = () => {
  return (
    <div className='flex-[27%] p-2 bg-white'>
      <div className='flex items-center justify-between'>
        <p className='text-[#0A1629] text-[18px] font-bold'>Nearest Events</p>
        <Link className='text-[14px] flex items-center gap-1 text-[#3F8CFF]' href="/workload">
          <p>View all</p>
          <ChevronRightIcon className='w-[16px]' />
        </Link>
      </div>
      <div className='flex mt-5 flex-col gap-4'>
        {
          events.map((event) => {
            return (
              <div className='flex flex-col px-4 py-2 border-[#DE92EB] border-l-[4px] gap-8'>
                <div className='flex justify-between'>
                  <p className='text-[#0A1629] text-center text-[14px] font-bold'>{event.name}</p>
                  <ArrowUpIcon className='w-[20px]' />
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex text-[#91929E] text-[14px] font-normal items-center gap-[2px]'>
                    <p>{event.day}</p>
                    <p>{event.hour}</p>
                  </div>
                  <div>

                    <p className='text-[12px] text-[#7D8592] font-bold'>4h</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NearestEvents