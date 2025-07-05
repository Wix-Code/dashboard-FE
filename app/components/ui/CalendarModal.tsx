import * as React from "react";
import { Dialog } from "radix-ui";
import { Clock, MessageCircleMore, X } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";


const CalendarModal = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = React.useState<"days" | "hours">("days")
  const [popOut, setPopOut] = React.useState<boolean>(false)
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
          {children}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-[#2155a31c] data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed left-1/2 top-1/2 max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[40px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="mb-[30px] text-[18px] font-bold text-[#0A1629]">
              Add Request
            </Dialog.Title>
            <Dialog.Description >
            </Dialog.Description>
            <div className="bg-[#FFFFFF] space-y-5 hide-scrollbar overflow-y-scroll max-h-[300px] rounded">
              <div className="space-y-3">
                <p className="text-[#7D8592] font-bold text-[12px]">Request type</p>
                <div className="flex items-center gap-3 justify-between">
                  <div className="flex gap-2 py-2 px-2 rounded border-[1px]">
                    <input type="radio" name="" id="" />
                    <p className="text-[14px] text-[#7D8592]">Vacation</p>
                  </div>
                  <div className="flex py-2 px-2 gap-2 rounded border-[1px]">
                    <input type="radio" name="" id="" />
                    <p className="text-[14px] text-[#7D8592]">Sick leave</p>
                  </div>
                  <div className="flex py-2 px-2 gap-2 rounded border-[1px]">
                    <input type="radio" name="" id="" />
                    <p className="text-[14px] text-[#7D8592]">Work remotely</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full h-[44px] flex items-center p-1 rounded-[40px] bg-[#F4F9FD]">
                  <button onClick={() => setIsActive("days")} className={`w-full cursor-pointer text-[#0A1629] font-bold text-[14px] h-full rounded-[40px] ${isActive === "days" && "bg-[#3F8CFF] text-white"}`}>Days</button>
                  <button onClick={() => setIsActive("hours")} className={`w-full cursor-pointer text-[#0A1629] h-full font-bold text-[14px] rounded-[40px] ${isActive === "hours" && "bg-[#3F8CFF] text-white"}`}>Hours</button>
                </div>
              </div>
              <div className="p-4 rounded border-[1px]">
        <DayPicker
          mode="range"
          //selected={selectedDates}
                //onSelect={setSelectedDates}
                showOutsideDays
                navLayout="around"
          className="w-full"
          classNames={{
            months: "w-full flex justify-center",
            month: "w-full",
            table: "w-full table-fixed",
            head_row: "grid grid-cols-7 gap-1 w-full",
            row: "grid grid-cols-7 gap-1 w-full",
            head_cell: "w-full text-center p-2 text-sm font-medium text-gray-500",
            cell: "w-full text-center p-1",
            button: "w-full h-8 rounded flex items-center justify-center text-sm hover:bg-gray-100 transition-colors",
            selected: "bg-blue-500 text-white hover:bg-blue-600",
            nav: "flex justify-between items-center w-full px-2 py-2",
            caption: "flex justify-center items-center w-full py-2 text-lg font-semibold",
            nav_button: "p-1 rounded hover:bg-gray-100 transition-colors",
            nav_button_previous: "text-gray-600",
            nav_button_next: "text-gray-600"
          }}
          modifiersClassNames={{
            today: "bg-gray-100 font-semibold"
          }}
        />
      </div>
              <div className="flex gap-2 items-center">
                <div className="space-y-1 flex-1">
                  <p className="text-[12px] font-bold text-[#7D8592]">From</p>
                  <div className="text-[12px] rounded border-[1px] flex justify-between items-center px-2 py-1 font-normal text-[#7D8592]">
                    <p>9:AM</p>
                    <Clock className="w-[16px]" />
                  </div>
                </div>
                <div className="space-y-1 flex-1">
                  <p className="text-[12px] font-bold text-[#7D8592]">To</p>
                  <div className="text-[12px] border-[1px] rounded flex justify-between items-center px-2 py-1 font-normal text-[#7D8592]">
                    <p>9:AM</p>
                    <Clock className="w-[16px]" />
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 rounded flex items-center justify-between bg-[#F4F9FD]">
                <p className="text-[#0A1629] font-bold text-[14px]">Time for Vacation</p>
                <p className="text-[#15C0E6] font-bold text-[24px]">4h 0mins</p>
              </div>
              {
                popOut && (
                  <div>
                    <textarea
                      className="inline-flex h-[120px] text-[#7D8592] w-full items-center rounded p-2.5 text-[14px] resize-none leading-none border-[#3F8CFF] border-[1px] outline-none"
                      id="username"
                      placeholder="Add some description of the task"
                    />
                  </div>
                )
              }
            </div>
            <div className="mt-[25px] flex items-center justify-between">
               <button
                className="cursor-pointer text-[14px] w-8 h-8 top-[40px] inline-flex appearance-none items-center justify-center rounded-full text-[#0A1629] bg-[#F4F9FD]"
                aria-label="Close"
                onClick={()=> setPopOut(!popOut)}
              >
                <MessageCircleMore className="w-[18px]"/>
              </button>
              <Dialog.Close asChild>
                <button className="inline-flex h-[44px] cursor-pointer items-center justify-center rounded bg-[#3F8CFF] px-[15px] font-bold leading-none text-white py-2 text-[14px] outline-none select-none">
                  Send Request
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button
                className="absolute right-[40px] cursor-pointer text-[14px] w-8 h-8 top-[40px] inline-flex appearance-none items-center justify-center rounded-full text-[#0A1629] bg-[#F4F9FD]"
                aria-label="Close"
              >
                <X className="w-[18px]"/>
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  )
}

export default CalendarModal