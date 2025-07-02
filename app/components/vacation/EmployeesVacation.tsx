import { vacation } from '@/app/dummyData'
import React from 'react'

const EmployeesVacation = () => {
  return (
    <div className='flex flex-col gap-2.5'>
      {
        vacation.map((vacation) => {
          return (
            <div className='bg-white flex justify-between items-center p-4'>
              <div>
                <div className='flex items-center gap-2'>
                <img className='w-[42px] h-[42px] object-cover rounded-[50%]' src={vacation.image} alt="" />
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#0A1629] font-bold text-[14px]'>{vacation.name}</p>
                  <p className='text-[#91929E] font-normal text-[12px]'>{vacation.email}</p>
                </div>
              </div>
              </div>
              <div className='flex items-center justify-between gap-14'>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Vacations</p>
                  <p className='text-[#0A1629] font-normal capitalize text-[14px]'>{vacation.vacationsNum}</p>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Sick Leave</p>
                  <p className='text-[#0A1629] font-normal text-[14px]'>{vacation.sickLeave}</p>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Work remotely</p>
                  <p className='text-[#0A1629] font-normal text-[14px]'>{vacation.workRemote}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default EmployeesVacation