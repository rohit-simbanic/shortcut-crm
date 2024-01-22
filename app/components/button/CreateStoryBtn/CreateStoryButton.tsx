import React from "react";
import Popup from "reactjs-popup";
import { useDropdown } from "../../../context/UseDropDown";
import PopupBody from "./PopupBody";

const CreateButton: React.FC = () => {
  const { setIsDropdownOpen } = useDropdown();

  return (
    <Popup
      trigger={
        <div className="relative inline-block text-left">
          <button
            className="inline-flex justify-center border-r-[1px] border-gray-500 w-full px-4 py-2 text-sm font-bold text-white bg-cyanDefault rounded-l-md shadow-sm focus:outline-none hover:bg-cyanDefaultDark"
            onClick={() => setIsDropdownOpen(false)}
          >
            Create Story
          </button>
        </div>
      }
      modal
      nested
    >
      {PopupBody}
    </Popup>
  );
};

export default CreateButton;
