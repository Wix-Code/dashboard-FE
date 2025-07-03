import { requests } from '@/app/dummyData'
import React from 'react'

const MyVacations = () => {
  return (
    <div className='mt-5 space-y-4'>
      <div className='grid grid-cols-3 gap-4'>
        {
          requests.map((request) => {
            return(
              <div className='bg-white space-y-2 p-6'>
                <div className='w-[60px] mb-2 text-[#6D5DD3] border-[2px] border-[#6D5DD3] font-bold text-[18px] h-[60px] items-center justify-center flex rounded-[50%]'>
                  12
                </div>
                <p className='text-[#0A1629] font-bold text-[16px]'>{request.type}</p>
                <p className='text-[#91929E] font-normal text-[12px]'>42/50 days available</p>
              </div>
            )
          })
        }
      </div>
      <div className='space-y-4'>
        <p className='text-[#0A1629] font-bold text-[18px]'>My Requests</p>
        <div className='flex flex-col gap-4'>
          {
            requests.map((request) => {
              return (
                <div className='bg-white flex justify-between items-center p-4'>
                  <div className='flex flex-col gap-1.5'>
                    <p className='text-[#91929E] font-normal text-[12px]'>Request Type</p>
                    <div className='flex items-center gap-1.5'>
                      <button className={`bg-[#6D5DD3] w-2 h-2 rounded-[50%] ${request.type === "Vacation" && "bg-[#15C0E6]"} ${request.type === "Sick Leave" && "bg-[#F65160]"}`}></button>
                      <p className='text-[#0A1629] font-bold text-[12px]'>{request.type}</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <p className='text-[#91929E] font-normal text-[12px]'>Duration</p>
                    <p className='text-[#0A1629] font-normal capitalize text-[12px]'>{request.duration}</p>
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <p className='text-[#91929E] font-normal text-[12px]'>Start Day</p>
                    <p className='text-[#0A1629] font-normal text-[12px]'>{request.startDay}</p>
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <p className='text-[#91929E] font-normal text-[12px]'>End Day</p>
                    <p className='text-[#0A1629] font-normal text-[12px]'>{request.endDay}</p>
                  </div>
                  <button className={`py-1.5 px-3 text-white text-[10px] bg-[#00D097] rounded-[20px] ${request.status === "Pending" && "bg-[#FDC748]"}`}>
                    {request.status}
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MyVacations