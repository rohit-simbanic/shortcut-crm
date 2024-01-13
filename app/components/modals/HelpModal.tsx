import React from "react";
interface HelpModalProps {
  setOpenHelpModal: React.Dispatch<React.SetStateAction<boolean>>;
  openHelpModal: boolean;
}
const HelpModal: React.FC<HelpModalProps> = ({
  setOpenHelpModal,
  openHelpModal,
}) => {
  console.log("Open Help Modal", openHelpModal);
  return (
    <div
      id="filterModal"
      className={`fixed ${
        openHelpModal ? "block" : "hidden"
      } z-[2147483647] right-0 mx-2 mt-3 overflow-auto modal bg-white h-[81vh] w-[30vw] rounded-md shadow-[rgba(10,10,15,0.24)_0px_16px_40px] p-5 dark:bg-[#2d3545]`}
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
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
          <h3 className="text-md font-bold text-[#1f2532] dark:text-[#f6f6f6]">
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
    </div>
  );
};

export default HelpModal;
