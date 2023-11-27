import React from "react";

interface PermalinkModalProps {
  togglePermalink: () => void;
}

const PermalinkModal: React.FC<PermalinkModalProps> = ({ togglePermalink }) => {
  return (
    <div className="h-[89px] flex flex-col gap-0 w-[300px] absolute top-6 -left-[249px] bg-white z-50 rounded-lg shadow-lg p-3 modal dark:bg-[#2d3545]">
      <div className="flex justify-between items-center">
        <p className="font-light py-2 px-2 text-[13px] rounded-md text-[#686c73]">
          Share a link to this dialog
        </p>

        <svg
          fill="#b3b3b3"
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer hover:text-[#555]"
          onClick={togglePermalink}
        >
          <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
        </svg>
      </div>

      <hr className="mb-2 dark:border-[#3f4a5f]" />

      <div className="flex justify-between items-center">
        <input
          id="foo"
          value="https://github.com/zenorocha/clipboard.js.git"
          className="border-[1px] border-gray w-full text-[12px]"
        />

        <button className="btn flex items-center" data-clipboard-target="#foo">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#f2f2f2"
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
                d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M12 11H9M15 15H9"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PermalinkModal;
