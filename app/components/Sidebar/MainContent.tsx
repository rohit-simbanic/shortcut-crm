import React from "react";

const MainContent = () => {
  return (
    <div className="flex gap-2 justify-start my-4 px-5">
      <div>
        <div className="flex justify-between items-center my-6">
          <div className="w-[160px] flex gap-2">
            <span>Unscheduled</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-lg">0</span>
          </div>
          <div className="flex gap-2">
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
              className="border-gray-300 rounded h-5 w-5"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[60px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
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
            <span>Ready for devel..</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-lg">0</span>
          </div>
          <div className="flex gap-2">
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
              className="border-gray-300 rounded h-5 w-5"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[60px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
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
            <span>In development</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-lg">0</span>
          </div>
          <div className="flex gap-2">
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
              className="border-gray-300 rounded h-5 w-5"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[60px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
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
            <span>Ready for Review</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-lg">0</span>
          </div>
          <div className="flex gap-2">
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
              className="border-gray-300 rounded h-5 w-5"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[60px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
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
            <span>Ready for Deploy</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-lg">0</span>
          </div>
          <div className="flex gap-2">
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
              className="border-gray-300 rounded h-5 w-5"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[60px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
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
            <span>Completed</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-lg">0</span>
          </div>
          <div className="flex gap-2">
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
              className="border-gray-300 rounded h-5 w-5"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[60px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
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
    </div>
  );
};

export default MainContent;
