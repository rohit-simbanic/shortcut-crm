import React, { useState, useEffect, useRef } from "react";

const CreateButton = () => {
  return (
    <div className="relative inline-block text-left">
      <button className="inline-flex justify-center border-r-[1px] border-gray-500 w-full px-4 py-2 text-sm font-bold text-white bg-[#3a95c9] rounded-l-md shadow-sm focus:outline-none hover:bg-[#2d78a4]">
        Create Story
      </button>
    </div>
  );
};

export default CreateButton;
