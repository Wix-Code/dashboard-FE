import { workers } from '@/app/dummyData'
import { EllipsisVertical } from 'lucide-react'
import React from 'react'

const Lists = () => {
  return (
    <div className='flex flex-col gap-2.5'>
      {
        workers.map((worker) => {
          return (
            <div className='bg-white flex justify-between items-center p-4'>
              <div className='flex items-center gap-2'>
                <img className='w-[42px] h-[42px] object-cover rounded-[50%]' src={worker.image} alt="" />
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#0A1629] font-bold text-[14px]'>{worker.name}</p>
                  <p className='text-[#91929E] font-normal text-[12px]'>{worker.email}</p>
                </div>
              </div>
              <div className='flex flex-col gap-1.5'>
                <p className='text-[#91929E] font-normal text-[12px]'>Gender</p>
                <p className='text-[#0A1629] font-normal capitalize text-[14px]'>{worker.gender}</p>
              </div>
              <div className='flex flex-col gap-1.5'>
                <p className='text-[#91929E] font-normal text-[12px]'>Birthday</p>
                <p className='text-[#0A1629] font-normal text-[14px]'>{worker.dob}</p>
              </div>
              <div className='flex flex-col gap-1.5'>
                <p className='text-[#91929E] font-normal text-[12px]'>Full age</p>
                <p className='text-[#0A1629] font-normal text-[14px]'>{worker.fullAge}</p>
              </div>
              <div className='flex flex-col gap-1.5'>
                <p className='text-[#91929E] font-normal text-[12px]'>Position</p>
                <div className='flex items-center gap-4'>
                  <p className='text-[#0A1629] font-normal text-[14px]'>{worker.role}</p>
                  <p className='text-[#7D8592] font-normal px-2 py-[1px] border-[1px] border-[#7D8592] text-[10px]'>{worker.level}</p>
                </div>
              </div>
              <button className='py-1.5 px-1 bg-[#F4F9FD] rounded-[8px]'>
                <EllipsisVertical className='w-[18px] text-[#979797]' />
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Lists