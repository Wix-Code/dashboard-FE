// app/messenger/[id]/page.tsx
"use client"
import { chats } from "@/app/dummyData";
import { AtSign, EllipsisVertical, Link, Paperclip, Pin, Search } from "lucide-react";
import { useParams } from "next/navigation";

const ChatPage = () => {
  const params = useParams();
  const chatId = params?.id;

  return (
    <div className="bg-white">
      <div className="flex items-center h-[70px] px-4 border-b-[1px] border-[#E6EBF5] justify-between">
        <div className="flex sticky top-0 items-center gap-3">
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
      <div className="space-y-2  mb-3 px-1.5 py-4">
        {chats.map((chat) => (
          <div key={chat.id} className={`flex ${chat.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`
            max-w-[75%] rounded-lg px-3 py-2 
            ${chat.sender === "me" ? "bg-[#3F8CFF] text-white rounded-br-none" : "bg-[#F4F9FD] text-[#0A1629] rounded-bl-none"}
          `}>
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
                  <p className="text-[#91929E] font-normal text-[12px]">{chat.message}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-[#D8E0F0] bg-white bottom-0 sticky absolute gap-3 px-[20px] items-center flex border-[1px] p-1 rounded">
        <button>
          <Paperclip className="w-[18px] text-[#6D5DD3]" />
        </button>
        <button>
          <Link className="w-[18px] text-[#15C0E6]" />
        </button>
        <button>
          <AtSign className="w-[18px] text-[#3F8CFF]" />
        </button>
        <textarea
          placeholder="Type your messsge here"
          className="resize-none text-[#7D8592] text-[14px] font-normal hide-scrollbar outline-none flex-1"
        />
        <button>
          <AtSign className="w-[18px] text-[#FDC748]" />
        </button>
        <button>
          <AtSign />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
