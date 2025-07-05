import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='bg-white rounded px-3 text-[#7D8592] py-1 flex items-center gap-2 w-[380px] h-[40px]'>
      <Search className='w-[18px]' />
      <input type="text" className='text-[14px] outline-none w-full' placeholder='Search' />
    </div>
  )
}

export default SearchBar