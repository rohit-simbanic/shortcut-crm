import React from "react";

const WorkFlowModal = () => {
  return (
    <div className="h-[100px] flex flex-col gap-0 w-44 fixed top-12 -right-[160px] bg-white z-50 rounded-md shadow-md p-3 modal dark:bg-[#2d3545]">
      <p className="font-bold py-2 px-2 text-sm hover:bg-[#e4e8eb] hover:cursor-pointer rounded-md text-[#686c73]">
        Edit WorkFlow
      </p>
      <p className="font-bold py-2 px-2 text-sm hover:bg-[#e4e8eb] hover:cursor-pointer rounded-md text-[#686c73]">
        Add WorkFlow
      </p>
    </div>
  );
};

export default WorkFlowModal;
