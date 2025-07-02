import { Calendar, Edit, MapPin } from 'lucide-react'
import React from 'react'

const Profile = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col p-3 gap-1'>
        <div className='flex justify-between mb-1 justify-items-end'>
          <img className='w-[54px] rounded-[50%] object-cover h-[54px]' src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" alt="" />
          <button className='w-[30px] flex items-center justify-center bg-[#F4F9FD] rounded-[10px] h-[30px]'>
            <Edit className='w-[18px] text-[#0A1629]' />
          </button>
        </div>
        <p className='text-[#0A1629] font-bold text-[18px]'>Ogbonna Wisdom</p>
        <p className='text-[#0A1629] font-normal text-[12px]'>Software Engineer</p>
      </div>
      <hr className='w-full h-[1px] border-none bg-[#D8E0F0]' />
      <div className='flex p-3 flex-col gap-2.5'>
        <p className='text-[#0A1629] font-bold text-[16px]'>Main Info</p>
        <div className='space-y-1'>
          <p className='text-[#7D8592] text-[12px] font-bold'>Position</p>
          <button className='w-full border-[1px] text-[#7D8592] text-[12px] font-normal rounded-[10px] border-[#D8E0F0] h-[40px] px-2'>Software Developer</button>
        </div>
        <div className='space-y-1'>
          <p className='text-[#7D8592] text-[12px] font-bold'>Company</p>
          <button className='w-full border-[1px] text-[#7D8592] text-[12px] font-normal rounded-[10px] border-[#D8E0F0] h-[40px] px-2'>Wixad Hub</button>
        </div>
         <div className='space-y-1'>
          <p className='text-[#7D8592] text-[12px] font-bold'>Location</p>
          <button className='w-full border-[1px] text-[#7D8592] flex items-center justify-between text-[12px] font-normal rounded-[10px] border-[#D8E0F0] h-[40px] px-2'>Abuja, Nigeria 
            <MapPin className='w-[16px]' />
          </button>
        </div>
         <div className='space-y-1'>
          <p className='text-[#7D8592] text-[12px] font-bold'>Birthday Date</p>
          <button className='w-full flex items-center justify-between border-[1px] text-[#7D8592] text-[12px] font-normal rounded-[10px] border-[#D8E0F0] h-[40px] px-2'>Feb 15, 2000
            <Calendar className='w-[16px]' />
          </button>
        </div>
      </div>
      <div className='flex p-3 flex-col gap-2.5'>
        <p className='text-[#0A1629] font-bold text-[16px]'>Contact Info</p>
        <div className='space-y-1'>
          <p className='text-[#7D8592] text-[12px] font-bold'>Email</p>
          <button className='w-full border-[1px] text-[#7D8592] text-[12px] font-normal rounded-[10px] border-[#D8E0F0] h-[40px] px-2'>ogbonna428alex@gmai.com</button>
        </div>
        <div className='space-y-1'>
          <p className='text-[#7D8592] text-[12px] font-bold'>Mobile Number</p>
          <button className='w-full border-[1px] text-[#7D8592] text-[12px] font-normal rounded-[10px] border-[#D8E0F0] h-[40px] px-2'>+234 812 682 9146</button>
        </div>
        <div className='space-y-1'>
          <p className='text-[#7D8592] text-[12px] font-bold'>Skype</p>
          <button className='w-full border-[1px] text-[#7D8592] text-[12px] font-normal rounded-[10px] border-[#D8E0F0] h-[40px] px-2'>WIS 2234</button>
        </div>
      </div>
    </div>
  )
}

export default Profile