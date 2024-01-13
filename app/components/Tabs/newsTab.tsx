import React from "react";

const NewsTab = () => {
  return (
    <div className="modal bg-white w-[38vw] absolute top-12 z-50 rounded-md dark:bg-[#2d3545]">
      <nav className="flex flex-col sm:flex-row overflow-x-auto scrollbar-input dark:border-b-[#3f4a5f] items-center justify-between"></nav>
      <div className="header border-b-[1px] border-slate-200 flex justify-between px-4"></div>
      <div
        className="modal-content h-[75vh] overflow-y-auto py-3"
        id="searchBarScrollBar"
      ></div>
      <div className="footer border-t-[1px] border-slate-200 dark:border-[#3f4a5f] flex justify-between py-4 px-4"></div>
    </div>
  );
};

export default NewsTab;
