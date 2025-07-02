import { workers } from '@/app/dummyData'
import React from 'react'

const Activity = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {
        workers.map((worker) => {
          return (
            <div className='p-2 flex flex-col gap-3 bg-white'>
              <div className='bg-[#F4F9FD] flex flex-col justify-center items-center gap-2.5 p-4'>
                <img className='w-[50px] h-[50px] object-cover rounded-[50%]' src={worker.image} alt="" />
                <p className='text-[#0A1629] font-bold text-[14px]'>{worker.name}</p>
                <p className='text-[#91929E] font-normal text-[12px]'>{worker.role}</p>
                <p className='text-[#7D8592] font-normal px-2 py-[1px] border-[1px] border-[#7D8592] text-[10px]'>{worker.level}</p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex flex-col text-center items-center gap-1'>
                  <p className='text-[#0A1629] font-bold text-[20px]'>0</p>
                  <p className='text-[#91929E] font-normal text-[12px]'>Backlog tasks</p>
                </div>
                <div className='flex flex-col text-center items-center gap-1'>
                  <p className='text-[#0A1629] font-bold text-[20px]'>6</p>
                  <p className='text-[#91929E] font-normal text-[12px]'>Tasks in Progress</p>
                </div>
                <div className='flex flex-col text-center items-center gap-1'>
                  <p className='text-[#0A1629] font-bold text-[20px]'>0</p>
                  <p className='text-[#91929E] font-normal text-[12px]'>Backlog tasks</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Activity