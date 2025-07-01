import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='text-[30px] text-[#0A1629] font-bold'>Employees (28)</p>
        <button className='bg-[#3F8CFF] text-white text-[14px] font-bold px-4 py-2.5 rounded-[12px] flex items-center gap-1'>
          <Plus className='w-[18px]' />
          Add Employee
        </button>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default page