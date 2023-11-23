import React from "react";

const BoardModal = () => {
  return (
    <div className="h-[130px] flex flex-col gap-0 w-44 fixed top-[200px] -right-[160px] bg-white z-50 rounded-md shadow-md p-3 modal dark:bg-[#2d3545]">
      <p className="font-bold py-2 px-2 text-sm hover:bg-[#e4e8eb] hover:cursor-pointer rounded-md text-[#686c73]">
        Export
      </p>
      <p className="font-bold py-2 px-2 text-sm hover:bg-[#e4e8eb] hover:cursor-pointer rounded-md text-[#686c73]">
        Hide
      </p>
      <p className="font-bold py-2 px-2 text-sm hover:bg-[#e4e8eb] hover:cursor-pointer rounded-md text-[#686c73]">
        Duplicate
      </p>
    </div>
  );
};

export default BoardModal;
