"use client";

import { AlignStartHorizontal, Funnel, Menu, Plus } from 'lucide-react';
import React, { useState } from 'react';
import SideBar from '../components/project/SideBar';
import Rectangle from '../components/project/Rectangle';
import Block from '../components/project/Block';
import Page from '../components/project/Page';
import DialogDemo from '../components/ui/Dialog';
import NotificationModal from '../components/ui/NotificationModal';
import CalendarModal from '../components/ui/CalendarModal';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState<"rectangle" | "block" | "page">("rectangle");

  return (
    <div>
      <div className="flex mb-5 items-center justify-between">
        <p className="text-[26px] text-[#0A1629] font-bold">Projects</p>
        <button className="bg-[#3F8CFF] cursor-pointer text-white text-[14px] font-bold px-4 py-2 rounded-[12px] flex items-center gap-1">
          <Plus className="w-[18px]" />
          Add Project
        </button>
      </div>

      <div className="flex gap-4">
        <div className="flex-[24%]">
          <SideBar />
        </div>

        <div className="flex-[86%] space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-[#0A1629] text-[16px] font-bold">Tasks</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTab("rectangle")}
                 className={`bg-[#ffffff] text-[#0A1629] cursor-pointer text-[14px] font-bold w-8 h-8 rounded-[10px] flex items-center justify-center gap-1 ${
                  activeTab === "rectangle" && "border-[1px] border-[#3F8CFF] text-[#3F8CFF]"
                }`}
              >
                <Menu className="w-[18px]" />
              </button>

              <button
                onClick={() => setActiveTab("block")}
                className={`bg-[#ffffff] text-[#0A1629] cursor-pointer text-[14px] font-bold w-8 h-8 rounded-[10px] flex items-center justify-center gap-1 ${
                  activeTab === "block" && "border-[1px] border-[#3F8CFF] text-[#3F8CFF]"
                }`}
              >
                <AlignStartHorizontal className="w-[18px]" />
              </button>

              <button
                onClick={() => setActiveTab("page")}
                className={`bg-[#ffffff] text-[#0A1629] text-[14px] cursor-pointer font-bold w-8 h-8 rounded-[10px] flex items-center justify-center gap-1 ${
                  activeTab === "page" && "border-[1px] border-[#3F8CFF] text-[#3F8CFF]"
                }`}
              >
                <AlignStartHorizontal className="w-[18px]" />
              </button>
            </div>
            <CalendarModal>
              <button className="bg-[#ffffff] text-[#0A1629] text-[14px] font-bold w-8 h-8 rounded-[10px] flex items-center justify-center gap-1">
                <Funnel className="w-[18px]" />
              </button>
            
            </CalendarModal>
          </div>

          <div>
            {activeTab === "rectangle" ? (
              <Rectangle />
            ) : activeTab === "block" ? (
              <Block />
            ) : (
              <Page />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
