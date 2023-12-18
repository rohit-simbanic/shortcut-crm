import React from "react";

const BoardModal = () => {
  return (
    <div className="h-[130px] flex flex-col gap-0 w-44 fixed top-[200px] -right-[160px] bg-white z-50 rounded-md shadow-[rgba(0,0,0,0.15)_0px_5px_15px] p-3 modal dark:bg-[#2d3545]">
      <p className="font-bold py-2 px-2 text-sm hover:bg-[#e4e8eb] hover:cursor-pointer rounded-md text-[#686c73] dark:text-[#f6f6f6] dark:hover:bg-[#1f2532]">
        Export
      </p>
      <p className="font-bold py-2 px-2 text-sm hover:bg-[#e4e8eb] hover:cursor-pointer rounded-md text-[#686c73] dark:text-[#f6f6f6] dark:hover:bg-[#1f2532]">
        Hide
      </p>
      <p className="font-bold py-2 px-2 text-sm hover:bg-[#e4e8eb] hover:cursor-pointer rounded-md text-[#686c73] dark:text-[#f6f6f6] dark:hover:bg-[#1f2532]">
        Duplicate
      </p>
    </div>
  );
};

export default BoardModal;
