import { useTheme } from "@/app/context/themeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ProfiileModal = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="bg-black flex flex-col absolute top-16 z-50 right-1 w-[300px] rounded-md p-4 profile-modal">
      <div className="flex justify-between items-center">
        <button
          className="py-3 rounded-[50%] px-3 text-center h-12 w-12 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          RM
        </button>
        <h2 className="text-white font-medium text-lg">Rohit Mondal</h2>
      </div>
      <div className="h-[1px] bg-[#3f4a5f] my-2">d</div>
      <button className="flex items-center gap-2 hover:bg-[#363e50] px-3 py-2 rounded-sm">
        <svg
          viewBox="0 0 20 20"
          height={20}
          width={20}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.675 2.317c-.426-1.756-2.924-1.756-3.35 0a1.724 1.724 0 0 1-2.573 1.066c-1.543-.94-3.31.826-2.37 2.37.608.996.07 2.296-1.065 2.572-1.756.426-1.756 2.924 0 3.35a1.724 1.724 0 0 1 1.066 2.573c-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 0 1 2.572 1.065c.426 1.756 2.924 1.756 3.35 0a1.724 1.724 0 0 1 2.573-1.066c1.543.94 3.31-.826 2.37-2.37a1.724 1.724 0 0 1 1.065-2.572c1.756-.426 1.756-2.924 0-3.35a1.724 1.724 0 0 1-1.066-2.573c.94-1.543-.826-3.31-2.37-2.37a1.724 1.724 0 0 1-2.572-1.065ZM10 13.375a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z"
            fill="#666"
          ></path>
        </svg>
        <p className="text-md text-white">Setting</p>
      </button>
      <button className="flex items-center gap-2 hover:bg-[#363e50] px-3 py-2 rounded-sm">
        <svg
          viewBox="0 0 20 20"
          height={20}
          width={20}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3.5a1.5 1.5 0 0 1 3 0V4a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-.5a1.5 1.5 0 0 0 0 3h.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.5a1.5 1.5 0 0 0-3 0v.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1h-.5a1.5 1.5 0 0 1 0-3H4a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-.5Z"
            fill="#666"
          ></path>
        </svg>
        <p className="text-md text-white">Preferences</p>
      </button>
      <button
        className="flex items-center gap-2 hover:bg-[#363e50] px-3 py-2 rounded-sm"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <BsMoon color="#666666" />
        ) : (
          <BsSun color="#666666" />
        )}
        <p className="text-md text-white">
          {theme === "light" ? "Dark" : "Light"}
        </p>
      </button>
      <button className="flex items-center gap-2 hover:bg-[#363e50] px-3 py-2 rounded-sm">
        <svg
          viewBox="0 0 20 20"
          height={20}
          width={20}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 2a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V2ZM5.851 5.724a1 1 0 0 0-1.379-1.448A7.93 7.93 0 0 0 2 10.034C2 14.438 5.586 18 10 18s8-3.562 8-7.966a7.93 7.93 0 0 0-2.472-5.758 1 1 0 0 0-1.38 1.448A5.93 5.93 0 0 1 16 10.034C16 13.324 13.318 16 10 16s-6-2.676-6-5.966a5.93 5.93 0 0 1 1.851-4.31Z"
            fill="#666"
          ></path>
        </svg>
        <p className="text-md text-white">Logout</p>
      </button>

      <div className="h-[1px] bg-[#3f4a5f] my-2">d</div>
      <button className="flex items-center justify-between gap-2 hover:bg-[#363e50] px-3 py-2 rounded-sm">
        <svg
          viewBox="0 0 20 20"
          height={20}
          width={20}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.491 16.667c-.495 0-.882-.167-1.162-.501-.28-.334-.382-.796-.303-1.385l.938-6.58c.104-.694.426-1.29.967-1.788.541-.497 1.157-.746 1.847-.746h8.463c.69 0 1.307.249 1.847.746.541.498.863 1.094.968 1.788l.918 6.58c.079.59-.022 1.05-.302 1.385-.28.334-.668.5-1.163.5-.3 0-.554-.048-.763-.147a1.844 1.844 0 0 1-.527-.363l-2.033-2.043H6.814l-2.033 2.043c-.143.144-.319.265-.527.363a1.78 1.78 0 0 1-.763.148zM14.3 11.952c.208 0 .39-.078.547-.235a.755.755 0 0 0 .235-.55.756.756 0 0 0-.235-.55.749.749 0 0 0-.547-.236.748.748 0 0 0-.547.236.756.756 0 0 0-.235.55c0 .21.078.393.235.55a.748.748 0 0 0 .547.236zM12.639 9.4c.208 0 .39-.079.547-.236a.756.756 0 0 0 .234-.55.756.756 0 0 0-.234-.55.748.748 0 0 0-.547-.236.748.748 0 0 0-.548.236.756.756 0 0 0-.234.55c0 .21.078.393.234.55a.748.748 0 0 0 .548.236zm-6.157 2.455h.977v-1.473h1.466v-.982H7.459V7.926h-.977v1.473H5.016v.982h1.466v1.473z"
            fill="#666"
          ></path>
        </svg>
        <p className="text-md text-gray-200">Build: 23963-aab6fd48d</p>
      </button>
    </div>
  );
};

export default ProfiileModal;
