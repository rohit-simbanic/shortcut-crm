import React from "react";
interface PlanModalProps {
  close: () => void;
}

const PlanModal: React.FC<PlanModalProps> = ({ close }) => {
  return (
    <div className="dark:bg-darkBgDefault px-6 py-5">
      <div className="flex justify-between items-start modal-header">
        <h3 className="font-medium text-[1.5rem] text-[#333] dark:text-[#f6f6f6] my-6">
          Update Plan
        </h3>
        <div className="flex items-center mt-4 relative">
          <button className="close" onClick={close}>
            <svg
              fill="#b3b3b3"
              width="29px"
              height="29px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:cursor-pointer hover:text-[#555]"
            >
              <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="h-[50vh] overflow-y-scroll dark:pr-2" id="filterModal">
        <div className="flex gap-2 items-center bg-[#eef7fc] dark:bg-transparent dark:border-[#3a95c9] dark:border-[1px] rounded-md p-4 lg:mb-20">
          <svg
            viewBox="0 0 20 20"
            height={20}
            width={20}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-3a1 1 0 0 0-1-1H9z"
              fill="#3a95c9"
            ></path>
          </svg>
          <p className="text-[17px] text-[#1f2532] dark:text-white">
            Please{" "}
            <strong className="hover:text-[#3a95c9] hover:cursor-pointer">
              contact an owner
            </strong>{" "}
            to upgrade and get access to more features.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-10 max-lg:gap-2 pb-2">
          <div className="border-[1px] border-[#ddd] border-r-[1px] lg:border-r-0 p-4 max-lg:rounded-tr-md max-lg:rounded-br-md rounded-tl-md rounded-bl-md">
            <div className="">
              <div className="flex gap-3 items-center">
                <h4 className="text-[20px] text-[#333333] font-medium mb-3 dark:text-white">
                  Free
                </h4>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-9.293a1 1 0 0 0-1.414-1.414l-2.94 2.94a.5.5 0 0 1-.707 0l-.939-.94a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
                    fill="#13ae47"
                  ></path>
                </svg>
              </div>
              <p className="text-[14px] text-[grey]">
                Plan work, ship quickly. For small teams.
              </p>
              <div className="mt-10">
                <h5 className="text-[27px] text-[#444444] dark:text-white">
                  $0
                </h5>
                <p className="text-[12px] text-[#444444] dark:text-gray-300">
                  per user, per month
                </p>
              </div>
            </div>
            <button className="bg-[#80808014] dark:text-[#f6f6f666] border-[1px] border-[#e4e8eb66] w-full my-3 py-2 rounded-md mt-6 text-[#1f253266]">
              Current Plan
            </button>
            <div className="check-wrapper">
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Manage all ongoing work in Stories
                </p>
              </div>
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Create Docs and connect them to your work
                </p>
              </div>
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Plan multiple sprints using Iterations
                </p>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#ddd] border-r-[1px] lg:border-r-0 p-4 max-lg:rounded-md">
            <div className="">
              <div className="flex gap-3 items-center">
                <h4 className="text-[20px] text-[#333333] font-medium mb-3 dark:text-white">
                  Team
                </h4>
              </div>
              <p className="text-[14px] text-[grey]">
                Organize and build collaboratively.
              </p>
              <div className="mt-10">
                <h5 className="text-[27px] text-[#444444] dark:text-white">
                  $10
                </h5>
                <p className="text-[12px] text-[#444444] dark:text-gray-300">
                  per user, per month
                </p>
              </div>
            </div>
            <button className="bg-[#3a95c980] shadow-[rgba(0,0,0,0.12)_0px_-2px_0px_-1px_inset] border-[1px] border-[#e4e8eb66] w-full text-[#1f253266] my-3 py-2 rounded-md mt-6 text-white">
              Team Plan
            </button>
            <div className="check-wrapper">
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Easily track plans w/ an expanded Roadmap
                </p>
              </div>
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Organize complex projects w/ Milestones
                </p>
              </div>
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Scale your org w/ unlimited everything (well, everything we
                  offer at least)
                </p>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#333] dark:border-[#e4e8eb66] p-4 lg:mt-[-40px] bg-gradient-shimmerge dark:bg-gradient-darkShimmer max-lg:rounded-br-md max-lg:rounded-bl-md rounded-tl-md rounded-tr-md">
            <div className="">
              <button className="bg-[#598fee] px-2 py1 rounded-md mb-4">
                <span className="text-white text-[12px] ">Most Popular</span>
              </button>
              <div className="flex gap-3 items-center">
                <h4 className="text-[20px] text-[#333333] font-medium mb-3 dark:text-white">
                  Business
                </h4>
              </div>
              <p className="text-[14px] text-[grey]">
                Plan, build, and measure at scale.
              </p>
              <div className="mt-10">
                <h5 className="text-[27px] text-[#444444] dark:text-white">
                  $16
                </h5>
                <p className="text-[12px] text-[#444444] dark:text-gray-300">
                  per user, per month
                </p>
              </div>
            </div>
            <button className="bg-[#3a95c980] shadow-[rgba(0,0,0,0.12)_0px_-2px_0px_-1px_inset] border-[1px] border-[#e4e8eb66] w-full text-[#1f253266] my-3 py-2 rounded-md mt-6 text-white">
              Business Plan
            </button>
            <div className="check-wrapper">
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Customize multiple Workflows so each team can work the way
                  they want
                </p>
              </div>
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Organize work by cross-functional teams
                </p>
              </div>
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Leverage advanced integrations to connect Shortcut with other
                  tools
                </p>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#ddd] lg:border-l-0 p-4 rounded-tr-md rounded-br-md max-lg:rounded-tl-md max-lg:rounded-bl-md">
            <div className="">
              <div className="flex gap-3 items-center">
                <h4 className="text-[20px] text-[#333333] font-medium mb-3 dark:text-white">
                  Enterprise
                </h4>
              </div>
              <p className="text-[14px] text-[grey]">
                For mature software organizations.
              </p>
              <div className="mt-10">
                <h5 className="text-[26px] text-[#444444] dark:text-white">
                  Contact Sales
                </h5>
                <p className="text-[12px] text-[#444444] dark:text-gray-300">
                  per user, per month
                </p>
              </div>
            </div>
            <button className="bg-[#3a95c980] shadow-[rgba(0,0,0,0.12)_0px_-2px_0px_-1px_inset] border-[1px] border-[#e4e8eb66] w-full text-[#1f253266] my-3 py-2 rounded-md mt-6 text-white">
              Contact us
            </button>
            <div className="check-wrapper">
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Predictable pricing with volume discounts
                </p>
              </div>
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Get help w/ onboarding and training
                </p>
              </div>
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  Priority support for all questions
                </p>
              </div>
              <div className="flex gap-1 items-center my-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  className=" shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 1 1.414 0Z"
                    fill="#13ae47"
                  ></path>
                </svg>
                <p className="dark:text-[#dddddd] text-[14px]">
                  SSO, SAML, Okta, OneLogin, Azure, and more admin options
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanModal;
