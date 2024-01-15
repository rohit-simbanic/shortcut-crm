import Image from "next/image";
import React from "react";
interface newsProps {
  news: boolean;
}
const NewsTab: React.FC<newsProps> = ({ news }) => {
  return (
    <div
      className={`modal bg-white w-[38vw] absolute ${
        news ? "" : "top-12"
      } z-50 rounded-md dark:bg-[#2d3545]`}
    >
      <nav className="flex flex-col sm:flex-row overflow-x-auto scrollbar-input dark:border-b-[#3f4a5f] items-center justify-between"></nav>
      <div className="header border-b-[1px] border-slate-200 flex justify-between px-4"></div>
      <div
        className="modal-content h-[75vh] overflow-y-auto py-3"
        id="searchBarScrollBar"
      >
        <div>
          <p className="text-[12px] text-[#686c73] font-normal p-1 rounded-md bg-[#e6f2fa] dark:bg-[#161515] mb-[13px] w-[118px]">
            December 14, 2023
          </p>
          <h4 className="text-[20px] font-medium text-[#1f2532] dark:text-white">
            Say hello to the new Iteration Burndown Report!
          </h4>
          <p className="text-[#333] text-[14px] mt-3">
            We are in the process of redesigning Iteration reports to better
            convey progress and plan for upcoming work. Our first release is an
            all-new Iteration Burndown Chart!
          </p>
          <Image
            src={"/assets/New_Burndown_Chart.png"}
            height={200}
            width={500}
            alt="logo"
            className="my-3"
          />
          <ul className="text-[#333] dark:text-[#f9f9f9] text-[13px] list-disc pl-5 py-3">
            <li className="mb-2">
              <strong>Track Ideal and Actual Remaining</strong> work on a daily
              basis, as well as stories/points that were Added, Removed or
              Completed each day via the tooltips
            </li>
            <li className="mb-2">
              <strong>Ideal Remaining</strong> forecasts how many stories/points
              should be remaining based on time left in the Iteration
            </li>
            <li className="mb-2">
              <strong>Toggle between Stories and Points</strong> with the chart
              default reflecting workspace setting
            </li>
            <li className="mb-2">
              🔄 <strong>Sync with Latest Data</strong> to make sure your chart
              shows any recent updates to the iteration
            </li>
          </ul>
          <p className="text-[#333] text-[13px] dark:text-[#f9f9f9]">
            <strong>
              Find the new Burndown Chart on Iteration Detail pages.
            </strong>
          </p>
          <p className="text-[#333] text-[13px] my-5 leading-5 dark:text-[#f9f9f9]">
            🌟 With the introduction of a true-to-form Burndown chart, we’ve
            retained the former Burndown and given it a new name to better
            reflect the value it brings — re-introducing:{" "}
            <strong>ARC (Added/Remaining/Completed) Chart.</strong> This chart
            remains on the Epic, Label, and Reports pages.
          </p>
        </div>
        <div className="footer border-t-[1px] border-slate-200 dark:border-[#3f4a5f] flex justify-between py-4 px-4"></div>
        <div>
          <p className="text-[12px] text-[#686c73] font-normal p-1 rounded-md bg-[#e6f2fa] dark:bg-[#161515] mb-[13px] w-[125px]">
            September 19, 2023
          </p>
          <h4 className="text-[20px] font-medium text-[#1f2532] dark:text-white">
            We're making major improvements to Reports!
          </h4>
          <p className="text-[#333] text-[14px] my-3 dark:text-[#f9f9f9]">
            In the coming months, we'll be transforming Reports to better serve
            user needs. Some updates we've made recently:
          </p>

          <ul className="text-[#333] dark:text-[#f9f9f9] text-[13px] list-disc pl-5 py-3">
            <li className="mb-2">
              <strong>"Group by Iteration"</strong> on the Reports page is
              available for Burndown, Cycle Time and Cumulative Flow (in
              addition to the already supported Velocity)
            </li>
            <li className="mb-2">
              <strong>Cumulative Flow Diagram</strong> is a stacked area chart
              for easier visualization of workflow states over time
            </li>
            <li className="mb-2">
              <strong>Cycle Time</strong> supports custom start and end states
              for fine-tuned tracking
            </li>
            <li className="mb-2">
              <strong>Filters</strong> are sticky on the Reports page so you
              always know what's applied
            </li>
            <li>
              <strong>Chart preferences</strong> are saved when you leave and
              return to the page
            </li>
          </ul>
          <p className="text-[#333] text-[13px] leading-6 dark:text-[#f9f9f9]">
            We have a lot more coming – thanks to everyone who participated in
            research to help us learn about your reporting needs!
          </p>
          <Image
            src={"/assets/report-improvements.png"}
            height={200}
            width={570}
            alt="logo"
            className="my-3"
          />
          <div className="footer border-t-[1px] border-slate-200 dark:border-[#3f4a5f] flex justify-between py-4 px-4"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsTab;
