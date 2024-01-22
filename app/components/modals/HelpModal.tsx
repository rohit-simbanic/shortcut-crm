import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
interface HelpModalProps {
  setOpenHelpModal: React.Dispatch<React.SetStateAction<boolean>>;
  openHelpModal: boolean;
}
const HelpModal: React.FC<HelpModalProps> = ({
  setOpenHelpModal,
  openHelpModal,
}) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (openHelpModal && !target.closest(".modal")) {
        setOpenHelpModal(false);
      }
    };

    if (openHelpModal) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [openHelpModal]);
  return (
    <div
      id="filterModal"
      className={`fixed modal ${
        openHelpModal ? "lg:block" : "hidden"
      } z-[2147483647] right-0 mx-2 mt-3 overflow-auto modal bg-white h-[83vh] w-[30vw] rounded-md shadow-[rgba(10,10,15,0.24)_0px_16px_40px] dark:bg-[#2d3545]`}
    >
      <div className="flex justify-between bg-[#eef7fc] dark:bg-[#2d3545] py-[20px] px-5">
        <div className="flex gap-2 items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="#3a95c9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8 4a.667.667 0 1 0 0-1.334A.667.667 0 0 0 8 4Zm0 4.666a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Zm0 4.667A.667.667 0 1 0 8 12a.667.667 0 0 0 0 1.333ZM12.667 4a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Zm0 4.666a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Zm0 4.667a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM3.334 4a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Zm0 4.666a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Zm0 4.667a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Z"
              opacity="0.5"
            ></path>
          </svg>
          <h3 className="font-medium text-[#333333] text-[18px] dark:text-[#f6f6f6]">
            Help & Learning
          </h3>
        </div>

        <svg
          fill="#b3b3b3"
          width="22px"
          height="22px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer hover:text-[#555]"
          onClick={() => setOpenHelpModal(false)}
        >
          <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z" />
        </svg>
      </div>
      <div className="px-5 bg-gradient-bg mb-2 dark:bg-gradient-conic">
        <input
          type="text"
          placeholder="What can we help you find?"
          className="w-full text-[16px] h-[48px] text-[#333333] rounded-lg bg-white dark:bg-[#2d3545] border-[1px] border-[#e4e8eb] pr-[64px] pl-[16px] focus:border-[#3a95c9] focus:ring-sky-500 focus:ring-1 focus:outline-none"
        />
      </div>
      <div className="h-[36vh] overflow-y-auto px-5" id="filterModal">
        <p className="text-[#686c73] text-[14px] my-3 dark:text-[#b8b8bd]">
          Recommended
        </p>
        <div className="flex gap-3 items-center mb-2 group hover:bg-[#e4e8eb] p-3 rounded-md hover:cursor-pointer dark:hover:bg-[#1f2532]">
          <div className="flex-shrink-0">
            <Image
              src={"/assets/icon-board.png"}
              alt="board ico"
              width={30}
              height={30}
              className=""
            />
          </div>
          <div className="">
            <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
              What is a Story?
            </h5>
            <p className="text-[14px] text-[#666666]">
              Stories are the standard unit of work in Short....
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="group-hover:block hidden group-hover:text-gray-500"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 18 6-6-6-6"
            ></path>
          </svg>
        </div>
        <div className="flex gap-3 items-center mb-2 group hover:bg-[#e4e8eb] p-3 rounded-md hover:cursor-pointer dark:hover:bg-[#1f2532]">
          <div className="flex-shrink-0">
            <Image
              src={"/assets/icon-board.png"}
              alt="board ico"
              width={30}
              height={30}
              className=""
            />
          </div>
          <div className="">
            <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
              What is the Stories page?
            </h5>
            <p className="text-[14px] text-[#666666]">
              The Stories Page is where most of the magic h....
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="group-hover:block hidden group-hover:text-gray-500"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 18 6-6-6-6"
            ></path>
          </svg>
        </div>
        <div className="flex gap-3 items-center mb-2 group hover:bg-[#e4e8eb] p-3 rounded-md hover:cursor-pointer dark:hover:bg-[#1f2532]">
          <div className="flex-shrink-0">
            <Image
              src={"/assets/icon-board.png"}
              alt="board ico"
              width={30}
              height={30}
              className=""
            />
          </div>
          <div className="">
            <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
              Importing and Exporting Shortcut Data
            </h5>
            <p className="text-[14px] text-[#666666]">
              Stories are the standard unit of work in Short....
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="group-hover:block hidden group-hover:text-gray-500"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 18 6-6-6-6"
            ></path>
          </svg>
        </div>
        <div className="flex gap-3 items-center mb-2 group hover:bg-[#e4e8eb] p-3 rounded-md hover:cursor-pointer dark:hover:bg-[#1f2532]">
          <div className="flex-shrink-0">
            <Image
              src={"/assets/icon-board.png"}
              alt="board ico"
              width={30}
              height={30}
              className=""
            />
          </div>
          <div className="">
            <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
              Jira Sync Overview
            </h5>
            <p className="text-[14px] text-[#666666]">
              Try Shortcut with minimal disruption by syncin....
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="group-hover:block hidden group-hover:text-gray-500"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 18 6-6-6-6"
            ></path>
          </svg>
        </div>
        <div className="flex gap-3 items-center mb-2 group hover:bg-[#e4e8eb] p-3 rounded-md hover:cursor-pointer dark:hover:bg-[#1f2532]">
          <div className="flex-shrink-0">
            <Image
              src={"/assets/icon-board.png"}
              alt="board ico"
              width={30}
              height={30}
              className=""
            />
          </div>
          <div className="">
            <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
              Filtering the Stories Page
            </h5>
            <p className="text-[14px] text-[#666666]">
              There are two main ways to filter the stories o....
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="group-hover:block hidden group-hover:text-gray-500"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 18 6-6-6-6"
            ></path>
          </svg>
        </div>
        <div className="flex gap-3 items-center mb-2 group hover:bg-[#e4e8eb] p-3 rounded-md hover:cursor-pointer dark:hover:bg-[#1f2532]">
          <div className="flex-shrink-0">
            <Image
              src={"/assets/icon-board.png"}
              alt="board ico"
              width={30}
              height={30}
              className=""
            />
          </div>
          <div className="">
            <h5 className="text-[15px] text-[#333333] font-medium dark:text-white">
              Working with Stories
            </h5>
            <p className="text-[14px] text-[#666666]">
              Stories are the standard unit of work in Short....
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="group-hover:block hidden group-hover:text-gray-500"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 18 6-6-6-6"
            ></path>
          </svg>
        </div>
      </div>
      <p className="border-[0.5px] border-[#e4e8eb] dark:border-[gray] w-full"></p>
      <div className="px-5">
        <p className="text-[#686c73] text-[14px] my-4 dark:text-[#b8b8bd]">
          Additional Resources
        </p>

        <div className="flex items-center justify-between gap-4 px-3">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              height="28px"
              width="28px"
              className="text-[28px]"
            >
              <rect
                fill-opacity="0.2"
                fill="#64A44C"
                rx="5.25"
                height="32"
                width="32"
              ></rect>
              <path
                fill="#71B259"
                d="M10 8C8.89543 8 8 8.89543 8 10V10.125C8 10.6082 8.39175 11 8.875 11H23.125C23.6082 11 24 10.6082 24 10.125V10C24 8.89543 23.1046 8 22 8H10ZM24 13.875C24 13.3918 23.6082 13 23.125 13H17.875C17.3918 13 17 13.3918 17 13.875V23.125C17 23.6082 17.3918 24 17.875 24H22C23.1046 24 24 23.1046 24 22V13.875ZM14.125 24C14.6082 24 15 23.6082 15 23.125V13.875C15 13.3918 14.6082 13 14.125 13H8.875C8.39175 13 8 13.3918 8 13.875V22C8 23.1046 8.89543 24 10 24H14.125Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
              <rect
                stroke-width="0.875"
                stroke-opacity="0.25"
                stroke="#64A44C"
                rx="4.8125"
                height="31.125"
                width="31.125"
                y="0.4375"
                x="0.4375"
              ></rect>
            </svg>
            <Link
              href="#"
              className="text-[14px] text-[#333] font-medium hover:underline dark:text-[#b8b8bd] hover:dark:text-white"
            >
              Demo Workspace
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              height="28px"
              width="28px"
              className="text-[28px]"
            >
              <rect
                fill-opacity="0.2"
                fill="#E6D566"
                rx="5.28"
                height="32"
                width="32"
              ></rect>
              <path
                fill="#CCBA45"
                d="M19 12.1396C19 12.6148 19.3852 13 19.8604 13H20.5C21.3284 13 22 12.3284 22 11.5C22 10.6716 21.3284 10 20.5 10C19.6716 10 19 10.6716 19 11.5V12.1396ZM20.5 15H19.8604C19.3852 15 19 15.3852 19 15.8604V16.1396C19 16.6148 19.3852 17 19.8604 17H20.5C22.433 17 24 18.567 24 20.5C24 22.433 22.433 24 20.5 24C18.567 24 17 22.433 17 20.5V19.8604C17 19.3852 16.6148 19 16.1396 19H15.8604C15.3852 19 15 19.3852 15 19.8604V20.5C15 22.433 13.433 24 11.5 24C9.567 24 8 22.433 8 20.5C8 18.567 9.567 17 11.5 17H12.1396C12.6148 17 13 16.6148 13 16.1396V15.8604C13 15.3852 12.6148 15 12.1396 15H11.5C9.567 15 8 13.433 8 11.5C8 9.567 9.567 8 11.5 8C13.433 8 15 9.567 15 11.5V12.1396C15 12.6148 15.3852 13 15.8604 13H16.1396C16.6148 13 17 12.6148 17 12.1396V11.5C17 9.567 18.567 8 20.5 8C22.433 8 24 9.567 24 11.5C24 13.433 22.433 15 20.5 15ZM15.8604 15C15.3852 15 15 15.3852 15 15.8604V16.1396C15 16.6148 15.3852 17 15.8604 17H16.1396C16.6148 17 17 16.6148 17 16.1396V15.8604C17 15.3852 16.6148 15 16.1396 15H15.8604ZM12.1396 13C12.6148 13 13 12.6148 13 12.1396V11.5C13 10.6716 12.3284 10 11.5 10C10.6716 10 10 10.6716 10 11.5C10 12.3284 10.6716 13 11.5 13L12.1396 13ZM19 20.5V19.8604C19 19.3852 19.3852 19 19.8604 19H20.5C21.3284 19 22 19.6716 22 20.5C22 21.3284 21.3284 22 20.5 22C19.6716 22 19 21.3284 19 20.5ZM13 19.8604C13 19.3852 12.6148 19 12.1396 19H11.5C10.6716 19 10 19.6716 10 20.5C10 21.3284 10.6716 22 11.5 22C12.3284 22 13 21.3284 13 20.5L13 19.8604Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
              <rect
                stroke-width="0.88"
                stroke-opacity="0.3"
                stroke="#E6D566"
                rx="4.84"
                height="31.12"
                width="31.12"
                y="0.44"
                x="0.44"
              ></rect>
            </svg>
            <Link
              href="#"
              className="text-[14px] text-[#333] font-medium hover:underline dark:text-[#b8b8bd] hover:dark:text-white"
            >
              Keyboard Shortcut
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 px-3 my-4">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              height="28px"
              width="28px"
              className="text-[28px]"
            >
              <rect
                fill-opacity="0.2"
                fill="#F69752"
                rx="5.25"
                height="32"
                width="32"
              ></rect>
              <path
                fill="#F69752"
                d="M22.2477 10.6725C21.0825 10.1247 19.8367 9.72667 18.5342 9.5C18.3742 9.79058 18.1873 10.1814 18.0585 10.4923C16.6739 10.2831 15.302 10.2831 13.9429 10.4923C13.814 10.1814 13.6229 9.79058 13.4615 9.5C12.1576 9.72667 10.9103 10.1262 9.74514 10.6754C7.39498 14.2437 6.75789 17.7233 7.07644 21.1536C8.63519 22.3232 10.1458 23.0336 11.6309 23.4986C11.9976 22.9915 12.3247 22.4525 12.6064 21.8844C12.0698 21.6795 11.5559 21.4267 11.0703 21.1333C11.1991 21.0374 11.3251 20.9371 11.4469 20.834C14.4086 22.2258 17.6267 22.2258 20.5531 20.834C20.6762 20.9371 20.8022 21.0374 20.9296 21.1333C20.4426 21.4282 19.9273 21.681 19.3907 21.8859C19.6725 22.4525 19.9981 22.993 20.3662 23.5C21.8527 23.0351 23.3647 22.3246 24.9235 21.1536C25.2973 17.1771 24.285 13.7294 22.2477 10.6725ZM13.0099 19.044C12.1208 19.044 11.3917 18.2101 11.3917 17.1945C11.3917 16.1789 12.1052 15.3435 13.0099 15.3435C13.9146 15.3435 14.6437 16.1775 14.6281 17.1945C14.6295 18.2101 13.9146 19.044 13.0099 19.044ZM18.9901 19.044C18.101 19.044 17.3718 18.2101 17.3718 17.1945C17.3718 16.1789 18.0854 15.3435 18.9901 15.3435C19.8947 15.3435 20.6238 16.1775 20.6083 17.1945C20.6083 18.2101 19.8947 19.044 18.9901 19.044Z"
              ></path>
              <rect
                stroke-width="0.875"
                stroke-opacity="0.25"
                stroke="#F69752"
                rx="4.8125"
                height="31.125"
                width="31.125"
                y="0.4375"
                x="0.4375"
              ></rect>
            </svg>
            <Link
              href="#"
              className="text-[14px] text-[#333] font-medium hover:underline dark:text-[#b8b8bd] hover:dark:text-white"
            >
              Demo Workspace
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              height="28px"
              width="28px"
              className="text-[28px]"
            >
              <rect
                fill-opacity="0.09"
                fill="#3A95C9"
                rx="5.28"
                height="32"
                width="32"
              ></rect>
              <path
                fill="#3A95C9"
                d="M16 8C11.6 8 8 11.6 8 16C8 20.4 11.6 24 16 24C20.4 24 24 20.4 24 16C24 11.6 20.4 8 16 8ZM16 21C15.4 21 15 20.6 15 20C15 19.4 15.4 19 16 19C16.6 19 17 19.4 17 20C17 20.6 16.6 21 16 21ZM17.5 16.4C17 16.7 17 16.8 17 17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17C15 15.7 15.8 15.1 16.4 14.7C16.9 14.4 17 14.3 17 14C17 13.4 16.6 13 16 13C15.6 13 15.3 13.2 15.1 13.5L15.0907 13.5167C14.8217 14.001 14.2066 14.1686 13.7291 13.8877C13.2679 13.6164 13.1073 13.0269 13.3671 12.5592L13.4 12.5C13.9 11.6 14.9 11 16 11C17.7 11 19 12.3 19 14C19 15.4 18.1 16 17.5 16.4Z"
              ></path>
              <rect
                stroke-width="0.88"
                stroke-opacity="0.2"
                stroke="#3A95C9"
                rx="4.84"
                height="31.12"
                width="31.12"
                y="0.44"
                x="0.44"
              ></rect>
            </svg>
            <Link
              href="#"
              className="text-[14px] text-[#333] font-medium hover:underline dark:text-[#b8b8bd] hover:dark:text-white"
            >
              Keyboard Shortcut
            </Link>
          </div>
        </div>
        <button className="bg-[#3a95c9] hover:bg-[#2d78a4] text-white w-full py-3 rounded-md">
          Talk to us
        </button>
      </div>
    </div>
  );
};

export default HelpModal;
