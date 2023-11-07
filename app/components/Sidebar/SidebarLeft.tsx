"use client";
import { SidebarContext } from "@/app/context/sidebarContext";
import React, { useContext, useState } from "react";

const SidebarLeft = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpenAlt, setDropdownOpenAlt] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };
  const toggleDropdownAlt = () => {
    setDropdownOpenAlt((prevState) => !prevState);
  };

  const { isCollapsed, toggleSidebarcollapse, setCollapse } =
    useContext(SidebarContext);
  console.log("isCollapsed", isCollapsed);
  return (
    <div className="border-r border-gray-300 p-5 relative z-40 bg-[#f8f9fb] dark:bg-black min-h-screen">
      <div
        className="h-[24px] w-[24px] bg-[#f8f9fb] dark:bg-slate-200 rounded-[50%] border-[1px] border-[#e4e8eb] absolute top-[11px] right-[-12px] cursor-pointer"
        onClick={toggleSidebarcollapse}
      >
        {isCollapsed ? (
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.793 13.207a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L7.793 7.207a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z"
              fill="#666"
            ></path>
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.207 5.793a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 0 0 1.414l1.586 1.586a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0Z"
              fill="#666"
            ></path>
          </svg>
        )}
      </div>
      <div
        data-collapse={isCollapsed}
        className="transition-all duration-300 ease-in-out cubic-bezier(0.175, 0.885, 0.32, 1.1) w-[130px]"
      >
        <ul className="flex flex-col gap-[3px]">
          <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md items-center leading-3">
            {isCollapsed ? (
              <svg
                width="22"
                height="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-110 transform scale-75"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.879 3.879a3 3 0 0 1 4.242 0l7 7A3 3 0 0 1 22 13v6.757a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V13a3 3 0 0 1 .879-2.121l7-7ZM12 12.757a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  fill="#686c73"
                ></path>
              </svg>
            ) : (
              <>
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-110 transform scale-75"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.879 3.879a3 3 0 0 1 4.242 0l7 7A3 3 0 0 1 22 13v6.757a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V13a3 3 0 0 1 .879-2.121l7-7ZM12 12.757a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                    fill="#686c73"
                  ></path>
                </svg>
                <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                  Home
                </span>
              </>
            )}
          </li>
          <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
            {isCollapsed ? (
              <svg
                width="22"
                height="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-110 transform scale-75"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 1a3 3 0 0 1 3 3v13a2 2 0 0 1-2 2H5a1 1 0 1 0 0 2h16a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h14ZM5 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
                  fill="#686c73"
                ></path>
              </svg>
            ) : (
              <>
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-110 transform scale-75"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 1a3 3 0 0 1 3 3v13a2 2 0 0 1-2 2H5a1 1 0 1 0 0 2h16a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h14ZM5 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
                    fill="#686c73"
                  ></path>
                </svg>
                <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                  Docs
                </span>
              </>
            )}
          </li>
          <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
            {isCollapsed ? (
              <svg
                width="22"
                height="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-110 transform scale-75"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.666 2A3 3 0 0 0 4.78 4.18l-3.694 13A3 3 0 0 0 3.97 21H10a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1h6.029a3 3 0 0 0 2.885-3.82l-3.695-13A3 3 0 0 0 16.334 2H7.666zM11 6a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V6zm1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1z"
                  fill="#686c73"
                ></path>
              </svg>
            ) : (
              <>
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-110 transform scale-75"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.666 2A3 3 0 0 0 4.78 4.18l-3.694 13A3 3 0 0 0 3.97 21H10a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1h6.029a3 3 0 0 0 2.885-3.82l-3.695-13A3 3 0 0 0 16.334 2H7.666zM11 6a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V6zm1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1z"
                    fill="#686c73"
                  ></path>
                </svg>
                <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                  Roadmap
                </span>
              </>
            )}
          </li>
          <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
            {isCollapsed ? (
              <svg
                width="22"
                height="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-110 transform scale-75"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.364 3.65a8.967 8.967 0 0 0-12.728 0c-3.515 3.533-3.515 9.26 0 12.793l4.941 4.967a2.01 2.01 0 0 0 2.846 0l4.941-4.967c3.515-3.533 3.515-9.26 0-12.793ZM12 10.927c1.105 0 2-.889 2-1.985a1.993 1.993 0 0 0-2-1.986c-1.105 0-2 .89-2 1.986s.895 1.985 2 1.985Z"
                  fill="#686c73"
                ></path>
              </svg>
            ) : (
              <>
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-110 transform scale-75"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.364 3.65a8.967 8.967 0 0 0-12.728 0c-3.515 3.533-3.515 9.26 0 12.793l4.941 4.967a2.01 2.01 0 0 0 2.846 0l4.941-4.967c3.515-3.533 3.515-9.26 0-12.793ZM12 10.927c1.105 0 2-.889 2-1.985a1.993 1.993 0 0 0-2-1.986c-1.105 0-2 .89-2 1.986s.895 1.985 2 1.985Z"
                    fill="#686c73"
                  ></path>
                </svg>
                <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                  Milestone
                </span>
              </>
            )}
          </li>
          <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
            {isCollapsed ? (
              <svg
                width="22"
                height="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-110 transform scale-75"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm5 3a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Zm-4 5a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm7-1a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V9Z"
                  fill="#686c73"
                ></path>
              </svg>
            ) : (
              <>
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-110 transform scale-75"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm5 3a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Zm-4 5a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm7-1a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V9Z"
                    fill="#686c73"
                  ></path>
                </svg>
                <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                  Reports
                </span>
              </>
            )}
          </li>
          <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
            {isCollapsed ? (
              <svg
                width="22"
                height="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-110 transform scale-75"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.98 2.63a1.391 1.391 0 0 0-1.61-1.61c-1.918.316-3.608.915-5.041 1.71-.666.37-1.464.413-2.204.234-1.957-.472-4.062.092-5.575 1.694-.285.285-.57.655-.856 1.034a.203.203 0 0 0 .019.266l1.735 1.734c.478.479.576 1.225.362 1.867a16.35 16.35 0 0 0-.432 1.625c-.217.998.131 2.02.853 2.742.694.693 1.667 1.046 2.629.855.514-.102 1.09-.24 1.615-.416.686-.231 1.496-.15 2.008.362l1.693 1.693a.187.187 0 0 0 .222.034c.385-.212.762-.51 1.052-.897 1.545-1.545 2.085-3.785 1.62-5.801-.154-.669-.121-1.382.196-1.99A17.035 17.035 0 0 0 18.98 2.63Zm-4.088 4.058a1.603 1.603 0 1 1-3.206 0 1.603 1.603 0 0 1 3.206 0ZM4.657 15.343c-.855-.855-2.137-.855-2.992 0-.855.748-.641 3.633-.641 3.633s2.778.214 3.633-.64c.855-.856.855-2.138 0-2.993Z"
                  fill="#686c73"
                ></path>
              </svg>
            ) : (
              <>
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-110 transform scale-75"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.98 2.63a1.391 1.391 0 0 0-1.61-1.61c-1.918.316-3.608.915-5.041 1.71-.666.37-1.464.413-2.204.234-1.957-.472-4.062.092-5.575 1.694-.285.285-.57.655-.856 1.034a.203.203 0 0 0 .019.266l1.735 1.734c.478.479.576 1.225.362 1.867a16.35 16.35 0 0 0-.432 1.625c-.217.998.131 2.02.853 2.742.694.693 1.667 1.046 2.629.855.514-.102 1.09-.24 1.615-.416.686-.231 1.496-.15 2.008.362l1.693 1.693a.187.187 0 0 0 .222.034c.385-.212.762-.51 1.052-.897 1.545-1.545 2.085-3.785 1.62-5.801-.154-.669-.121-1.382.196-1.99A17.035 17.035 0 0 0 18.98 2.63Zm-4.088 4.058a1.603 1.603 0 1 1-3.206 0 1.603 1.603 0 0 1 3.206 0ZM4.657 15.343c-.855-.855-2.137-.855-2.992 0-.855.748-.641 3.633-.641 3.633s2.778.214 3.633-.64c.855-.856.855-2.138 0-2.993Z"
                    fill="#686c73"
                  ></path>
                </svg>
                <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                  Projects
                </span>
              </>
            )}
          </li>
        </ul>
        <nav className="flex justify-between flex-col min-h-[67vh]">
          <div>
            {isCollapsed ? (
              ""
            ) : (
              <div className="flex justify-between items-center my-6">
                <span className="dark:text-[#828fa3]">Teams</span>

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="list-text"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                    fill="#666"
                  ></path>
                </svg>
              </div>
            )}
            <div
              className={`flex flex-col gap-[4px] ${isCollapsed ? "mt-8" : ""}`}
            >
              <button
                className={`flex justify-center gap-3 px-1 py-1 rounded-md items-center hover:bg-[#e4e8eb] ${
                  isDropdownOpen ? "" : "bg-[#deeffa]"
                }`}
                onClick={toggleDropdown}
              >
                <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                {!isCollapsed && (
                  <span className="dark:text-[#828fa3] list-text text-sm">
                    All Work
                  </span>
                )}
                {isDropdownOpen && !isCollapsed && (
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.293 7.793a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                      fill="#666"
                    ></path>
                  </svg>
                )}
                {!isDropdownOpen && !isCollapsed && (
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.207 5.793a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 0 0 1.414l1.586 1.586a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0Z"
                      fill="#666"
                    ></path>
                  </svg>
                )}
              </button>
              {isDropdownOpen && (
                <div
                  id="dropdown-menu"
                  className={`mt-2 ${
                    isCollapsed ? "ml-[17px]" : "ml-[9px]"
                  } border-l-[1px] ${
                    isCollapsed ? "h-[70px]" : ""
                  } dark:border-slate-50 list-text`}
                >
                  {!isCollapsed && (
                    <div
                      className="py-0 p-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="dropdown-button"
                    >
                      <a
                        href="#"
                        className="block px-4 py-1 mb-1 text-sm text-gray-700 rounded-md dark:bg-[#828fa3] hover:bg-gray-100"
                        role="menuitem"
                      >
                        Stories
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-1 mb-1 text-sm text-gray-700 rounded-md dark:bg-[#828fa3] hover:bg-gray-100"
                        role="menuitem"
                      >
                        Iteration
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-1 mb-1 text-sm text-gray-700 rounded-md dark:bg-[#828fa3] hover:bg-gray-100"
                        role="menuitem"
                      >
                        Backlogs
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-1 mb-1 text-sm text-gray-700 rounded-md dark:bg-[#828fa3] hover:bg-gray-100"
                        role="menuitem"
                      >
                        Epics
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-1 mb-1 text-sm text-gray-700 rounded-md dark:bg-[#828fa3] hover:bg-gray-100"
                        role="menuitem"
                      >
                        Status
                      </a>
                    </div>
                  )}
                </div>
              )}
              <button
                className={`flex justify-center gap-3 px-1 py-1 rounded-md items-center hover:bg-[#e4e8eb] ${
                  isDropdownOpenAlt ? "" : "bg-[#deeffa]"
                }`}
                onClick={toggleDropdownAlt}
              >
                <div className="w-[20px] h-[20px] rounded-[50%] bg-[#cd65b6] hover:scale-110">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                {!isCollapsed && (
                  <span className="dark:text-[#828fa3] list-text text-sm">
                    Backend
                  </span>
                )}
                {isDropdownOpenAlt && !isCollapsed && (
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.293 7.793a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                      fill="#666"
                    ></path>
                  </svg>
                )}
                {!isDropdownOpenAlt && !isCollapsed && (
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.207 5.793a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 0 0 1.414l1.586 1.586a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0Z"
                      fill="#666"
                    ></path>
                  </svg>
                )}
              </button>
              {isDropdownOpenAlt && (
                <div
                  id="dropdown-menu"
                  className={`mt-2 ml-[9px] ${
                    isCollapsed ? "ml-[17px]" : "ml-[9px]"
                  } border-l-[1px] ${
                    isCollapsed ? "h-[70px]" : ""
                  } dark:border-slate-50 list-text`}
                >
                  {!isCollapsed && (
                    <div
                      className="py-0 p-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="dropdown-button"
                    >
                      <a
                        href="#"
                        className="block px-4 py-1 mb-1 text-sm text-gray-700 rounded-md dark:bg-[#828fa3] hover:bg-gray-100"
                        role="menuitem"
                      >
                        Stories
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-1 mb-1 text-sm text-gray-700 rounded-md dark:bg-[#828fa3] hover:bg-gray-100"
                        role="menuitem"
                      >
                        Iteration
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-1 mb-1 text-sm text-gray-700 rounded-md dark:bg-[#828fa3] hover:bg-gray-100"
                        role="menuitem"
                      >
                        Backlogs
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-1 mb-1 text-sm text-gray-700 rounded-md dark:bg-[#828fa3] hover:bg-gray-100"
                        role="menuitem"
                      >
                        Epics
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-1 mb-1 text-sm text-gray-700 rounded-md dark:bg-[#828fa3] hover:bg-gray-100"
                        role="menuitem"
                      >
                        Status
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <ul className="flex flex-col gap-[3px] mt-8">
            <li
              className={`flex ${
                isCollapsed ? "justify-center" : "justify-start"
              } gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-1 py-1 rounded-md items-center leading-3`}
            >
              {isCollapsed ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-110 transform scale-75"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.675 2.317c-.426-1.756-2.924-1.756-3.35 0a1.724 1.724 0 0 1-2.573 1.066c-1.543-.94-3.31.826-2.37 2.37.608.996.07 2.296-1.065 2.572-1.756.426-1.756 2.924 0 3.35a1.724 1.724 0 0 1 1.066 2.573c-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 0 1 2.572 1.065c.426 1.756 2.924 1.756 3.35 0a1.724 1.724 0 0 1 2.573-1.066c1.543.94 3.31-.826 2.37-2.37a1.724 1.724 0 0 1 1.065-2.572c1.756-.426 1.756-2.924 0-3.35a1.724 1.724 0 0 1-1.066-2.573c.94-1.543-.826-3.31-2.37-2.37a1.724 1.724 0 0 1-2.572-1.065ZM10 13.375a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z"
                    fill="#686c73"
                  ></path>
                </svg>
              ) : (
                <>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:scale-110 transform scale-75"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.675 2.317c-.426-1.756-2.924-1.756-3.35 0a1.724 1.724 0 0 1-2.573 1.066c-1.543-.94-3.31.826-2.37 2.37.608.996.07 2.296-1.065 2.572-1.756.426-1.756 2.924 0 3.35a1.724 1.724 0 0 1 1.066 2.573c-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 0 1 2.572 1.065c.426 1.756 2.924 1.756 3.35 0a1.724 1.724 0 0 1 2.573-1.066c1.543.94 3.31-.826 2.37-2.37a1.724 1.724 0 0 1 1.065-2.572c1.756-.426 1.756-2.924 0-3.35a1.724 1.724 0 0 1-1.066-2.573c.94-1.543-.826-3.31-2.37-2.37a1.724 1.724 0 0 1-2.572-1.065ZM10 13.375a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z"
                      fill="#686c73"
                    ></path>
                  </svg>
                  <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                    Settings
                  </span>
                </>
              )}
            </li>
            <li
              className={`flex ${
                isCollapsed ? "justify-center" : "justify-start"
              } gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-1 py-1 rounded-md items-center leading-3`}
            >
              {isCollapsed ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-110 transform scale-75"
                >
                  <path
                    d="M10 3.5a1.5 1.5 0 0 1 3 0V4a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-.5a1.5 1.5 0 0 0 0 3h.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.5a1.5 1.5 0 0 0-3 0v.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1h-.5a1.5 1.5 0 0 1 0-3H4a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-.5Z"
                    fill="#686c73"
                  ></path>
                </svg>
              ) : (
                <>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:scale-110 transform scale-75"
                  >
                    <path
                      d="M10 3.5a1.5 1.5 0 0 1 3 0V4a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-.5a1.5 1.5 0 0 0 0 3h.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.5a1.5 1.5 0 0 0-3 0v.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1h-.5a1.5 1.5 0 0 1 0-3H4a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-.5Z"
                      fill="#686c73"
                    ></path>
                  </svg>
                  <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                    Integrations
                  </span>
                </>
              )}
            </li>
            <li
              className={`flex ${
                isCollapsed ? "justify-center" : "justify-start"
              } gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-1 py-1 rounded-md items-center leading-3`}
            >
              {isCollapsed ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-110 transform scale-75"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM.582 15.626A8.143 8.143 0 0 1 7.358 12h2.284a8.143 8.143 0 0 1 6.775 3.626c.677 1.015-.05 2.374-1.27 2.374H1.853c-1.22 0-1.947-1.36-1.27-2.374ZM17 10a1 1 0 0 1-1-1V8h-1a1 1 0 1 1 0-2h1V5a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 0 1-1 1Z"
                    fill="#686c73"
                  ></path>
                </svg>
              ) : (
                <>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:scale-110 transform scale-75"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM.582 15.626A8.143 8.143 0 0 1 7.358 12h2.284a8.143 8.143 0 0 1 6.775 3.626c.677 1.015-.05 2.374-1.27 2.374H1.853c-1.22 0-1.947-1.36-1.27-2.374ZM17 10a1 1 0 0 1-1-1V8h-1a1 1 0 1 1 0-2h1V5a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 0 1-1 1Z"
                      fill="#686c73"
                    ></path>
                  </svg>
                  <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                    Invite users
                  </span>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarLeft;
