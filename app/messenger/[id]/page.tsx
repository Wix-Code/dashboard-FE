// app/messenger/[id]/page.tsx
"use client"
import { EllipsisVertical, Pin, Search } from "lucide-react";
import { useParams } from "next/navigation";

const ChatPage = () => {
  const params = useParams();
  const chatId = params?.id;

  return (
    <div className="bg-white">
      <div className="flex items-center h-[70px] px-4 border-b-[1px] border-[#E6EBF5] justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden flex-shrink-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" 
              alt="" 
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#0A1629] font-bold text-[16px]">Ogbonna Wisdom</p>
            <p className="text-[#7D8592] font-normal text-[12px]">8 members</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="h-[35px] bg-[#F4F9FD] flex justify-center items-center rounded-[10px] w-[35px]">
            <Search className="w-[18px]" />
          </button>
          <button className="h-[35px] bg-[#3F8CFF] text-[#FFFFFF] flex justify-center items-center rounded-[10px] w-[35px]">
            <Pin className="w-[18px]" />
          </button>
          <button className="h-[35px] bg-[#3F8CFF] text-[#FFFFFF] flex justify-center items-center rounded-[10px] w-[35px]">
            <EllipsisVertical className="w-[18px]" />
          </button>
        </div>
      </div>
      <h1 className="text-xl font-bold mb-4">Chat with ID: {chatId}</h1>
      <p>This is the conversation view.</p>
    </div>
  );
};

export default ChatPage;
