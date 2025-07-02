import { workers } from '@/app/dummyData'
import React from 'react'

const Teams = () => {
  return (
    <div>
      <div className='grid mt-5 gap-4 grid-cols-4'>
        {
          workers.map((worker) => {
            return (
              <div key={worker.id} className='flex rounded-3xl bg-[#FFFFFF] p-4 items-center justify-center flex-col gap-2'>
                <img className='rounded-[50%] h-[50px] object-cover w-[50px]' src={worker.image} alt="" />
                <p className='text-[#0A1629] text-center text-[14px] font-bold'>{worker.name}</p>
                <p className='text-[#0A1629] text-[12px] font-normal'>{worker.role}</p>
                <p className='text-[#7D8592] px-[5px] rounded-[6px] border-[#7D8592] border-[1px] text-[10px] font-semibold'>{worker.level}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Teams