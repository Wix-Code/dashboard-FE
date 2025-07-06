import * as React from "react";
import { Dialog } from "radix-ui";
import { Clock, MessageCircleMore, X } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";


const HelpRequestModal = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = React.useState<"days" | "hours">("days")
  const [popOut, setPopOut] = React.useState<boolean>(false)
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
          {children}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-[#2155a31c] data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed left-1/2 top-1/2 max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[40px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="mb-[30px] text-[18px] font-bold text-[#0A1629]">
              Need some Help?
            </Dialog.Title>
            <Dialog.Description >
            </Dialog.Description>
            <div className="bg-[#FFFFFF] space-y-5 hide-scrollbar overflow-y-scroll max-h-[300px] rounded">
            <div className="space-y-3">
              <img src="./pic/pic.png" alt="" />
                <p className="text-[#7D8592] font-normal text-[14px]">Describe your question and our specialists will answer you within 24 hours.</p>
                <div className="space-y-2">
                  <p className="text-[12px] font-bold text-[#7D8592]">Request subject</p>
                  <input
                    className="text-[#7D8592] w-full items-center rounded p-2.5 text-[12px] resize-none leading-none border-[#D8E0F0] border-[1px] outline-none"
                    id="username"
                    type="text"
                    placeholder="Add some description of the task"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className={`text-[#7D8592] font-bold text-[12px]`}>Description</p>
                <textarea
                  className="inline-flex h-[120px] text-[#7D8592] w-full items-center rounded p-2.5 text-[12px] resize-none leading-none border-[#D8E0F0] border-[1px] outline-none"
                  id="username"
                  placeholder="Add some description of the task"
                />
              </div>
            </div>
            <div className="mt-[25px] flex items-center justify-end">
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

export default HelpRequestModal