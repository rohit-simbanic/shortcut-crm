import React from "react";
interface TeamManageModalProps {
  setIsTeamManageOpen: (isOpen: boolean) => void;
}

const TeamManageModal: React.FC<TeamManageModalProps> = ({
  setIsTeamManageOpen,
}) => {
  return (
    <div className="w-[236px] z-[99999] bg-white dark:bg-[#2d3545] flex flex-col justify-between fixed top-[21rem] left-[148px] rounded-md shadow-md min-h-[164px] modal">
      <div className="px-2">
        <div className="flex justify-between mt-2">
          <p className="text-[13px] text-[#686c73]">Select Teams</p>
          <svg
            fill="#b3b3b3"
            width="22px"
            height="22px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer hover:text-[#555]"
            onClick={() => setIsTeamManageOpen(false)}
          >
            <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
          </svg>
        </div>
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
        <div className="flex justify-between mb-3">
          <p className="text-[13px] text-[#686c73] font-bold">Other Teams</p>
          <p className="text-[11px] text-[#3A95C9] cursor-pointer">
            Select team
          </p>
        </div>
        <div className="flex items-center relative mb-3">
          <div className="border-l-[3px] border-[#FF00FF] absolute h-9 -left-2"></div>
          <div className="space-x-2 bg-[#deeffa] dark:bg-[#485575] flex items-center px-3 rounded-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white w-full">
            <div className="bg-[#FF00FF] h-[25px] w-[25px] rounded-[50%]">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={22}
                width={22}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>

            <p className="text-sm font-bold text-black dark:text-gray-300">
              Default Team
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f3f7] dark:bg-[#2d3545] dark:border-t-[#3f4a5f] border-t-[1px] px-2">
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
              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
              fill="#666"
            ></path>
          </svg>{" "}
          <p className="text-sm font-bold text-black dark:text-gray-300">
            Manage Teams
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamManageModal;
