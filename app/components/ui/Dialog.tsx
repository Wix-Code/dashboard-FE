import * as React from "react";
import { Dialog } from "radix-ui";
import { X } from "lucide-react";


const TimeTrackingModal = ({ children }: { children: React.ReactNode }) => (
  <Dialog.Root>
		<Dialog.Trigger asChild>
			{children}
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-[#2155a31c] data-[state=open]:animate-overlayShow" />
			<Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[40px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
				<Dialog.Title className="mb-[40px] text-[18px] font-bold text-[#0A1629]">
					Time Tracking
				</Dialog.Title>
				<Dialog.Description >
        </Dialog.Description>
        <div className="bg-[#F4F9FD] mb-[15px] rounded p-4">
          <div className="">
            <p className="text-[#0A1629] font-normal text-[14px]">1d 3h 25m logged</p>
            <p className="text-[#91929E] font-normal text-[14px]">Original Estimate 3d 8h</p>
          </div>
        </div>
				<fieldset className="mb-[15px] flex flex-col gap-2">
					<label
						className="text-[14px] text-[#7D8592]"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className="inline-flex text-[#7D8592] w-full items-center rounded p-2.5 text-[14px] resize-none leading-none border-[#D8E0F0] border-[1px] outline-none"
						id="name"
						defaultValue="Pedro Duarte"
					/>
				</fieldset>
				<fieldset className="mb-[15px] flex flex-col gap-2">
					<label
						className="text-[14px] text-[#7D8592]"
						htmlFor="username"
					>
						Work Description
					</label>
					<textarea
						className="inline-flex h-[120px] text-[#7D8592] w-full items-center rounded p-2.5 text-[14px] resize-none leading-none border-[#D8E0F0] border-[1px] outline-none"
						id="username"
            placeholder="Add some description of the task"
					/>
				</fieldset>
				<div className="mt-[25px] flex justify-end">
					<Dialog.Close asChild>
						<button className="inline-flex h-[44px] cursor-pointer items-center justify-center rounded bg-[#3F8CFF] px-[15px] font-bold leading-none text-white py-2 text-[14px] outline-none select-none">
							Save Task
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
);

export default TimeTrackingModal;