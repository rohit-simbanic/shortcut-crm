import React from "react";

const MainContent = () => {
  return (
    <div className="flex gap-2 justify-start my-4 px-5">
      <div>
        <div className="flex justify-between items-center my-6">
          <div className="w-[160px] flex gap-2">
            <span className="dark:text-gray-200">Unscheduled</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
              0
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                fill="#666"
              ></path>
            </svg>
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                fill="#666"
              ></path>
            </svg>
            <input
              type="checkbox"
              className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[60px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
          <svg
            height={21}
            width={21}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
              fill="#666"
            ></path>
          </svg>
          Add a story
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center my-6">
          <div className="w-[160px] flex gap-2">
            <span className="dark:text-gray-200">Ready for devel..</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
              0
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                fill="#666"
              ></path>
            </svg>
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                fill="#666"
              ></path>
            </svg>
            <input
              type="checkbox"
              className="border-gray-300 rounded h-4 w-4"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[60px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
          <svg
            height={21}
            width={21}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
              fill="#666"
            ></path>
          </svg>
          Add a story
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center my-6">
          <div className="w-[160px] flex gap-2">
            <span className="dark:text-gray-200">In development</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
              0
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                fill="#666"
              ></path>
            </svg>
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                fill="#666"
              ></path>
            </svg>
            <input
              type="checkbox"
              className="border-gray-300 rounded h-4 w-4"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[60px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
          <svg
            height={21}
            width={21}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
              fill="#666"
            ></path>
          </svg>
          Add a story
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center my-6">
          <div className="w-[160px] flex gap-2">
            <span className="dark:text-gray-200">Ready for Review</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
              0
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                fill="#666"
              ></path>
            </svg>
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                fill="#666"
              ></path>
            </svg>
            <input
              type="checkbox"
              className="border-gray-300 rounded h-4 w-4"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[60px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
          <svg
            height={21}
            width={21}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
              fill="#666"
            ></path>
          </svg>
          Add a story
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center my-6">
          <div className="w-[160px] flex gap-2">
            <span className="dark:text-gray-200">Ready for Deploy</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
              0
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                fill="#666"
              ></path>
            </svg>
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                fill="#666"
              ></path>
            </svg>
            <input
              type="checkbox"
              className="border-gray-300 rounded h-4 w-4"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[60px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
          <svg
            height={21}
            width={21}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
              fill="#666"
            ></path>
          </svg>
          Add a story
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center my-6">
          <div className="w-[160px] flex gap-2">
            <span className="dark:text-gray-200">Completed</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
              0
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                fill="#666"
              ></path>
            </svg>
            <svg
              height={21}
              width={21}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                fill="#666"
              ></path>
            </svg>
            <input
              type="checkbox"
              className="border-gray-300 rounded h-4 w-4"
            />
          </div>
        </div>

        <div
          className="h-[80vh] overflow-y-auto flex flex-col gap-3"
          id="mainDragBox"
        >
          <div
            draggable="true"
            className="w-[210px] sm:w-[280px] rounded-md  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg dark:text-white dark:border-[#1f2532] dark:border-[1px] cursor-pointer"
          >
            <p className="font-bold tracking-wide">Simbanic Services</p>
            <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
              0 of 2 completed tasks
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="bg-[#fcfae3] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-[#73818b]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <button
                  className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  RM
                </button>
              </div>
            </div>
          </div>
          <div
            draggable="true"
            className="w-[210px] sm:w-[280px] first:my-5 rounded-md  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg dark:text-white dark:border-[#1f2532] dark:border-[1px] cursor-pointer"
          >
            <p className="font-bold tracking-wide">Simbanic Services</p>
            <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
              0 of 2 completed tasks
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="bg-[#fcfae3] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-[#73818b]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <button
                  className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  RM
                </button>
              </div>
            </div>
          </div>
          <div
            draggable="true"
            className="w-[210px] sm:w-[280px] first:my-5 rounded-md  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg dark:text-white dark:border-[#1f2532] dark:border-[1px] cursor-pointer"
          >
            <p className="font-bold tracking-wide">Simbanic Services</p>
            <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
              0 of 2 completed tasks
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="bg-[#fcfae3] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-[#73818b]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <button
                  className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  RM
                </button>
              </div>
            </div>
          </div>
          <div
            draggable="true"
            className="w-[210px] sm:w-[280px] first:my-5 rounded-md  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg dark:text-white dark:border-[#1f2532] dark:border-[1px] cursor-pointer"
          >
            <p className="font-bold tracking-wide">Simbanic Services</p>
            <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
              0 of 2 completed tasks
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="bg-[#fcfae3] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-[#73818b]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <button
                  className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  RM
                </button>
              </div>
            </div>
          </div>
          <div
            draggable="true"
            className="w-[210px] sm:w-[280px] first:my-5 rounded-md  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg dark:text-white dark:border-[#1f2532] dark:border-[1px] cursor-pointer"
          >
            <p className="font-bold tracking-wide">Simbanic Services</p>
            <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
              0 of 2 completed tasks
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="bg-[#fcfae3] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-[#73818b]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <button
                  className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  RM
                </button>
              </div>
            </div>
          </div>
          <div
            draggable="true"
            className="w-[210px] sm:w-[280px] first:my-5 rounded-md  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg dark:text-white dark:border-[#1f2532] dark:border-[1px] cursor-pointer"
          >
            <p className="font-bold tracking-wide">Simbanic Services</p>
            <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
              0 of 2 completed tasks
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="bg-[#fcfae3] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-[#73818b]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <button
                  className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  RM
                </button>
              </div>
            </div>
          </div>
          <div
            draggable="true"
            className="w-[210px] sm:w-[280px] first:my-5 rounded-md  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg dark:text-white dark:border-[#1f2532] dark:border-[1px] cursor-pointer"
          >
            <p className="font-bold tracking-wide">Simbanic Services</p>
            <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
              0 of 2 completed tasks
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="bg-[#fcfae3] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-[#73818b]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <button
                  className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  RM
                </button>
              </div>
            </div>
          </div>
          <div
            draggable="true"
            className="w-[210px] sm:w-[280px] first:my-5 rounded-md  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg dark:text-white dark:border-[#1f2532] dark:border-[1px] cursor-pointer"
          >
            <p className="font-bold tracking-wide">Simbanic Services</p>
            <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
              0 of 2 completed tasks
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="bg-[#fcfae3] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-[#73818b]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <button
                  className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  RM
                </button>
              </div>
            </div>
          </div>
          <div
            draggable="true"
            className="w-[210px] sm:w-[280px] first:my-5 rounded-md  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg dark:text-white dark:border-[#1f2532] dark:border-[1px] cursor-pointer"
          >
            <p className="font-bold tracking-wide">Simbanic Services</p>
            <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
              0 of 2 completed tasks
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="bg-[#fcfae3] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-[#73818b]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <button
                  className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  RM
                </button>
              </div>
            </div>
          </div>
          <div
            draggable="true"
            className="w-[210px] sm:w-[280px] first:my-5 rounded-md  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg dark:text-white dark:border-[#1f2532] dark:border-[1px] cursor-pointer"
          >
            <p className="font-bold tracking-wide">Simbanic Services</p>
            <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
              0 of 2 completed tasks
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="bg-[#fcfae3] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-[#73818b]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <button
                  className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  RM
                </button>
              </div>
            </div>
          </div>
          <div
            draggable="true"
            className="w-[210px] sm:w-[280px] first:my-5 rounded-md  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg dark:text-white dark:border-[#1f2532] dark:border-[1px] cursor-pointer"
          >
            <p className="font-bold tracking-wide">Simbanic Services</p>
            <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
              0 of 2 completed tasks
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="bg-[#fcfae3] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-[50%] bg-[#73818b]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <button
                  className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  RM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
