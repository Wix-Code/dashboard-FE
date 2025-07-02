"use client"

import { Plus, Settings } from 'lucide-react'
import React, { useState } from 'react'
import Profile from '../components/profile/Profile'
import MyVacations from '../components/profile/MyVacations'
import Teams from '../components/profile/Teams'
import Projects from '../components/profile/Projects'

const page = () => {
  const [activeTab, setActiveTab] = useState<"project" | "team" | "vacations">("project")
  return (
    <div>
      <div className="flex mb-5 items-center justify-between">
        <p className="text-[26px] text-[#0A1629] font-bold">My Profile</p>
        <button className="bg-[#ffffff] text-[#0A1629] text-[14px] font-bold w-8 h-8 rounded-[10px] flex items-center justify-center gap-1">
          <Settings className="w-[18px]" />
        </button>
      </div>
      <div className='flex gap-4'>
        <div className='flex-[24%]'>
          <Profile />
        </div>
        <div className='flex-[86%]'>
          <div className='flex items-center justify-between'>
            <div className="bg-[#E6EDF5] flex p-1 items-center w-[380px] rounded-[40px] h-[40px]">
              <button
                onClick={() => setActiveTab("project")}
                className={`w-full h-full cursor-pointer rounded-[30px] px-1 text-sm font-medium ${
                  activeTab === "project" ? "bg-[#3F8CFF] text-white" : "text-[#0A1629]"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`w-full h-full cursor-pointer px-1 rounded-[30px] text-sm font-medium ${
                  activeTab === "team" ? "bg-[#3F8CFF] text-white" : "text-[#0A1629]"
                }`}
              >
                Team
              </button>
              <button
                onClick={() => setActiveTab("vacations")}
                className={`w-full h-full cursor-pointer rounded-[30px] px-2 text-sm font-medium ${
                  activeTab === "vacations" ? "bg-[#3F8CFF] text-white" : "text-[#0A1629]"
                }`}
              >
                My vacations
              </button>
            </div>
            {
              activeTab === "vacations" && (
                <button className="bg-[#3F8CFF] text-white text-[14px] font-bold px-3.5 h-[40px] rounded-[12px] flex items-center gap-1">
                  <Plus className="w-[18px]" />
                  Add Request
                </button>
              )
            }
          </div>
          <div>
            {
              activeTab === "project" ? (
                <Projects />
              ) : activeTab === "team" ? (
                  <Teams />
                ) : (
                  <MyVacations />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default page