//@ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import Popup from "reactjs-popup";

const CreateButton = () => {
  return (
    <Popup
      trigger={
        <div className="relative inline-block text-left">
          <button className="inline-flex justify-center border-r-[1px] border-gray-500 w-full px-4 py-2 text-sm font-bold text-white bg-[#3a95c9] rounded-l-md shadow-sm focus:outline-none hover:bg-[#2d78a4]">
            Create Story
          </button>
        </div>
      }
      modal
      nested
    >
      {(close: React.MouseEventHandler<HTMLButtonElement> | undefined) => (
        <div className="modal">
          <div className="flex justify-between items-start modal-header">
            <h3 className="font-bold text-lg text-[#1f2532] my-6">
              Create Story
            </h3>
            <div className="flex items-center">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.058 4.942a3.066 3.066 0 0 0-4.335 0L9.277 6.387a1.022 1.022 0 0 1-1.445-1.445l1.445-1.445a5.11 5.11 0 0 1 7.226 7.226l-1.445 1.445a1.022 1.022 0 0 1-1.445-1.445l1.445-1.446a3.066 3.066 0 0 0 0-4.335ZM4.942 15.058a3.066 3.066 0 0 0 4.335 0l1.446-1.445a1.022 1.022 0 1 1 1.445 1.445l-1.445 1.445a5.11 5.11 0 0 1-7.226-7.226l1.445-1.445a1.022 1.022 0 1 1 1.445 1.445l-1.445 1.446a3.066 3.066 0 0 0 0 4.335Zm7.226-5.78a1.022 1.022 0 0 0-1.445-1.446l-2.89 2.89a1.022 1.022 0 0 0 1.444 1.446l2.89-2.89Z"
                  fill="#ddd"
                ></path>
              </svg>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="27px"
                height="27px"
              >
                <path
                  d="M10 6a1 1 0 0 1 1-1h2.5A1.5 1.5 0 0 1 15 6.5V9a1 1 0 1 1-2 0V8a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1ZM10 14a1 1 0 0 1-1 1H6.5A1.5 1.5 0 0 1 5 13.5V11a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1Z"
                  fill="#ddd"
                ></path>
              </svg>
              <button className="close" onClick={close}>
                <svg
                  fill="#b3b3b3"
                  width="29px"
                  height="29px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hover:cursor-pointer hover:text-[#555]"
                >
                  <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className="content h-[509px] overflow-y-scroll flex gap-4"
            id="style-2"
          >
            <div className="w-[80%]">
              <h4 className="mb-2 font-medium text-[#444]">Story Title</h4>
              <textarea
                id="message"
                rows="2"
                class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded resize-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
              <form className="my-2">
                <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                  <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                      <div className="flex items-center space-x-1 sm:pr-4">
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-tooltip-target="tooltip-fullscreen"
                      class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="tooltip-fullscreen"
                      role="tooltip"
                      class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                    >
                      Show full screen
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                  <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                    <label for="editor" class="sr-only">
                      Publish post
                    </label>
                    <textarea
                      id="editor"
                      rows="8"
                      class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write an article..."
                      required
                    ></textarea>
                  </div>
                </div>
              </form>
              <h4 className="my-2 font-medium text-[#444]">Tasks</h4>

              <hr className="mb-2" />

              <button
                type="button"
                className="border-[1px] border-[#e4e8eb] rounded-md px-1 py-1 shadow hover:shadow-md text-xs"
              >
                <span className="text-[#13ae47] font-bold">+</span> Add Task
              </button>
              <h4 className="my-2 font-medium text-[#444]">Add To Story</h4>

              <hr className="mb-2" />
              <div className="flex gap-2">
                <button
                  type="button"
                  className="border-[1px] border-[#e4e8eb] rounded-md px-1 py-1 shadow hover:shadow-md text-xs flex gap-2"
                >
                  <span className="text-[#13ae47] font-bold">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      height={15}
                      width={15}
                    >
                      <path
                        d="M8 5a1 1 0 0 0 0 2h4.379a.5.5 0 0 1 .353.854l-.439.439a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414l.44.44a.5.5 0 0 1-.354.853H8Zm4 10a1 1 0 0 0 0-2H7.621a.5.5 0 0 1-.353-.854l.439-.439a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414l-.44-.44A.5.5 0 0 1 7.622 15H12Z"
                        fill="#666"
                      ></path>
                    </svg>
                  </span>{" "}
                  Relationships..
                </button>
                <button
                  type="button"
                  className="border-[1px] border-[#e4e8eb] rounded-md px-1 py-1 shadow hover:shadow-md text-xs flex gap-2"
                >
                  <span className="text-[#13ae47] font-bold">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      height={15}
                      width={15}
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.058 4.942a3.066 3.066 0 0 0-4.335 0L9.277 6.387a1.022 1.022 0 0 1-1.445-1.445l1.445-1.445a5.11 5.11 0 0 1 7.226 7.226l-1.445 1.445a1.022 1.022 0 0 1-1.445-1.445l1.445-1.446a3.066 3.066 0 0 0 0-4.335ZM4.942 15.058a3.066 3.066 0 0 0 4.335 0l1.446-1.445a1.022 1.022 0 1 1 1.445 1.445l-1.445 1.445a5.11 5.11 0 0 1-7.226-7.226l1.445-1.445a1.022 1.022 0 1 1 1.445 1.445l-1.445 1.446a3.066 3.066 0 0 0 0 4.335Zm7.226-5.78a1.022 1.022 0 0 0-1.445-1.446l-2.89 2.89a1.022 1.022 0 0 0 1.444 1.446l2.89-2.89Z"
                        fill="#666"
                      ></path>
                    </svg>
                  </span>{" "}
                  Relationships..
                </button>
                <button
                  type="button"
                  className="border-[1px] border-[#e4e8eb] rounded-md px-1 py-1 shadow hover:shadow-md text-xs flex gap-2"
                >
                  <span className="text-[#13ae47] font-bold">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      height={15}
                      width={15}
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 4a3 3 0 0 0-3 3v4a5 5 0 0 0 10 0V7a1 1 0 1 1 2 0v4a7 7 0 1 1-14 0V7a5 5 0 0 1 10 0v4a3 3 0 1 1-6 0V7a1 1 0 0 1 2 0v4a1 1 0 1 0 2 0V7a3 3 0 0 0-3-3Z"
                        fill="#666"
                      ></path>
                    </svg>
                  </span>{" "}
                  Relationships..
                </button>
              </div>
              <h4 className="my-2 font-medium text-[#444]">Attachments</h4>

              <hr className="mb-2" />
              <button
                type="button"
                className="border-[1px] border-[#e4e8eb] rounded-md px-1 py-1 shadow hover:shadow-md text-xs flex gap-2"
              >
                <span className="text-[#13ae47] font-bold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#a09292"
                    height={15}
                    width={15}
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
                        d="M12 9.5V15.5M12 9.5L10 11.5M12 9.5L14 11.5M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>{" "}
                Relationships..
              </button>
            </div>
            <div className="w-[20%] pr-2">
              <div>
                <button className="border-[1px] border-gray-200 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
                  <div className="bg-[#cd65b6] h-7 w-7 rounded-[50%] flex items-center justify-center">
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
                        fill="#fff"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-light relative -left-[37px] text-xs">
                      Team
                    </p>
                    <p className="font-bold text-sm">Backend Team</p>
                  </div>
                </button>
                <button className="border-[1px] border-gray-200 border-t-0 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
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
                      d="M1 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3H6a1 1 0 1 0 0 2h3v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4Zm10 5v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3h2.325a.5.5 0 0 0 .374-.831l-.448-.506a1 1 0 0 1 1.498-1.326l2.656 3a1 1 0 0 1 0 1.326l-2.656 3a1 1 0 1 1-1.498-1.326l.448-.505A.5.5 0 0 0 13.325 9H11Z"
                      fill="#666"
                    ></path>
                  </svg>

                  <div className="flex flex-col">
                    <p className="font-light relative -left-[37px] text-xs">
                      Team
                    </p>
                    <p className="font-bold text-sm">Backend Team</p>
                  </div>
                </button>
                <button className="border-[1px] border-gray-200 border-t-0 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
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
                  <div className="flex flex-col">
                    <p className="font-light relative -left-[50px] text-xs">
                      Team
                    </p>
                    <p className="font-bold text-sm">State Unscheduled</p>
                  </div>
                </button>
                <button className="border-[1px] border-gray-200 border-t-0 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#a09292"
                    height="22"
                    width="22"
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
                        d="M12 9.5V15.5M12 9.5L10 11.5M12 9.5L14 11.5M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <div className="flex flex-col">
                    <p className="font-light relative -left-[37px] text-xs">
                      Team
                    </p>
                    <p className="font-bold text-sm">Backend Team</p>
                  </div>
                </button>
              </div>
              <div className="my-3">
                <button className="border-[1px] border-gray-200 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    width="22"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 6a3 3 0 0 1 3-3h10a1 1 0 0 1 .8 1.6L14.25 8l2.55 3.4A1 1 0 0 1 16 13H6a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0V6Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <div className="flex flex-col">
                    <p className="font-light relative -left-[37px] text-xs italic">
                      Epic
                    </p>
                    <p className="font-bold text-sm">Backend Team</p>
                  </div>
                </button>
                <button className="border-[1px] border-gray-200 border-t-0 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    width="22"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 7H7a3 3 0 1 0 0 6 1 1 0 0 1 0 2A5 5 0 1 1 7 5V3.5a.5.5 0 0 1 .854-.354l3 3A.5.5 0 0 1 10.5 7Zm1.793-1.707A1 1 0 0 1 13 5a5 5 0 1 1 0 10v1.5a.5.5 0 0 1-.854.354l-3-3A.5.5 0 0 1 9.5 13H13a3 3 0 1 0 0-6 1 1 0 0 1-.707-1.707Z"
                      fill="#666"
                    ></path>
                  </svg>

                  <div className="flex flex-col">
                    <p className="font-light relative -left-[37px] text-xs">
                      Team
                    </p>
                    <p className="font-bold text-sm">Backend Team</p>
                  </div>
                </button>
                <button className="border-[1px] border-gray-200 border-t-0 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
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
                  <div className="flex flex-col">
                    <p className="font-light relative -left-[50px] text-xs">
                      Team
                    </p>
                    <p className="font-bold text-sm">State Unscheduled</p>
                  </div>
                </button>
              </div>
              <div className="my-3">
                <button className="border-[1px] border-gray-200 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
                  <button
                    class="py-3 rounded-[50%] px-3 text-center h-8 w-8 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex items-center justify-center"
                    type="button"
                    data-ripple-light="true"
                  >
                    RM
                  </button>
                  <div className="flex flex-col">
                    <p className="font-light relative -left-[37px] text-xs italic">
                      Epic
                    </p>
                    <p className="font-bold text-sm">Backend Team</p>
                  </div>
                </button>
                <button className="border-[1px] border-gray-200 border-t-0 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
                  <div class="bg-[#333333] h-7 w-7 rounded-[50%] flex items-center justify-center">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      width="22"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2.233 15.626C3.591 13.361 6.646 12 9.095 12h2.054c2.449 0 5.26 1.36 6.618 3.626.608 1.015-.046 2.374-1.143 2.374H3.376c-1.097 0-1.751-1.36-1.143-2.374Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </div>

                  <div className="flex flex-col">
                    <p className="font-light relative -left-[37px] text-xs">
                      Team
                    </p>
                    <p className="font-bold text-sm">Backend Team</p>
                  </div>
                </button>
              </div>
              <div className="my-3">
                <button className="border-[1px] border-gray-200 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
                  <div className="flex gap-2 items-center">
                    <p className="font-light relative text-xs italic">Epic</p>
                    <p className="font-bold text-sm">Backend Team</p>
                  </div>
                </button>
                <button className="border-[1px] border-gray-200 border-t-0 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
                  <div className="flex gap-2 items-center">
                    <p className="font-light relative text-xs">Team</p>
                    <p className="font-bold text-sm">Backend Team</p>
                  </div>
                </button>
                <button className="border-[1px] border-gray-200 border-t-0 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500 justify-between">
                  <div className="flex gap-2 items-center">
                    <p className="font-light relative text-xs">Followers</p>
                    <p className="font-bold text-sm italic">Nobody</p>
                  </div>
                  <div className=" border-l-[1px] border-gray-200 px-2 text-[#73e298] font-bold text-md hover:bg-gray-100">
                    +
                  </div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <h4 class="my-2 font-bold text-sm text-[#4e4e4e]">
                  Custom Fields
                </h4>
                <h6 class="my-2 font-bold text-sm text-[#2d78a4]">Edit</h6>
              </div>
              <div className="my-3">
                <button className="border-[1px] border-gray-200 flex items-center gap-4 w-full py-2 px-1 rounded hover:shadow hover:border-gray-500">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 14"
                    fill="currentColor"
                  >
                    <path
                      d="M3.00001 9C3.00001 9.26522 3.10537 9.51957 3.2929 9.70711C3.48044 9.89464 3.73479 10 4.00001 10C4.26523 10 4.51958 9.89464 4.70712 9.70711C4.89465 9.51957 5.00001 9.26522 5.00001 9V3.414L6.29301 4.707C6.48161 4.88916 6.73421 4.98995 6.99641 4.98767C7.25861 4.9854 7.50942 4.88023 7.69483 4.69482C7.88024 4.50941 7.98541 4.2586 7.98768 3.9964C7.98996 3.7342 7.88917 3.4816 7.70701 3.293L4.70701 0.293C4.51948 0.105529 4.26517 0.000213623 4.00001 0.000213623C3.73485 0.000213623 3.48054 0.105529 3.29301 0.293L0.29301 3.293C0.110852 3.4816 0.010058 3.7342 0.0123364 3.9964C0.0146148 4.2586 0.119784 4.50941 0.305192 4.69482C0.4906 4.88023 0.741412 4.9854 1.00361 4.98767C1.26581 4.98995 1.51841 4.88916 1.70701 4.707L3.00001 3.414V9ZM13 5C13 4.73478 12.8947 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V10.586L9.70701 9.293C9.51841 9.11084 9.26581 9.01005 9.00361 9.01233C8.74141 9.0146 8.4906 9.11977 8.30519 9.30518C8.11978 9.49059 8.01462 9.7414 8.01234 10.0036C8.01006 10.2658 8.11085 10.5184 8.29301 10.707L11.293 13.707C11.4805 13.8945 11.7348 13.9998 12 13.9998C12.2652 13.9998 12.5195 13.8945 12.707 13.707L15.707 10.707C15.8892 10.5184 15.99 10.2658 15.9877 10.0036C15.9854 9.7414 15.8802 9.49059 15.6948 9.30518C15.5094 9.11977 15.2586 9.0146 14.9964 9.01233C14.7342 9.01005 14.4816 9.11084 14.293 9.293L13 10.586V5Z"
                      fill="#808080"
                    ></path>
                  </svg>
                  <div className="flex flex-col">
                    <p className="font-light relative -left-[37px] text-xs italic">
                      Epic
                    </p>
                    <p className="font-bold text-sm">Backend Team</p>
                  </div>
                </button>
              </div>
              <h4 class="my-2 font-light text-sm text-[#8a8a8a]">Labels</h4>
              <button
                type="button"
                class="border-[1px] border-[#e4e8eb] rounded-md px-1 py-1 shadow hover:shadow-md text-xs mb-5"
              >
                <span class="text-[#13ae47] font-bold">+</span> Add Labels
              </button>
            </div>
          </div>
          <div className="footer bg-white border-t-[1px] border-[#e4e8eb] py-4 flex justify-between">
            <button
              type="button"
              className="border-[1px] border-[#e4e8eb] rounded-md px-3 py-2 shadow hover:shadow-md"
            >
              Discard Draft
            </button>
            <div className="flex">
              <div class="flex gap-3 items-center px-2 py-1 hover:bg-[#e4e8eb] rounded-md">
                Create Another
                <input type="checkbox" checked="" name="Stories" />
              </div>
              <div class="flex gap-3 items-center px-2 py-1 rounded-md">
                <button
                  type="button"
                  className="border-[1px] border-[#e4e8eb] rounded-md px-3 py-2 shadow hover:shadow-md bg-[#3a95c9] text-gray-100 hover:bg-[#2d78a4]"
                >
                  Create Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default CreateButton;
