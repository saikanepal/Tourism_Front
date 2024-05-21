import React from "react";

// const OffCanvasMenu = ({ isOpen, closeMenu, children }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white dark:bg-gray-800 transform transition-transform ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       {/* Off-canvas menu content */}
//       <div className="p-4">
//         <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 mb-4">
//           Menu
//         </h5>
//         {/* Add your menu items here */}
//         {children}
//       </div>
//       {/* Close button */}
//       <button
//         type="button"
//         className="absolute top-2.5 end-2.5 w-8 h-8 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg dark:hover:bg-gray-600 dark:hover:text-white"
//         onClick={closeMenu}
//       >
//         <svg
//           className="w-3 h-3"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 14 14"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//           />
//         </svg>
//         <span className="sr-only">Close menu</span>
//       </button>
//     </div>
//   );
// };

// const OffCanvasMenu = ({ isOpen, closeMenu, children }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white dark:bg-gray-800 transform transition-transform ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       <div className="p-4">
//         <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 mb-4">
//           Menu
//         </h5>
//         {children}
//       </div>
//       <button
//         type="button"
//         className="absolute top-2.5 end-2.5 w-8 h-8 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg dark:hover:bg-gray-600 dark:hover:text-white"
//         onClick={closeMenu}
//       >
//         <svg
//           className="w-3 h-3"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 14 14"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//           />
//         </svg>
//         <span className="sr-only">Close menu</span>
//       </button>
//     </div>
//   );
// };

const OffCanvasMenu = ({ handleOptionClick, selectedOption }) => {
  return (
    <div className="p-4">
      <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 mb-4">
        Admin Panel
      </h5>
      <ul className="space-y-2 font-medium">
        <li>
          <button
            type="button"
            onClick={() => handleOptionClick("admin")}
            className={`flex items-center  w-full p-2 text-base transition duration-75 rounded-lg group ${
              selectedOption === "admin"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <span>Admin</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleOptionClick("dashboard")}
            className={`flex items-center w-full p-2 text-base transition duration-75 rounded-lg group ${
              selectedOption === "dashboard"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <span>Dashboard</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleOptionClick("book")}
            className={`flex items-center w-full p-2 text-base transition duration-75 rounded-lg group ${
              selectedOption === "book"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <span>Book</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleOptionClick("image")}
            className={`flex items-center w-full p-2 text-base transition duration-75 rounded-lg group ${
              selectedOption === "image"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <span>Image</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default OffCanvasMenu;
