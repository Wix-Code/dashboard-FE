import { tasks } from '@/app/dummyData'
import { ArrowUp, ArrowUpDown, MoveDown, MoveUp } from 'lucide-react'
import React from 'react'

const Rectangle = () => {
  return (
    <div className='space-y-5'>
      <button className="w-full text-[14px] font-bold text-[#0A1629] py-2.5 bg-[#E6EDF5] rounded-[20px]">
        Active Tasks
      </button>
      <div className='flex flex-col gap-4'>
        {
          tasks.map((task) => {
            return (
              <div key={task.id} className='bg-white flex justify-between items-center p-4'>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Task Name</p>
                  <p className='text-[#0A1629] font-normal text-[12px]'>{task.taskName}</p>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Estimate</p>
                  <p className='text-[#0A1629] font-normal capitalize text-[12px]'>{task.estimate}</p>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Spent Time</p>
                  <p className='text-[#0A1629] font-normal text-[12px]'>{task.spentTime}</p>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Assignee</p>
                  <img src={task.image} className='w-[24px] rounded-[50%] object-cover h-[24px]' alt="" />
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Priority</p>
                  <div className={`flex items-center text-[#0AC947] gap-1 ${task.priority === "medium" && "text-[#FFBD21]"}`}>
                    {task.priority === "medium" ?
                      <MoveUp className='w-[14px]' /> :
                      <MoveDown className='w-[14px]' />
                    }
                    <p className='capitalize font-normal text-[12px]'>{task.priority}</p>
                  </div>
                </div>
                <button className={`py-1.5 px-3 text-[#7D8592] text-[10px] bg-[#7d859225] rounded-[20px] ${task.status === "In review" && "bg-[#c418e61e] text-[#C418E6]"} ${task.status === "In progress" && "bg-[#3f8cff25] text-[#3F8CFF]"} ${task.status === "Done" && "bg-[#E0F9F2] text-[#00D097]"}`}>
                  {task.status}
                </button>
              </div>
            )
          })
        }
      </div>
      <button className="w-full text-[14px] font-bold text-[#0A1629] py-2.5 bg-[#E6EDF5] rounded-[20px]">
        Backlog
      </button>
      <div className='flex flex-col gap-4'>
        {
          tasks.map((task) => {
            return (
              <div key={task.id} className='bg-white flex justify-between items-center p-4'>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Task Name</p>
                  <p className='text-[#0A1629] font-normal text-[12px]'>{task.taskName}</p>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Estimate</p>
                  <p className='text-[#0A1629] font-normal capitalize text-[12px]'>{task.estimate}</p>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Spent Time</p>
                  <p className='text-[#0A1629] font-normal text-[12px]'>{task.spentTime}</p>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Assignee</p>
                  <img src={task.image} className='w-[24px] rounded-[50%] object-cover h-[24px]' alt="" />
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#91929E] font-normal text-[12px]'>Priority</p>
                  <div className={`flex items-center text-[#0AC947] gap-1 ${task.priority === "medium" && "text-[#FFBD21]"}`}>
                    {task.priority === "medium" ?
                      <MoveUp className='w-[14px]' /> :
                      <MoveDown className='w-[14px]' />
                    }
                    <p className='capitalize font-normal text-[12px]'>{task.priority}</p>
                  </div>
                </div>
                <button className={`py-1.5 px-3 text-[#7D8592] text-[10px] bg-[#7d859225] rounded-[20px] ${task.status === "In review" && "bg-[#c418e61e] text-[#C418E6]"} ${task.status === "In progress" && "bg-[#3f8cff25] text-[#3F8CFF]"} ${task.status === "Done" && "bg-[#E0F9F2] text-[#00D097]"}`}>
                  {task.status}
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Rectangle