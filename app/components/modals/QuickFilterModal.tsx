import React from "react";
interface QuickFilterModalProps {
  setFilterModalOpen: (isOpen: boolean) => void;
}

const QuickFilterModal: React.FC<QuickFilterModalProps> = ({
  setFilterModalOpen,
}) => {
  return (
    <div className="absolute top-[80px] z-50 modal bg-white min-h-[600px] w-[630px] left-[111px] rounded-md shadow-[rgba(0,0,0,0.35)_0px_5px_15px] p-5 dark:bg-[#2d3545]">
      <div className="flex justify-between">
        <div></div>
        <svg
          fill="#b3b3b3"
          width="22px"
          height="22px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer hover:text-[#555]"
          onClick={() => setFilterModalOpen(false)}
        >
          <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z" />
        </svg>
      </div>
      <h3 className="text-md font-bold text-[#1f2532] mb-5 dark:text-[#f6f6f6]">
        Filter by Label, User or Keyword
      </h3>
      <div className="flex items-center gap-8">
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                  fill="#3a95c9"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h20v20H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className="text-[14px]">Labeled as...</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2.233 15.626C3.591 13.361 6.646 12 9.095 12h2.054c2.449 0 5.26 1.36 6.618 3.626.608 1.015-.046 2.374-1.143 2.374H3.376c-1.097 0-1.751-1.36-1.143-2.374Z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Owned or requested</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M13 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm.12 6.3c-.251-.628-1.044-.83-1.644-.52a6.5 6.5 0 1 1 2.805-2.805c-.31.601-.11 1.394.518 1.645l1.444.577a1.958 1.958 0 1 1-2.546 2.546l-.577-1.444Z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Has keyword ...</p>
          </button>
        </div>
      </div>
      <hr className="my-4" />
      <h3 className="text-md font-bold text-[#1f2532] mb-5 dark:text-[#f6f6f6]">
        Filter by Story Attributes
      </h3>
      <div className="flex items-center gap-8">
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M10.5 19a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm1-12.75a1 1 0 1 0-2 0v4.25a1 1 0 0 0 .293.707l3.005 3.005a1 1 0 0 0 1.414-1.414L11.5 10.086V6.25z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Owned by me</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2.233 15.626C3.591 13.361 6.646 12 9.095 12h2.054c2.449 0 5.26 1.36 6.618 3.626.608 1.015-.046 2.374-1.143 2.374H3.376c-1.097 0-1.751-1.36-1.143-2.374Z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Updated today</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6] ">
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#a)">
                <path
                  d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                  fill="#c9a61d"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h20v20H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className="text-[14px]">Features</p>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M10.5 19a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm1-12.75a1 1 0 1 0-2 0v4.25a1 1 0 0 0 .293.707l3.005 3.005a1 1 0 0 0 1.414-1.414L11.5 10.086V6.25z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Requested by me</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2.233 15.626C3.591 13.361 6.646 12 9.095 12h2.054c2.449 0 5.26 1.36 6.618 3.626.608 1.015-.046 2.374-1.143 2.374H3.376c-1.097 0-1.751-1.36-1.143-2.374Z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Updated in last week</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M13.856 4.403c-.24-.201-.275-.57-.054-.79l.49-.492a1 1 0 0 0-1.413-1.414l-1.065 1.064c-.246.247-.603.341-.948.291a6.051 6.051 0 0 0-1.732 0c-.345.05-.702-.044-.948-.29L7.12 1.707a1 1 0 1 0-1.414 1.414l.49.491c.222.222.187.59-.053.791A6.023 6.023 0 0 0 4.616 6.35c-.187.38-.558.651-.982.651H2a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 1 0 0 2h1.634c.424 0 .795.271.982.651a6.02 6.02 0 0 0 3.245 2.957c.578.22 1.139-.254 1.139-.873V15a1 1 0 1 1 2 0v2.735c0 .619.56 1.093 1.139.873a6.02 6.02 0 0 0 3.245-2.957c.187-.38.558-.651.982-.651H18a1 1 0 1 0 0-2h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a1 1 0 1 0 0-2h-1.634c-.424 0-.794-.271-.982-.651a6.024 6.024 0 0 0-1.528-1.946Z"
                fill="#666"
              ></path>
            </svg>
            <p className="text-[14px]">Bugs</p>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M10.5 19a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm1-12.75a1 1 0 1 0-2 0v4.25a1 1 0 0 0 .293.707l3.005 3.005a1 1 0 0 0 1.414-1.414L11.5 10.086V6.25z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Followed by me</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M10.5 19a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm1-12.75a1 1 0 1 0-2 0v4.25a1 1 0 0 0 .293.707l3.005 3.005a1 1 0 0 0 1.414-1.414L11.5 10.086V6.25z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Created today</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M11.476 14.28c.6-.31 1.393-.108 1.644.52l.577 1.443a1.958 1.958 0 1 0 2.546-2.546l-1.444-.577c-.627-.251-.828-1.044-.519-1.644A6.5 6.5 0 0 0 6.7 2.253c-.343.098-.427.526-.172.776l1.897 1.86a2.5 2.5 0 1 1-3.536 3.536L3.03 6.528c-.25-.255-.678-.171-.777.172a6.5 6.5 0 0 0 9.223 7.58Z"
                fill="#666"
              ></path>
            </svg>
            <p className="text-[14px]">Chores</p>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M10.5 19a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm1-12.75a1 1 0 1 0-2 0v4.25a1 1 0 0 0 .293.707l3.005 3.005a1 1 0 0 0 1.414-1.414L11.5 10.086V6.25z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">No owner</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2.233 15.626C3.591 13.361 6.646 12 9.095 12h2.054c2.449 0 5.26 1.36 6.618 3.626.608 1.015-.046 2.374-1.143 2.374H3.376c-1.097 0-1.751-1.36-1.143-2.374Z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Created in last week</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                d="M15.5 2A1.5 1.5 0 0 0 14 3.5v13a1.5 1.5 0 0 0 3 0v-13A1.5 1.5 0 0 0 15.5 2ZM8 8.5a1.5 1.5 0 1 1 3 0v8a1.5 1.5 0 0 1-3 0v-8Zm-6 5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-3 0v-3Z"
                fill="#666"
              ></path>
            </svg>
            <p className="text-[14px]">By estimate..</p>
          </button>
        </div>
      </div>
      <hr className="my-4" />
      <h3 className="text-md font-bold text-[#1f2532] mb-5 dark:text-[#f6f6f6]">
        Filter by Workstream
      </h3>
      <div className="flex items-center gap-8">
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm2 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 5a5 5 0 0 0 .5-9.975.463.463 0 0 0-.5.474v4.003a.499.499 0 0 1-.5.498h-4c-.276 0-.503.224-.475.5a4.984 4.984 0 0 0 1.404 3A4.985 4.985 0 0 0 10 15z"
                fill="#666"
              ></path>
            </svg>
            <p className="text-[14px]">Started Iterations</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm2 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 5a5 5 0 0 0 .5-9.975.463.463 0 0 0-.5.474v4.003a.499.499 0 0 1-.5.498h-4c-.276 0-.503.224-.475.5a4.984 4.984 0 0 0 1.404 3A4.985 4.985 0 0 0 10 15z"
                fill="#666"
              ></path>
            </svg>
            <p className="text-[14px]">In-Progress Epics</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.657 3.271c-3.124-3.028-8.19-3.028-11.314 0a7.587 7.587 0 0 0 0 10.966l4.392 4.257a1.834 1.834 0 0 0 2.53 0l4.392-4.257a7.587 7.587 0 0 0 0-10.966ZM10 9.51c.982 0 1.778-.762 1.778-1.702S10.982 6.105 10 6.105s-1.778.762-1.778 1.702S9.018 9.51 10 9.51Z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">In Milestone...</p>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="w-[33%]">
          {" "}
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                fill="#666"
              ></path>
            </svg>
            <p className="text-[14px]">Unstarted Iterations</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                fill="#666"
              ></path>
            </svg>
            <p className="text-[14px]">To do epics</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.657 3.271c-3.124-3.028-8.19-3.028-11.314 0a7.587 7.587 0 0 0 0 10.966l4.392 4.257a1.834 1.834 0 0 0 2.53 0l4.392-4.257a7.587 7.587 0 0 0 0-10.966ZM10 9.51c.982 0 1.778-.762 1.778-1.702S10.982 6.105 10 6.105s-1.778.762-1.778 1.702S9.018 9.51 10 9.51Z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">No Milestone</p>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm4.17-10.455a1.125 1.125 0 0 0-1.59-1.59l-3.351 3.35a.5.5 0 0 1-.708 0l-1.1-1.1a1.125 1.125 0 1 0-1.591 1.59l2.25 2.25c.439.44 1.151.44 1.59 0l4.5-4.5z"
                fill="#64A44C"
              ></path>
            </svg>
            <p className="text-[14px]">Done iteration</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm4.17-10.455a1.125 1.125 0 0 0-1.59-1.59l-3.351 3.35a.5.5 0 0 1-.708 0l-1.1-1.1a1.125 1.125 0 1 0-1.591 1.59l2.25 2.25c.439.44 1.151.44 1.59 0l4.5-4.5z"
                fill="#64A44C"
              ></path>
            </svg>
            <p className="text-[14px]">Done epics</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.62 2.954c-.76-1.272-2.48-1.272-3.24 0L1.313 14.776C.482 16.166 1.403 18 2.933 18h14.134c1.53 0 2.451-1.834 1.62-3.224L11.62 2.954ZM9 7a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0V7Zm0 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                fill="#ccba45"
              ></path>
            </svg>
            <p className="text-[14px]">Stale</p>
          </button>
        </div>
      </div>
      <hr className="my-4" />
      <h3 className="text-md font-bold text-[#1f2532] mb-5 dark:text-[#f6f6f6]">
        More Story Filters
      </h3>
      <div className="flex items-center gap-8">
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a3 3 0 0 0-3 3v4a5 5 0 0 0 10 0V7a1 1 0 1 1 2 0v4a7 7 0 1 1-14 0V7a5 5 0 0 1 10 0v4a3 3 0 1 1-6 0V7a1 1 0 0 1 2 0v4a1 1 0 1 0 2 0V7a3 3 0 0 0-3-3Z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Labeled as...</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-9.293a1 1 0 0 0-1.414-1.414l-2.94 2.94a.5.5 0 0 1-.707 0l-.939-.94a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Epic list......</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
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
                  fill="#3a95c9"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h20v20H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className="text-[14px]">By estimate..</p>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.058 4.942a3.066 3.066 0 0 0-4.335 0L9.277 6.387a1.022 1.022 0 0 1-1.445-1.445l1.445-1.445a5.11 5.11 0 0 1 7.226 7.226l-1.445 1.445a1.022 1.022 0 0 1-1.445-1.445l1.445-1.446a3.066 3.066 0 0 0 0-4.335ZM4.942 15.058a3.066 3.066 0 0 0 4.335 0l1.446-1.445a1.022 1.022 0 1 1 1.445 1.445l-1.445 1.445a5.11 5.11 0 0 1-7.226-7.226l1.445-1.445a1.022 1.022 0 1 1 1.445 1.445l-1.445 1.446a3.066 3.066 0 0 0 0 4.335Zm7.226-5.78a1.022 1.022 0 0 0-1.445-1.446l-2.89 2.89a1.022 1.022 0 0 0 1.444 1.446l2.89-2.89Z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Has External Links</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                fill="#666"
              ></path>
            </svg>
            <p className="text-[14px]">To do epics</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 10a6 6 0 0 1-8.452 5.477c-.565-.253-.626-.985-.189-1.422l6.696-6.696c.437-.437 1.17-.376 1.422.189.336.748.523 1.578.523 2.452ZM4.522 12.453c.254.564.986.625 1.423.188l6.696-6.696c.437-.437.376-1.17-.188-1.423a6 6 0 0 0-7.93 7.93ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                fill="#a00808"
              ></path>
            </svg>
            <p className="text-[14px]">No Milestone</p>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 13V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.172a2 2 0 0 1 1.414.586l1.707 1.707a1 1 0 0 0 1.414 0l1.707-1.707A2 2 0 0 1 13.828 15H16a2 2 0 0 0 2-2ZM5 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2H6Z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Done iteration</p>
          </button>
        </div>
        <div className="w-[33%]">
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm0 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                fill="#3a95c9"
              ></path>
            </svg>
            <p className="text-[14px]">Done epics</p>
          </button>
        </div>
        <div className="w-[33%]">
          {" "}
          <button className="flex items-center gap-2 hover:bg-[#f1f3f7] dark:hover:bg-[#1f2532] py-1 px-1 rounded-md dark:text-[#f6f6f6]">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.62 2.954c-.76-1.272-2.48-1.272-3.24 0L1.313 14.776C.482 16.166 1.403 18 2.933 18h14.134c1.53 0 2.451-1.834 1.62-3.224L11.62 2.954ZM9 7a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0V7Zm0 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                fill="#ccba45"
              ></path>
            </svg>
            <p className="text-[14px]">Stale</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickFilterModal;
