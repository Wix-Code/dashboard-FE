import { ChevronDown } from 'lucide-react'
import React from 'react'

const SideBar = () => {
  return (
    <div className='bg-white'>
      <div className='flex border-b-[1px] p-4 border-[#E4E6E8] items-center gap-3'>
        <p className='font-bold text-[#0A1629] text-[14px]'>Current Projects</p>
        <ChevronDown className='w-[14px] text-[#0A1629]' />
      </div>
    </div>
  )
}

export default SideBar