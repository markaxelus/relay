"use client";
import Header from "@/components/Header";
import { Grid3x3, LucideIcon } from "lucide-react";
import React, { useState } from "react";

type Props = {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};

const ProjectHeader = ({ activeTab, setActiveTab }: Props) => {
  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);

  return (
    <div className="px-4 xl:px-6">
      <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <Header name="Placeholder Name" />
      </div>

      {/* Header Buttons */}
      <div className="dark:border-stroke-dark border-y border-gray-200 flex gap-2 pt-2 pb-[8px] md:items-center">
        <div className="flex flex-1 gap-2 md:gap-4 items-center">
          <HeaderButton
            name="Board"
            icon={<Grid3x3 className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <HeaderButton
            name="List"
            icon={<Grid3x3 className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <HeaderButton
            name="Timeline"
            icon={<Grid3x3 className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <HeaderButton
            name="Table"
            icon={<Grid3x3 className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>
      </div>
    </div>
  );
};

type HeaderButtonProps = {
  name: string;
  icon: React.ReactNode;
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};

const HeaderButton = ({
  name,
  icon,
  activeTab,
  setActiveTab,
}: HeaderButtonProps) => {
  const isActive = activeTab === name;

  return (
    <button
      className={`flex relative cursor-pointer items-center sm:px-2 lg:px-4
                  gap-2 px-1 py-2 after:absolute after:-bottom-[9px] after:left-0 after:h-[1px] after:w-full 
                  ${
                    isActive
                      ? "text-blue-600 after:bg-blue-600 dark:text-blue-400"
                      : "text-gray-500 hover:text-blue-600 dark:text-neutral-500 dark:hover:text-white"
                  }`}
      onClick={() => setActiveTab(name)}
    >
      {icon}
      {name}
    </button>
  );
};

export default ProjectHeader;
