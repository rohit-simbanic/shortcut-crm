import React, { useState } from "react";
interface InputValue {
  name: string;
  checked: boolean;
}

const FilterItems = () => {
  const value: InputValue[] = [
    { name: "Stories", checked: true },
    { name: "No Team", checked: false },
  ];
  const valueTwo: InputValue[] = [
    { name: "Stories", checked: false },
    { name: "No Team", checked: true },
  ];
  const [isFilterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [isFilterDropdownOpenTwo, setFilterDropdownOpenTwo] = useState(false);
  const [values, setValues] = useState<InputValue[]>(value);
  const [valuesTwo, setValuesTwo] = useState<InputValue[]>(valueTwo);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setValues((prevValues) => {
      const newValues = [...prevValues];
      const index = newValues.findIndex(
        (inputValue) => inputValue.name === name
      );

      if (index === -1) {
        newValues.push({
          name,
          checked,
        });
      } else {
        newValues[index] = { name, checked };
      }

      return newValues;
    });
  };
  const handleChangeNext = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setValuesTwo((prevValues) => {
      const newValues = [...prevValues];
      const index = newValues.findIndex(
        (inputValue) => inputValue.name === name
      );

      if (index === -1) {
        newValues.push({
          name,
          checked,
        });
      } else {
        newValues[index] = { name, checked };
      }

      return newValues;
    });
  };

  const handleAllExpand = () => {
    setFilterDropdownOpen((prevState) => !prevState);
    setFilterDropdownOpenTwo((prevState) => !prevState);
  };

  const toggleDropdownFilter = () => {
    setFilterDropdownOpen((prevState) => !prevState);
  };
  const toggleDropdownFilterTwo = () => {
    setFilterDropdownOpenTwo((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex justify-between items-center mt-8 mb-3">
        <h2 className="font-bold text-[#1f2532]">Filters</h2>
        <span
          className="text-[#3A95C9] text-xs hover:cursor-pointer"
          onClick={handleAllExpand}
        >
          {!isFilterDropdownOpen ? "expand all" : "collapse all"}
        </span>
      </div>
      <button
        className="flex gap-3 items-center text-[#686c73] font-bold text-[0.87rem] group relative hover:bg-[#e4e8eb] hover:text-[#1f2532] pr-3 py-1 rounded-md w-full dark:text-gray-400"
        onClick={toggleDropdownFilter}
      >
        <div>
          {isFilterDropdownOpen ? (
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
                d="M6.293 7.793a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                fill="#666"
              ></path>
            </svg>
          ) : (
            <svg
              height={22}
              width={22}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.793 13.207a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L7.793 7.207a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z"
                fill="#666"
              ></path>
            </svg>
          )}
        </div>
        Teams
      </button>
      {isFilterDropdownOpen && (
        <div id="dropdown-menu" className="dark:border-slate-50 list-text">
          <div
            className="py-0 p-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
          >
            {values.map((inputValue, i) => (
              <div
                className="flex gap-3 items-center px-2 py-1 hover:bg-[#e4e8eb] rounded-md"
                key={i}
                onChange={handleChange}
              >
                <input
                  checked={inputValue.checked}
                  type="checkbox"
                  name={inputValue.name}
                />
                <a
                  href="#"
                  className="block text-sm text-gray-700 rounded-md dark:bg-[#828fa3]"
                  role="menuitem"
                >
                  {inputValue.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
      <button
        className="flex gap-3 items-center text-[0.87rem] font-bold text-[#686c73] group relative hover:bg-[#e4e8eb] hover:text-[#1f2532] pr-3 py-1 rounded-md w-full dark:text-gray-400"
        onClick={toggleDropdownFilterTwo}
      >
        <div>
          {isFilterDropdownOpenTwo ? (
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
                d="M6.293 7.793a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                fill="#666"
              ></path>
            </svg>
          ) : (
            <svg
              height={22}
              width={22}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.793 13.207a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L7.793 7.207a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z"
                fill="#666"
              ></path>
            </svg>
          )}
        </div>
        Iterations
      </button>
      {isFilterDropdownOpenTwo && (
        <div id="dropdown-menu" className="dark:border-slate-50 list-text">
          <div
            className="py-0 p-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
          >
            {valuesTwo.map((inputValue, i) => (
              <div
                className="flex gap-3 items-center px-2 py-1 hover:bg-[#e4e8eb] rounded-md"
                key={i}
                onChange={handleChangeNext}
              >
                <input
                  checked={inputValue.checked}
                  type="checkbox"
                  name={inputValue.name}
                />
                <a
                  href="#"
                  className="block text-sm text-gray-700 rounded-md dark:bg-[#828fa3]"
                  role="menuitem"
                >
                  {inputValue.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
      <button className="flex gap-3 items-center text-[0.87rem] font-bold text-[#686c73] group relative hover:bg-[#e4e8eb] hover:text-[#1f2532] pr-3 py-1 rounded-md w-full dark:text-gray-400">
        <div>
          <svg
            height={22}
            width={22}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.793 13.207a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L7.793 7.207a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z"
              fill="#666"
            ></path>
          </svg>
        </div>
        Priority
      </button>
      <button className="flex gap-3 items-center text-[0.87rem] font-bold text-[#686c73] group relative hover:bg-[#e4e8eb] hover:text-[#1f2532] pr-3 py-1 rounded-md w-full dark:text-gray-400">
        <div>
          <svg
            height={22}
            width={22}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.793 13.207a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L7.793 7.207a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z"
              fill="#666"
            ></path>
          </svg>
        </div>
        Epics
      </button>
      <button className="flex gap-3 items-center text-[0.87rem] font-bold text-[#686c73] group relative hover:bg-[#e4e8eb] hover:text-[#1f2532] pr-3 py-1 rounded-md w-full dark:text-gray-400">
        <div>
          <svg
            height={22}
            width={22}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.793 13.207a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L7.793 7.207a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z"
              fill="#666"
            ></path>
          </svg>
        </div>
        Severity
      </button>
      <button className="flex gap-3 items-center text-[0.87rem] font-bold text-[#686c73] group relative hover:bg-[#e4e8eb] hover:text-[#1f2532] pr-3 py-1 rounded-md w-full dark:text-gray-400">
        <div>
          <svg
            height={22}
            width={22}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.793 13.207a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L7.793 7.207a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z"
              fill="#666"
            ></path>
          </svg>
        </div>
        Projects
      </button>
      <button className="flex gap-3 items-center text-[0.87rem] font-bold text-[#686c73] group relative hover:bg-[#e4e8eb] hover:text-[#1f2532] pr-3 py-1 rounded-md w-full dark:text-gray-400">
        <div>
          <svg
            height={22}
            width={22}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.793 13.207a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L7.793 7.207a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z"
              fill="#666"
            ></path>
          </svg>
        </div>
        Workflow state
      </button>
    </>
  );
};

export default FilterItems;
