import { ArrowUpIcon, Clock, Gift, MoveLeft, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { events } from '../dummyData'

const NearestEvent = () => {
  return (
    <div>
      <Link className='flex items-center gap-2' href="/">
        <MoveLeft className='w-[16px] text-[#3F8CFF]' />
        <p className='text-[14px] text-[#3F8CFF] font-bold'>Back to Dashboard</p>
      </Link>
      <div className='flex items-center justify-between'>
        <p className='text-[30px] text-[#0A1629] font-bold'>Nearest Events</p>
        <button className='bg-[#3F8CFF] text-white text-[14px] font-bold px-4 py-2.5 rounded-[12px] flex items-center gap-1'>
          <Plus className='w-[18px]' />
          Add Event
        </button>
      </div>
      <div className='grid mt-5 grid-cols-2 gap-4'>
        {
          events.map((event) => {
            return (
              <div className='p-4 bg-white'>
                <div className='flex flex-col px-4 py-2 border-[#DE92EB] border-l-[4px] gap-8'>
                  <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                      <Gift className='text-[#DE92EB] w-[18px]' />
                      <p className='text-[#0A1629] text-center text-[14px] font-bold'>{event.name}</p>
                    </div>
                    <ArrowUpIcon className='w-[20px] text-[#FFBD21]' />
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex text-[#91929E] text-[14px] font-normal items-center gap-[2px]'>
                      <p>{event.day}</p>
                      <p>{event.hour}</p>
                    </div>
                    <div className='py-1 px-2.5 flex items-center bg-[#F4F9FD] gap-2 rounded-[8px]'>
                      <Clock className='w-[16px] text-[#7D8592]' />
                      <p className='text-[12px] text-[#7D8592] font-bold'>4h</p>
                    </div>
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

export default NearestEvent