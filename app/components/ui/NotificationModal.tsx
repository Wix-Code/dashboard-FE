import * as React from "react";
import { Dialog } from "radix-ui";
import { X } from "lucide-react";
import { notifications } from "@/app/dummyData";


const NotificationModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
          {children}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-[#2155a31c] data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed right-0 top-1/2 max-w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white py-[40px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="mb-[30px] text-[18px] px-10 font-bold text-[#0A1629]">
              Notifications
            </Dialog.Title>
            <Dialog.Description >
            </Dialog.Description>
            <div className="bg-[#FFFFFF] hide-scrollbar overflow-y-scroll max-h-[400px] rounded">
              { notifications.map((notify) => {
                return (
                  <div className="flex px-10 py-5 border-[#E4E6E8] border-t-[1px] gap-3">
                    <div className="flex">
                      <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          className="w-full h-full object-cover" 
                          src={notify.image} 
                          alt="" 
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-[#0A1629] text-[14px]">{notify.message}</p>
                      <p className="text-[#7D8592] font-normal text-[12px]">{notify.time}</p>
                    </div>
                  </div>
                  )
                })
              }
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

export default NotificationModal