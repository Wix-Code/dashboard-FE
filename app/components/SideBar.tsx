'use client'

import React from 'react'
import { sideBarLinks } from '../dummyData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogIn, MessageCircle } from 'lucide-react'
import HelpRequestModal from './ui/HelpRequestModal'

const SideBar = () => {
  const pathname = usePathname() // current route
  const isActive = pathname

  return (
    <div className={`flex flex-[15%] hide-scrollbar overflow-y-scroll h-[100vh] sticky top-0 bg-white flex-col py-3 justify-between gap-4`}>
      <div className='ml-3'>
        <img className='w-[40px] h-[40px]' src="./pic/com.png" alt="" />
        <div className='flex mt-2 flex-col gap-2'>
          {
            sideBarLinks.map((link) => {
              const isActive = pathname === link.link;

              return (
                <Link href={link.link} key={link.id}>
                  <div className={`
                    flex gap-4 pl-2 pr-${isActive ? '0' : '2'} py-2 items-center rounded-md cursor-pointer relative transition-all duration-200
                    ${isActive ? 'bg-[#EAF2FF] text-[#3F8CFF]' : 'bg-white text-[#7D8592]'}
                  `}>
                    {/* Blue right border */}
                    {isActive && (
                      <div className="absolute right-0 top-0 h-full w-[4px] bg-[#3F8CFF] rounded-l" />
                    )}
                    <p className={`${isActive ? 'text-[#3F8CFF]' : 'text-[#7D8592]'}`}>{link.icon}</p>
                    <p className={`text-[14px] font-semibold ${isActive ? 'text-[#3F8CFF]' : 'text-[#7D8592]'}`}>{link.name}</p>
                  </div>
                </Link>
              );
            })
          }
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-3'>
        <div className='flex gap-2 flex-col items-center justify-center'>
          <img className='w-[80px]' src="./pic/illus.png" alt="" />
          <HelpRequestModal>
            <button
              className='flex bg-[#3F8CFF] cursor-pointer px-3 py-1 rounded-[10px] text-[14px] text-white font-bold gap-2 items-center'
            >
              <MessageCircle className='w-[14px]' />
              Support
            </button>
          </HelpRequestModal>
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