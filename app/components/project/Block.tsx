import { tasks } from '@/app/dummyData'
import { MoveDown, MoveUp } from 'lucide-react'
import React from 'react'

const Block = () => {
  return (
    <div className='space-y-5'>
      <button className="w-full text-[14px] font-bold text-[#0A1629] py-2.5 bg-[#E6EDF5] rounded-[20px]">
        Active Tasks
      </button>
      <div className='grid grid-cols-4 gap-4'>
        {
          tasks.map((task) => {
            return (
              <div key={task.id} className='bg-white flex-col gap-9 flex justify-between p-5'>
                <div className='flex flex-col'>
                  <p className='text-[#91929E] font-normal text-[12px]'>TS0001245</p>
                  <p className='text-[#0A1629] font-normal text-[14px]'>{task.taskName}</p>
                </div>
               
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className={`flex items-center text-[#0AC947] gap-1 ${task.priority === "medium" && "text-[#FFBD21]"}`}>
                      <p className='text-[10px] p-2 text-[#7D8592] rounded-[8px] bg-[#F4F9FD]'>{task.estimate}</p>
                      {task.priority === "medium" ?
                        <MoveUp className='w-[14px]' /> :
                        <MoveDown className='w-[14px]' />
                      }
                    </div>
                  </div>
                  <img src={task.image} className='w-[24px] rounded-[50%] object-cover h-[24px]' alt="" />
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='bg-[#E6EDF5] space-y-4 p-5'>
        <p className="text-[14px] font-bold text-center text-[#0A1629]">Backlogs</p>
        <div className='grid grid-cols-3 gap-4'>
          {
            tasks.map((task) => {
              return (
                <div key={task.id} className='bg-white flex-col gap-9 flex justify-between p-5'>
                  <div className='flex flex-col'>
                    <p className='text-[#91929E] font-normal text-[12px]'>TS0001245</p>
                    <p className='text-[#0A1629] font-normal text-[14px]'>{task.taskName}</p>
                  </div>
                
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <div className={`flex items-center text-[#0AC947] gap-1 ${task.priority === "medium" && "text-[#FFBD21]"}`}>
                        <p className='text-[10px] p-2 text-[#7D8592] rounded-[8px] bg-[#F4F9FD]'>{task.estimate}</p>
                        {task.priority === "medium" ?
                          <MoveUp className='w-[14px]' /> :
                          <MoveDown className='w-[14px]' />
                        }
                      </div>
                    </div>
                    <img src={task.image} className='w-[24px] rounded-[50%] object-cover h-[24px]' alt="" />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Block