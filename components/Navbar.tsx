"use client";
import { useState } from "react";
import { navLink } from "@/constants/navLink";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md h-14 flex items-center">
        <div className="text-base font-bold mx-5 max-md:text-sm text-white">
          My portfolio
        </div>
        <div className="flex max-md:hidden">
          {navLink.map((item, index) => (
            <>
              <div
                key={index}
                className="hover:font-bold max-md:text-sm mx-4 text-white"
              >
                <a href={item.id}>{item.sec}</a>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* formobile */}
      <div className="md:hidden w-5/6 bg-green-600 dark:bg-pink-400 rounded-r-lg">
        <button
          className="text-black dark:text-white focus:outline-none "
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 block"
            style={{ position: "fixed", right: 20 }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                // strokeLinecap="round"
                // strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                // strokeLinecap="round"
                // strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="left-0 right-0 rounded-lg flex flex-col items-center shadow-md bg-white fixed md:hidden my-12 mx-5"
        >
          {navLink.map((item, index) => (
            <div className="hover:font-bold py-3">
              <a href={item.id}>
                {item.sec}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Navbar;
