import React from 'react'
import { sideBarLinks } from '../dummyData'
import Link from 'next/link'
import { LogIn, MessageCircle } from 'lucide-react'

const SideBar = () => {
  return (
    <div className='flex flex-[15%] overflow-y-scroll h-[100vh] sticky top-3 bg-white flex-col py-5 justify-between px-3 gap-4'>
      <div>
        <img className='w-[40px] h-[40px]' src="./pic/com.png" alt="" />
        <div className='flex mt-2 flex-col gap-2'>
          {
            sideBarLinks.map((link) => {
              return (
                <Link href={link.link}>
                  <div className='flex gap-4 items-center' key={link.id}>
                    <p className='text-[#7D8592]'>{link.icon}</p>
                    <p className='text-[#7D8592] text-[14px] font-semibold'>{link.name}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-3'>
        <div className='flex gap-2 flex-col items-center justify-center'>
          <img className='w-[100px]' src="./pic/illus.png" alt="" />
          <Link className='flex bg-[#3F8CFF] px-3 py-1 rounded-[10px] text-[14px] text-white font-bold gap-2 items-center' href="/">
            <MessageCircle className='w-[14px]' />
            Support
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <LogIn className='w-[18px]' />
          <p className='text-[14px] text-[#7D8592] font-semibold'>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar