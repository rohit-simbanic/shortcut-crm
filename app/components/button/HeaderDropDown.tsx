import React, { useState, useEffect, useRef } from "react";
import { useDropdown } from "../../context/UseDropDown";

const Dropdown = () => {
  const { isDropdownOpen, toggleDropdown, setIsDropdownOpen } = useDropdown();
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        (dropdownButtonRef.current &&
          dropdownButtonRef.current.contains(event.target as Node)) ||
        (dropdownMenuRef.current &&
          dropdownMenuRef.current.contains(event.target as Node))
      ) {
        // Click occurred inside the dropdown button or menu, do not close the dropdown
        return;
      }

      // Click occurred outside the dropdown, close the dropdown
      setIsDropdownOpen(false);
    };

    if (isDropdownOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative inline-block text-left">
      <button
        ref={dropdownButtonRef}
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full px-3 py-3 text-sm font-medium text-gray-700 bg-[#3a95c9] rounded-r-md shadow-sm focus:outline-none hover:bg-[#2d78a4]"
      >
        <svg
          fill="#ffffff"
          height="12px"
          width="12px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 386.257 386.257"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <polygon points="0,96.879 193.129,289.379 386.257,96.879 "></polygon>{" "}
          </g>
        </svg>
      </button>
      <div
        ref={dropdownMenuRef}
        className={`${
          isDropdownOpen ? "" : "hidden"
        } origin-top-right absolute left-0 max-[519px]:left-[-175px] mt-2 w-64 z-[2147483647] rounded-md shadow-[rgba(0,0,0,0.35)_0px_5px_15px] bg-white ring-1 ring-black dark:bg-[#161b26] ring-opacity-5`}
      >
        <div
          className="py-2 p-2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          <a
            className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-[#c4c4c7] dark:hover:bg-[#f8fafc1a] active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={16}
                width={16}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
                  fill="#666"
                ></path>
              </svg>
              <span className="dark:text-[#f6f6f6]">Create Story</span>
            </div>
          </a>
          <a
            className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-[#c4c4c7] dark:hover:bg-[#f8fafc1a] active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={16}
                width={16}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 6a3 3 0 0 1 3-3h10a1 1 0 0 1 .8 1.6L14.25 8l2.55 3.4A1 1 0 0 1 16 13H6a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0V6Z"
                  fill="#666"
                ></path>
              </svg>
              <span className="dark:text-[#f6f6f6]">Create Epic</span>
            </div>
          </a>
          <a
            className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-[#c4c4c7] dark:hover:bg-[#f8fafc1a] active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={16}
                width={16}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 7H7a3 3 0 1 0 0 6 1 1 0 0 1 0 2A5 5 0 1 1 7 5V3.5a.5.5 0 0 1 .854-.354l3 3A.5.5 0 0 1 10.5 7Zm1.793-1.707A1 1 0 0 1 13 5a5 5 0 1 1 0 10v1.5a.5.5 0 0 1-.854.354l-3-3A.5.5 0 0 1 9.5 13H13a3 3 0 1 0 0-6 1 1 0 0 1-.707-1.707Z"
                  fill="#666"
                ></path>
              </svg>
              <span className="dark:text-[#f6f6f6]">Create Iteration</span>
            </div>
          </a>
          <a
            className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-[#c4c4c7] dark:hover:bg-[#f8fafc1a] active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={16}
                width={16}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.657 3.271c-3.124-3.028-8.19-3.028-11.314 0a7.587 7.587 0 0 0 0 10.966l4.392 4.257a1.834 1.834 0 0 0 2.53 0l4.392-4.257a7.587 7.587 0 0 0 0-10.966ZM10 9.51c.982 0 1.778-.762 1.778-1.702S10.982 6.105 10 6.105s-1.778.762-1.778 1.702S9.018 9.51 10 9.51Z"
                  fill="#666"
                ></path>
              </svg>

              <span className="dark:text-[#f6f6f6]">Create Milestone</span>
            </div>
          </a>
          <a
            className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-[#c4c4c7] dark:hover:bg-[#f8fafc1a] active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={16}
                width={16}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.243a3 3 0 0 0-.879-2.122L14.5 4.5l-1.621-1.621A3 3 0 0 0 10.757 2H5Zm1 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
                  fill="#666"
                ></path>
              </svg>
              <span className="dark:text-[#f6f6f6]">Create Doc</span>
            </div>
          </a>
          <a
            className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-[#c4c4c7] dark:hover:bg-[#f8fafc1a] active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#a)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.859 5.035a2 2 0 0 0-1.644-1.644l-5.167-.45a2 2 0 0 0-1.743.559L2.67 9.136a2 2 0 0 0 0 2.829L8.477 17.5a2 2 0 0 0 2.828 0l5.636-5.636a2 2 0 0 0 .559-1.743l-.641-5.086zM12.381 7.87a1 1 0 1 0 1.415-1.414 1 1 0 0 0-1.414 1.414z"
                    fill="#666"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <span className="dark:text-[#f6f6f6]">Create Label</span>
            </div>
          </a>
          <hr className="dark:border-[#283040]" />
          <a
            className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-[#c4c4c7] dark:hover:bg-[#f8fafc1a] active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={16}
                width={16}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2.233 15.626C3.591 13.361 6.646 12 9.095 12h2.054c2.449 0 5.26 1.36 6.618 3.626.608 1.015-.046 2.374-1.143 2.374H3.376c-1.097 0-1.751-1.36-1.143-2.374Z"
                  fill="#666"
                ></path>
              </svg>
              <span className="dark:text-[#f6f6f6]">Invite User</span>
            </div>
          </a>
          <a
            className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-[#c4c4c7] dark:hover:bg-[#f8fafc1a] active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={16}
                width={16}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                  fill="#666"
                ></path>
              </svg>
              <span className="dark:text-[#f6f6f6]">Create Team</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
