import React, { useState } from "react";

const ActivityTab = () => {
  const [activeTab, setActiveTab] = useState<string>("allActivity");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="modal bg-white w-[38vw] absolute top-12 z-50 rounded-md dark:bg-[#2d3545]">
      <nav className="flex flex-col sm:flex-row overflow-x-auto scrollbar-input dark:border-b-[#3f4a5f] items-center justify-between">
        <div className="flex justify-between">
          <button
            className={`text-gray-600 py-4 px-6 dark:hover:text-white focus:outline-none font-medium flex items-center gap-2 ${
              activeTab === "allActivity" &&
              "dark:text-white border-[#3a95c9] border-b-[3px]"
            }`}
            onClick={() => handleTabClick("allActivity")}
          >
            <span>All Activity</span>
          </button>
          <button
            className={`text-gray-600 py-4 px-6 dark:hover:text-white focus:outline-none border-b-1 font-medium flex items-center gap-2 ${
              activeTab === "comments" &&
              "dark:text-white border-[#3a95c9] border-b-[3px]"
            }`}
            onClick={() => handleTabClick("comments")}
          >
            <span>Comments</span>
          </button>
          <button
            className={`text-gray-600 py-4 px-6 dark:hover:text-white focus:outline-none border-b-1 font-medium flex items-center gap-2 ${
              activeTab === "mentions" &&
              "dark:text-white border-[#3a95c9] border-b-[3px]"
            }`}
            onClick={() => handleTabClick("mentions")}
          >
            <span>Mentions</span>
          </button>
        </div>
        <svg
          width="21px"
          height="21px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              stroke="#555"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M12.9046 3.06005C12.6988 3 12.4659 3 12 3C11.5341 3 11.3012 3 11.0954 3.06005C10.7942 3.14794 10.5281 3.32808 10.3346 3.57511C10.2024 3.74388 10.1159 3.96016 9.94291 4.39272C9.69419 5.01452 9.00393 5.33471 8.36857 5.123L7.79779 4.93281C7.3929 4.79785 7.19045 4.73036 6.99196 4.7188C6.70039 4.70181 6.4102 4.77032 6.15701 4.9159C5.98465 5.01501 5.83376 5.16591 5.53197 5.4677C5.21122 5.78845 5.05084 5.94882 4.94896 6.13189C4.79927 6.40084 4.73595 6.70934 4.76759 7.01551C4.78912 7.2239 4.87335 7.43449 5.04182 7.85566C5.30565 8.51523 5.05184 9.26878 4.44272 9.63433L4.16521 9.80087C3.74031 10.0558 3.52786 10.1833 3.37354 10.3588C3.23698 10.5141 3.13401 10.696 3.07109 10.893C3 11.1156 3 11.3658 3 11.8663C3 12.4589 3 12.7551 3.09462 13.0088C3.17823 13.2329 3.31422 13.4337 3.49124 13.5946C3.69158 13.7766 3.96395 13.8856 4.50866 14.1035C5.06534 14.3261 5.35196 14.9441 5.16236 15.5129L4.94721 16.1584C4.79819 16.6054 4.72367 16.829 4.7169 17.0486C4.70875 17.3127 4.77049 17.5742 4.89587 17.8067C5.00015 18.0002 5.16678 18.1668 5.5 18.5C5.83323 18.8332 5.99985 18.9998 6.19325 19.1041C6.4258 19.2295 6.68733 19.2913 6.9514 19.2831C7.17102 19.2763 7.39456 19.2018 7.84164 19.0528L8.36862 18.8771C9.00393 18.6654 9.6942 18.9855 9.94291 19.6073C10.1159 20.0398 10.2024 20.2561 10.3346 20.4249C10.5281 20.6719 10.7942 20.8521 11.0954 20.94C11.3012 21 11.5341 21 12 21C12.4659 21 12.6988 21 12.9046 20.94C13.2058 20.8521 13.4719 20.6719 13.6654 20.4249C13.7976 20.2561 13.8841 20.0398 14.0571 19.6073C14.3058 18.9855 14.9961 18.6654 15.6313 18.8773L16.1579 19.0529C16.605 19.2019 16.8286 19.2764 17.0482 19.2832C17.3123 19.2913 17.5738 19.2296 17.8063 19.1042C17.9997 18.9999 18.1664 18.8333 18.4996 18.5001C18.8328 18.1669 18.9994 18.0002 19.1037 17.8068C19.2291 17.5743 19.2908 17.3127 19.2827 17.0487C19.2759 16.8291 19.2014 16.6055 19.0524 16.1584L18.8374 15.5134C18.6477 14.9444 18.9344 14.3262 19.4913 14.1035C20.036 13.8856 20.3084 13.7766 20.5088 13.5946C20.6858 13.4337 20.8218 13.2329 20.9054 13.0088C21 12.7551 21 12.4589 21 11.8663C21 11.3658 21 11.1156 20.9289 10.893C20.866 10.696 20.763 10.5141 20.6265 10.3588C20.4721 10.1833 20.2597 10.0558 19.8348 9.80087L19.5569 9.63416C18.9478 9.26867 18.6939 8.51514 18.9578 7.85558C19.1262 7.43443 19.2105 7.22383 19.232 7.01543C19.2636 6.70926 19.2003 6.40077 19.0506 6.13181C18.9487 5.94875 18.7884 5.78837 18.4676 5.46762C18.1658 5.16584 18.0149 5.01494 17.8426 4.91583C17.5894 4.77024 17.2992 4.70174 17.0076 4.71872C16.8091 4.73029 16.6067 4.79777 16.2018 4.93273L15.6314 5.12287C14.9961 5.33464 14.3058 5.0145 14.0571 4.39272C13.8841 3.96016 13.7976 3.74388 13.6654 3.57511C13.4719 3.32808 13.2058 3.14794 12.9046 3.06005Z"
              stroke="#555"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </nav>
      <div className="header border-b-[1px] border-slate-200 flex justify-between px-4"></div>
      <div
        className="modal-content h-[75vh] overflow-y-auto py-3"
        id="searchBarScrollBar"
      >
        {activeTab === "allActivity" && (
          <>
            <h4 className="text-[18px] font-medium text-[#333] dark:text-[#b8b8bd]">
              Today
            </h4>
            <hr className="my-2" />
            <p className="text-[15px] text-[#686c73] mb-3">No activity.</p>
            <h4 className="text-[18px] font-medium text-[#333] dark:text-[#b8b8bd]">
              Yesterday
            </h4>
            <hr className="my-2" />
            <ul>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
            </ul>
          </>
        )}
        {activeTab === "comments" && (
          <>
            <h4 className="text-[18px] font-medium text-[#333] dark:text-[#b8b8bd]">
              Today
            </h4>
            <hr className="my-2" />
            <p className="text-[15px] text-[#686c73] mb-3">No activity.</p>
            <h4 className="text-[18px] font-medium text-[#333] dark:text-[#b8b8bd]">
              Yesterday
            </h4>
            <hr className="my-2" />
            <ul>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#CCBA45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
              <li className="px-1 py-2 hover:bg-gray-100 rounded-md font-bold flex items-center justify-between gap-5 dark:hover:bg-[#161b26]">
                <div className="flex items-center gap-2">
                  <button
                    className="py-1 rounded-[50%] px-1 text-center h-[37px] w-[40px] align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#D66E24] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>

                  <div>
                    <h4 className="dark:text-gray-100 text-[#686c73] text-[14px] font-normal">
                      <strong className="hover:cursor-pointer">
                        Nikita Patel
                      </strong>{" "}
                      created{" "}
                      <strong className="text-[#1f2532] dark:text-[#b8b8bd] hover:cursor-pointer">
                        Database Creation for Remainder Application
                      </strong>{" "}
                      in{" "}
                      <strong className="hover:cursor-pointer">
                        Unscheduled
                      </strong>
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#686c73] font-normal">
                    7:22 pm
                  </p>
                </div>
              </li>
            </ul>
          </>
        )}
        {activeTab === "mentions" && (
          <>
            <span className="text-sm font-normal dark:text-[#b8b8bd]">
              Recently Viewed
            </span>

            <div className="flex items-center justify-center flex-col gap-3">
              <p className="text-gray-300 text-sm font-light">
                No recently viewed Iterations found.
              </p>
            </div>
          </>
        )}
      </div>
      <div className="footer border-t-[1px] border-slate-200 dark:border-[#3f4a5f] flex justify-between py-4 px-4"></div>
    </div>
  );
};

export default ActivityTab;
