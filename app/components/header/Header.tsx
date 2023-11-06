"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ProfiileModal from "../modals/ProfileModal";

const Header = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  return (
    <div className="bg-[#151e2d] py-3">
      <div className="mx-auto flex justify-center sm:justify-between flex-wrap sm:flex-1 py-2 sm:p-0 items-center px-2">
        <div className="flex gap-2">
          <Image
            src={"/header/shortcut-logo-mark-6086c44b85.svg"}
            height={40}
            width={40}
            alt="logo"
          />

          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 transition-transform transform scale-100 focus:scale-110 cursor-pointer">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm.12 6.3c-.251-.628-1.044-.83-1.644-.52a6.5 6.5 0 1 1 2.805-2.805c-.31.601-.11 1.394.518 1.645l1.444.577a1.958 1.958 0 1 1-2.546 2.546l-.577-1.444Z"
                  fill="#666"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              className="w-56 py-2 px-3 bg-[#b8b8bd] bg-opacity-5 pl-14 rounded-full focus:w-56 sm:focus:w-96 focus:outline-none caret-white text-white transition-all  duration-300 ease-in-out"
              placeholder="Type / to search..."
            />
          </div>
          <button
            className="hidden lg:flex select-none items-center gap-3 rounded-lg border border-solid border-1 border-slate-50/10  py-3 px-3 text-center align-middle font-sans text-xs font-bold text-gray-500  transition-all hover:bg-slate-50/10 hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Ctrl + K
          </button>
        </div>
        <div className="flex gap-2 relative py-3 sm:py-0">
          <button
            className="middle none center hidden lg:flex items-center justify-center rounded-lg p-2 font-sans text-xs font-bold transition-all hover:bg-slate-50/10  active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-dark="true"
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
            >
              <path
                d="M.5 9.408a4.347 4.347 0 0 1 1.238-3.04 4.188 4.188 0 0 1 2.984-1.262H8.24c.046 0 4.608-.061 8.948-3.77a1.384 1.384 0 0 1 1.5-.202c.243.115.448.299.592.529.144.23.22.497.221.77v13.95a1.44 1.44 0 0 1-.218.77c-.144.23-.35.414-.594.528a1.384 1.384 0 0 1-1.5-.201c-3.332-2.847-6.794-3.545-8.244-3.716v3.146c0 .236-.056.468-.166.676a1.42 1.42 0 0 1-.46.517l-.967.656a1.391 1.391 0 0 1-1.836-.244 1.443 1.443 0 0 1-.31-.601L4.163 13.67a4.205 4.205 0 0 1-2.616-1.431A4.354 4.354 0 0 1 .5 9.408zm6.07 8.158.967-.656v-3.201H5.623l.947 3.857zm-1.848-5.29h2.815V6.54H4.722c-.746 0-1.462.302-1.99.84a2.895 2.895 0 0 0-.825 2.028c0 .76.297 1.49.825 2.027a2.79 2.79 0 0 0 1.99.84z"
                fill="#666"
              ></path>
            </svg>
          </button>
          <button
            className="hidden lg:flex select-none items-center gap-3 rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold text-gray-500  transition-all hover:bg-slate-50/10 hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
            >
              <path
                d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm1.5-4.6c-.5.3-.5.4-.5.6a1 1 0 1 1-2 0c0-1.3.8-1.9 1.4-2.3.5-.3.6-.4.6-.7 0-.6-.4-1-1-1-.4 0-.7.2-.9.5l-.01.017a.986.986 0 1 1-1.723-.958L7.4 6.5C7.9 5.6 8.9 5 10 5c1.7 0 3 1.3 3 3 0 1.4-.9 2-1.5 2.4Z"
                fill="#666"
              ></path>
            </svg>
            Help
          </button>
          <button
            className="hidden lg:flex select-none items-center gap-3 rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold text-gray-500  transition-all hover:bg-slate-50/10 hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            <svg
              viewBox="0 0 20 20"
              width={20}
              height={20}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.779 7.89c.16.58-.31 1.11-.913 1.11h-2.835c-.347 0-.67.178-.854.47l-1.438 2.283-2.307-6.104a1.01 1.01 0 0 0-1.798-.179L5.41 9H3.134c-.602 0-1.072-.53-.913-1.11C3.155 4.494 6.284 2 10 2s6.845 2.495 7.779 5.89Zm0 4.22c.16-.58-.31-1.11-.913-1.11H14.59l-2.224 3.53a1.01 1.01 0 0 1-1.798-.179L8.261 8.247 6.823 10.53a1.01 1.01 0 0 1-.854.47H3.134c-.602 0-1.072.53-.913 1.11C3.155 15.506 6.284 18 10 18s6.846-2.495 7.779-5.89Z"
                fill="#666"
              ></path>
            </svg>
            Activity
          </button>
          <button
            className="hidden lg:flex select-none items-center gap-3 rounded-lg border border-solid border-1 border-gray-400  py-3 px-3 text-center align-middle font-sans text-xs font-bold text-gray-500  transition-all hover:bg-slate-50/10 hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            <svg
              viewBox="0 0 20 20"
              width={20}
              height={20}
              fill="yellow"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.722 3.778h-1.778v-.89c0-.488-.4-.888-.888-.888H6.944c-.488 0-.888.4-.888.889v.889H4.278c-.978 0-1.778.8-1.778 1.778v.888c0 2.267 1.707 4.116 3.902 4.392.56 1.333 1.545 2.37 2.994 2.664L9.5 16H7c-.489 0-.944.622-.944 1.111s.4.889.888.889h7.112c.488 0 .888-.4.888-.889S14.49 16 14 16h-2v-2.5c1.449-.293 2.038-1.331 2.598-2.664C16.793 10.56 18.5 8.71 18.5 6.444v-.888c0-.978-.8-1.778-1.778-1.778zM4.5 6.444v-.888h1.556L6 8.5c-1.031-.373-1.5-.9-1.5-2.056zm12 0c0 1.156-.469 1.683-1.5 2.056l-.056-2.944H16.5v.888z"
                fill="#ccba45"
              ></path>
            </svg>
            Setup Guide
          </button>
          <button
            className="flex select-none items-center gap-3 rounded-lg  py-3 px-4 text-center align-middle font-sans bg-slate-50/10 text-xs font-bold text-gray-50  transition-all hover:bg-slate-50/10 hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Upgrade
          </button>
          <div>
            <button
              className="py-3 rounded-[50%] px-3 text-center h-12 w-12 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
            >
              RM
            </button>
            {isProfileModalOpen && <ProfiileModal />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
