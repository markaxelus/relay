import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { Menu, Moon, Search, Sun } from "lucide-react";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";

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
            <Menu className="h-8 w-8" />
          </button>
        )}
      </div>

      <div className="flex gap-8">
        {/* Search Bar */}
        <div className="relative flex h-min w-[350px]">
          <Search className="absolute transform top-1/2 -translate-y-1/2 left-[4px] mr-2 h-5 w-5" />
          <input
            className="w-full p-2 pl-8 rounded border-none focus:border-transparent focus:outline-none bg-gray-200 placeholder-gray-500"
            type="search"
            placeholder="Search..."
          />
        </div>

        {/* Icons */}
        <div className="flex items-center ">
          <button
            className={`cursor-pointer `}
            onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 dark:text-white" />
            ) : (
              <Moon className="h-6 w-6 dark:text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
