"use client";

import { Plus } from "lucide-react";
import React, { useState } from "react";
import Lists from "../components/employees/Lists";
import Activity from "../components/employees/Activity";
import EmployeesVacation from "../components/vacation/EmployeesVacation";

const Page = () => {
  const [activeTab, setActiveTab] = useState<"employee" | "calendar">("employee");

  return (
    <div>
      <div className="flex mb-5 items-center justify-between">
        <p className="text-[26px] text-[#0A1629] font-bold">Vacation</p>

        <div className="bg-[#E6EDF5] flex p-1 items-center w-[400px] rounded-[40px] h-[40px]">
          <button
            onClick={() => setActiveTab("employee")}
            className={`w-full h-full cursor-pointer rounded-[30px] text-sm font-medium ${
              activeTab === "employee" ? "bg-[#3F8CFF] text-white" : "text-[#0A1629]"
            }`}
          >
            Employees' Vacations
          </button>
          <button
            onClick={() => setActiveTab("calendar")}
            className={`w-full h-full cursor-pointer rounded-[30px] text-sm font-medium ${
              activeTab === "calendar" ? "bg-[#3F8CFF] text-white" : "text-[#0A1629]"
            }`}
          >
            Calendar
          </button>
        </div>

        <button className="bg-[#3F8CFF] text-white text-[14px] font-bold px-4 py-2 rounded-[12px] flex items-center gap-1">
          <Plus className="w-[18px]" />
          Add Employee
        </button>
      </div>

      <div>
        {activeTab === "employee" ? <EmployeesVacation /> : <Activity />}
      </div>
    </div>
  );
};

export default Page;