import React from "react";

const WorkFlowModal = () => {
  return (
    <div className="h-[100px] flex flex-col gap-0 w-44 fixed top-12 -right-[160px] bg-white z-50 rounded-md shadow-[rgba(0,0,0,0.35)_0px_5px_15px] p-3 modal dark:bg-[#2d3545]">
      <p className="font-bold py-2 px-2 text-sm hover:bg-[#e4e8eb] dark:hover:bg-[#1f2532] hover:cursor-pointer rounded-md text-[#686c73] dark:text-[#f6f6f6]">
        Edit WorkFlow
      </p>
      <p className="font-bold py-2 px-2 text-sm hover:bg-[#e4e8eb] dark:hover:bg-[#1f2532] hover:cursor-pointer rounded-md text-[#686c73] dark:text-[#f6f6f6]">
        Add WorkFlow
      </p>
    </div>
  );
};

export default WorkFlowModal;
