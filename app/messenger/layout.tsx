// app/messenger/layout.tsx
import React from "react";
import Link from "next/link";
import { notifications } from "../dummyData";
import { Plus, Search } from "lucide-react";

const chatList = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
];

export default function MessengerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex sticky top-0">
      <aside className="w-[300px] border-r sticky top-0 overflow-y-scroll hide-scrollbar bg-white">
        <div className="flex border-b-[1px] border-[#E6EBF5] px-4 h-[70px] justify-between items-center">
          <p className="font-bold text-[#0A1629] text-[16px]">Conversations</p>
          <div className="flex gap-3">
            <button className="h-[35px] bg-[#F4F9FD] flex justify-center items-center rounded-[10px] w-[35px]">
              <Search className="w-[18px]" />
            </button>
            <button className="h-[35px] bg-[#3F8CFF] text-[#FFFFFF] flex justify-center items-center rounded-[10px] w-[35px]">
              <Plus className="w-[18px]" />
            </button>
          </div>
        </div>
        <div className="space-y-2 px-1.5 py-4">
          {notifications.map((chat) => (
            <Link
              key={chat.id}
              href={`/messenger/${chat.id}`}
              className="block p-2 rounded hover:bg-[#F4F9FD] transition"
            >
              <div className="flex gap-2">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    className="w-full h-full object-cover" 
                    src={chat.image} 
                    alt="" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p className="text-[#0A1629] font-bold text-[14px]">{chat.name}</p>
                    <p className="text-[#7D8592] font-normal text-[10px]">{chat.time}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#91929E] font-normal text-[10px]">{chat.message}</p>
                    <div>
                      <p className="text-[#FFFFFF] w-[20px] flex justify-center items-center h-[20px] rounded-[50%] bg-[#F65160] font-bold text-[8px]">21</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}