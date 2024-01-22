import Image from "next/image";
import React, { useEffect } from "react";

interface HelpModalProps {
  setOpenCtrlModal: React.Dispatch<React.SetStateAction<boolean>>;
  openCtrlModal: boolean;
}
const CtrlModal: React.FC<HelpModalProps> = ({
  openCtrlModal,
  setOpenCtrlModal,
}) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (openCtrlModal && !target.closest(".modal")) {
        setOpenCtrlModal(false);
      }
    };

    if (openCtrlModal) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [openCtrlModal]);
  return (
    <div
      id="filterModal"
      className={`absolute modal ${
        openCtrlModal ? "lg:block" : "hidden"
      } z-[2147483647] right-0 top-0 left-0 bottom-0 mx-auto mt-3 overflow-auto modal bg-white h-[75vh] w-[95vw] lg:w-[40vw] rounded-md shadow-[rgba(10,10,15,0.24)_0px_16px_40px] dark:bg-[#2d3545]`}
    >
      <div className="flex gap-0 items-center">
        <div className="flex justify-between dark:bg-[#2d3545] py-[20px] px-5">
          <svg
            fill="none"
            height="21"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-[20px]"
          >
            <path
              clip-rule="evenodd"
              d="M13 8.722a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm.12 6.3c-.251-.628-1.044-.83-1.644-.52a6.5 6.5 0 1 1 2.805-2.805c-.31.601-.11 1.394.518 1.645l1.444.577a1.958 1.958 0 1 1-2.546 2.546l-.577-1.444Z"
              fill-rule="evenodd"
              fill="#666"
            ></path>
          </svg>
        </div>
        <div className="pr-5 dark:bg-gradient-conic w-full">
          <input
            type="text"
            placeholder="Quickly perform your common tasks..."
            className="w-full text-[17px] h-[48px] text-[#000000d9] dark:text-white bg-white dark:bg-[#2d3545] pr-[64px] pl-[0px] focus:border-[transparent] focus:ring-transparent focus:ring-1 focus:outline-none"
          />
        </div>
      </div>

      <div className="border-t-[.5px] border-b border-t-[#0000001a] border-b-[#0000001a] dark:border-[gray]">
        <div className="flex gap-5 px-5">
          <p className="text-[#3a95c9] text-[14px] my-3 dark:text-[#b8b8bd] font-medium">
            All
          </p>
          <p className="text-[#00000066] text-[14px] my-3 dark:text-[#d8d7d766] hover:text-[#2d78a4] hover:cursor-pointer font-medium">
            Keyboard Shortcuts
          </p>
        </div>
      </div>
      <p className="text-[12px] text-[#808080] my-2 px-5 font-medium">
        Recommended
      </p>
      <div className="h-[46vh] overflow-y-scroll scrollbar-ctrl">
        <div className="border-b border-b-[#0000001a] dark:border-[gray]">
          <div className="flex justify-between items-center  group hover:bg-[#e4e8eb] py-2 hover:cursor-pointer dark:hover:bg-darkBgDefault">
            <div className="px-5 flex items-center justify-between w-full">
              <div className=" flex gap-3 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={"/assets/1.png"}
                    alt="board ico"
                    width={23}
                    height={23}
                    className=""
                  />
                </div>
                <div className="">
                  <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
                    Create a new story
                  </h5>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <p className="hidden group-hover:block text-[12px] text-[#333333]">
                  Edit
                </p>
                <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[24px] flex items-center justify-center rounded-md">
                  N
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center  group hover:bg-[#e4e8eb] py-2 hover:cursor-pointer dark:hover:bg-darkBgDefault">
            <div className="px-5 flex items-center justify-between w-full">
              <div className=" flex gap-3 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={"/assets/2.png"}
                    alt="board ico"
                    width={23}
                    height={23}
                    className=""
                  />
                </div>
                <div className="">
                  <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
                    Search Shortcut
                  </h5>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <p className="hidden group-hover:block text-[12px] text-[#333333]">
                  Edit
                </p>
                <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[24px] flex items-center justify-center rounded-md">
                  /
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center  group hover:bg-[#e4e8eb] py-2 hover:cursor-pointer dark:hover:bg-darkBgDefault">
            <div className="px-5 flex items-center justify-between w-full">
              <div className=" flex gap-3 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={"/assets/1.png"}
                    alt="board ico"
                    width={23}
                    height={23}
                    className=""
                  />
                </div>
                <div className="">
                  <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
                    Go to space
                  </h5>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  stroke="#333"
                  fill="#3a95c9"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center  group hover:bg-[#e4e8eb] py-2 hover:cursor-pointer dark:hover:bg-darkBgDefault">
            <div className="px-5 flex items-center justify-between w-full">
              <div className=" flex gap-3 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={"/assets/3.png"}
                    alt="board ico"
                    width={23}
                    height={23}
                    className=""
                  />
                </div>
                <div className="">
                  <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
                    Open help
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 flex items-center justify-between">
          <p className="text-[12px] text-[#808080] my-2 font-medium">
            Keyboard Shortcut
          </p>
          <div className="flex items-center">
            <p className="text-[12px] text-[#808080]">See more (8)</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="commandbar-category-expand dark:text-gray-300"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center  group hover:bg-[#e4e8eb] py-2 hover:cursor-pointer dark:hover:bg-darkBgDefault">
          <div className="px-5 flex items-center justify-between w-full">
            <div className=" flex gap-3 items-center">
              <div className="flex-shrink-0">
                <Image
                  src={"/assets/2.png"}
                  alt="board ico"
                  width={23}
                  height={23}
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
                  Advanced Story Search
                </h5>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="hidden group-hover:block text-[12px] text-[#333333]">
                Edit
              </p>
              <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[24px] flex items-center justify-center rounded-md">
                G
              </p>
              <p className=" text-[12px] text-[#333333]">then</p>
              <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[44px] flex items-center justify-center rounded-md">
                space
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center  group hover:bg-[#e4e8eb] py-2 hover:cursor-pointer dark:hover:bg-darkBgDefault">
          <div className="px-5 flex items-center justify-between w-full">
            <div className=" flex gap-3 items-center">
              <div className="flex-shrink-0">
                <Image
                  src={"/assets/4.png"}
                  alt="board ico"
                  width={23}
                  height={23}
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
                  Go to home
                </h5>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="hidden group-hover:block text-[12px] text-[#333333]">
                Edit
              </p>
              <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[24px] flex items-center justify-center rounded-md">
                G
              </p>
              <p className=" text-[12px] text-[#333333]">then</p>
              <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[24px] flex items-center justify-center rounded-md">
                D
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center  group hover:bg-[#e4e8eb] py-2 hover:cursor-pointer dark:hover:bg-darkBgDefault">
          <div className="px-5 flex items-center justify-between w-full">
            <div className=" flex gap-3 items-center">
              <div className="flex-shrink-0">
                <Image
                  src={"/assets/1.png"}
                  alt="board ico"
                  width={23}
                  height={23}
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
                  Go to stories
                </h5>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="hidden group-hover:block text-[12px] text-[#333333]">
                Edit
              </p>
              <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[24px] flex items-center justify-center rounded-md">
                G
              </p>
              <p className=" text-[12px] text-[#333333]">then</p>
              <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[24px] flex items-center justify-center rounded-md">
                s
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center  group hover:bg-[#e4e8eb] py-2 hover:cursor-pointer dark:hover:bg-darkBgDefault">
          <div className="px-5 flex items-center justify-between w-full">
            <div className=" flex gap-3 items-center">
              <div className="flex-shrink-0">
                <Image
                  src={"/assets/5.png"}
                  alt="board ico"
                  width={23}
                  height={23}
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
                  Go to epics
                </h5>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="hidden group-hover:block text-[12px] text-[#333333]">
                Edit
              </p>
              <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[24px] flex items-center justify-center rounded-md">
                G
              </p>
              <p className=" text-[12px] text-[#333333]">then</p>
              <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[24px] flex items-center justify-center rounded-md">
                E
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center  group hover:bg-[#e4e8eb] py-2 hover:cursor-pointer dark:hover:bg-darkBgDefault">
          <div className="px-5 flex items-center justify-between w-full">
            <div className=" flex gap-3 items-center">
              <div className="flex-shrink-0">
                <Image
                  src={"/assets/6.png"}
                  alt="board ico"
                  width={23}
                  height={23}
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
                  Go to iterations
                </h5>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="hidden group-hover:block text-[12px] text-[#333333]">
                Edit
              </p>
              <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[24px] flex items-center justify-center rounded-md">
                G
              </p>
              <p className=" text-[12px] text-[#333333]">then</p>
              <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[24px] flex items-center justify-center rounded-md">
                I
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="border-[0.5px] border-[#e4e8eb] dark:border-[gray] w-full"></p>
      <div className="flex justify-end mt-2 px-5">
        <div></div>
        <div className="flex gap-3 items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:text-gray-300"
          >
            <path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
          </svg>
          <p className="text-[#2d78a4] text-[12px] font-medium bg-[#eef7fc] border-[1px] border-[#deeffa] h-[24px] w-[44px] flex items-center justify-center rounded-md">
            CTRL
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtrlModal;
