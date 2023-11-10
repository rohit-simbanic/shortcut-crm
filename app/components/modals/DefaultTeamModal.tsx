import React from "react";

const DefaultTeamModal = () => {
  return (
    <div className="w-[236px] z-[99999] bg-white dark:bg-[#2d3545] flex flex-col justify-between fixed top-28 left-[8px] rounded-md shadow-md min-h-[177px] modal">
      <div className="p-2">
        <div className="pt-2 relative mx-auto text-gray-600">
          <input
            className="border-[1px] border-gray-300 bg-white dark:bg-[#2d3545] h-10 px-5 mb-3 w-full rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="space-x-2 bg-[#deeffa] dark:bg-[#485575] px-3 mr-8 rounded-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white w-full">
          <p className="text-sm font-bold text-black dark:text-gray-300">
            Default Team
          </p>
          <span className="text-sm -left-2 relative">6 Workflow States</span>
        </div>
      </div>
      <div className="bg-[#f1f3f7] dark:bg-[#2d3545] px-2">
        <div className="flex items-center w-full space-x-2 px-3 mr-8 rounded-md duration-500 ease-in-out py-2 my-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height={20}
            width={20}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3H6a1 1 0 1 0 0 2h3v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4Zm10 5v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3h2.325a.5.5 0 0 0 .374-.831l-.448-.506a1 1 0 0 1 1.498-1.326l2.656 3a1 1 0 0 1 0 1.326l-2.656 3a1 1 0 1 1-1.498-1.326l.448-.505A.5.5 0 0 0 13.325 9H11Z"
              fill="#666"
            ></path>
          </svg>{" "}
          <p className="text-sm font-bold text-black dark:text-gray-300">
            Edit Workflows
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefaultTeamModal;
