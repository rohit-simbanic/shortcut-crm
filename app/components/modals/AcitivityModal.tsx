import React, { useEffect, useState } from "react";
interface ActivityModalProps {
  openActivityModal: boolean;
  setOpenActivityModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ActivityModal: React.FC<ActivityModalProps> = ({
  openActivityModal,
  setOpenActivityModal,
}) => {
  const [selectedValue, setSelectedValue] = useState(
    "hs-radio-vertical-group-1"
  );
  const [selectedValue2, setSelectedValue2] = useState(
    "hs-radio-vertical-group-4"
  );
  const [selectedValue3, setSelectedValue3] = useState(
    "hs-radio-vertical-group-7"
  );
  const [selectedValue4, setSelectedValue4] = useState(
    "hs-radio-vertical-group-10"
  );
  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setSelectedValueFunc: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setSelectedValueFunc(event.target.id);
  };
  useEffect(() => {
    const handleProfileModalOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (openActivityModal && !target.closest(".modal")) {
        setOpenActivityModal(false);
      }
    };

    if (openActivityModal) {
      document.addEventListener("click", handleProfileModalOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleProfileModalOutsideClick);
    };
  }, [openActivityModal]);
  return (
    <div className="w-[209px] z-[2147483647] bg-white dark:bg-[#2d3545] flex flex-col justify-between fixed right-2 rounded-md shadow-[rgba(0,0,0,0.35)_0px_5px_15px] min-h-[164px] modal">
      <div className="pb-2 border-b-[1px] border-slate-200">
        <div className="flex justify-between mt-2">
          <p className="text-[13px] text-[#686c73] font-bold px-3">
            Include My Own Changes?
          </p>
        </div>
        <div className="flex flex-col px-2 ">
          <div className="flex hover:bg-[#e4e8eb] hover:cursor-pointer py-2 px-3  rounded-md">
            <input
              type="radio"
              name="hs-radio-vertical-group-1"
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="hs-radio-vertical-group-1"
              checked={selectedValue === "hs-radio-vertical-group-1"}
              onChange={(e) => handleRadioChange(e, setSelectedValue)}
              style={{ width: "18px", height: "18px" }}
            />
            <label
              htmlFor="hs-radio-vertical-group-1"
              className="text-[13px] text-[#1f2532] font-medium ms-2 dark:text-gray-400"
            >
              Yes, include my changes
            </label>
          </div>
          <div className="flex hover:bg-[#e4e8eb] hover:cursor-pointer py-2 px-3  rounded-md">
            <input
              type="radio"
              name="hs-radio-vertical-group-1"
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="hs-radio-vertical-group-2"
              checked={selectedValue2 === "hs-radio-vertical-group-4"}
              onChange={(e) => handleRadioChange(e, setSelectedValue2)}
              style={{ width: "18px", height: "18px" }}
            />
            <label
              htmlFor="hs-radio-vertical-group-2"
              className="text-[13px] text-[#1f2532] font-medium ms-2 dark:text-gray-400"
            >
              No, exclude my changes
            </label>
          </div>
        </div>
      </div>

      {/* Second Set of Radio Buttons */}
      <div className="pt-0 pb-2">
        <div className="flex justify-between mt-2">
          <p className="text-[13px] text-[#686c73] font-bold px-3">
            Another Set of Radio Buttons
          </p>
        </div>
        <div className="flex flex-col px-2 ">
          <div className="flex hover:bg-[#e4e8eb] hover:cursor-pointer py-2 px-3  rounded-md">
            <input
              type="radio"
              name="hs-radio-vertical-group-2"
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="hs-radio-vertical-group-3"
              checked={selectedValue3 === "hs-radio-vertical-group-7"}
              onChange={(e) => handleRadioChange(e, setSelectedValue3)}
              style={{ width: "18px", height: "18px" }}
            />
            <label
              htmlFor="hs-radio-vertical-group-3"
              className="text-[13px] text-[#1f2532] font-medium ms-2 dark:text-gray-400"
            >
              Yes, include my changes
            </label>
          </div>
          <div className="flex hover:bg-[#e4e8eb] hover:cursor-pointer py-2 px-3  rounded-md">
            <input
              type="radio"
              name="hs-radio-vertical-group-2"
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="hs-radio-vertical-group-4"
              checked={selectedValue4 === "hs-radio-vertical-group-10"}
              onChange={(e) => handleRadioChange(e, setSelectedValue4)}
              style={{ width: "18px", height: "18px" }}
            />
            <label
              htmlFor="hs-radio-vertical-group-4"
              className="text-[13px] text-[#1f2532] font-medium ms-2 dark:text-gray-400"
            >
              No, exclude my changes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
