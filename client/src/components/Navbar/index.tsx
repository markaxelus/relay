import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { Menu, Moon, Search, Settings, Sun } from "lucide-react";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className="flex w-full items-center justify-between px-4 py-3 gap-8">
      {/* Hamburger for Sidebar */}
      <div className="flex items-center ">
        {!isSidebarCollapsed ? null : (
          <button
            className="cursor-pointer"
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <Menu className="h-8 w-8 dark:text-white" />
          </button>
        )}
      </div>

      <div className="flex gap-8 ">
        {/* Search Bar */}
        <div className="relative flex h-min md:w-[300px] lg:w-[350px] w-[200px] pr-2">
          <Search className="absolute transform top-1/2 -translate-y-1/2 left-[4px] h-5 w-5 dark:text-white" />
          <input
            className="w-full p-2 pl-8 rounded border-none focus:border-transparent focus:outline-none bg-gray-200 placeholder-gray-500 
            dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search..."
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <button
            className={`cursor-pointer h-min w-min p-2 rounded
                        ${isDarkMode 
                          ? "dark:hover:bg-gray-700"
                          : "hover:bg-gray-100"
                        }`}
            onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 dark:text-white" />
            ) : (
              <Moon className="h-6 w-6 dark:text-white" />
            )}
          </button>
          <Link 
            href="/settings"
            className={`h-min w-min rounded p-2 
                        ${isDarkMode 
                          ? " dark:hover:bg-gray-700"
                          : "hover:bg-gray-100"
                        }`}
          >
            <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
