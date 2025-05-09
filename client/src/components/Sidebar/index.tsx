"use client"
import React, { useState } from "react";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clipboard,
  Home,
  Layers3Icon,
  LockIcon,
  LucideIcon,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { useGetProjectsQuery } from "@/state/api";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const Sidebar = () => {
  const [showProjects,setShowProjects] = useState(true);
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  )
  const { data: projects } = useGetProjectsQuery();

  const sidebarClassNames = `fixed flex h-full justify-between shadow-2xl
                            transition-all duration-300 h-full z-40
                            overflow-y-auto bg-white
                            ${isSidebarCollapsed 
                              ? "w-0 hidden"
                              : "w-60"
                            }  `;

  return (
    <div className={`${sidebarClassNames}`}>
      <div className="flex h-[100%] w-full flex-col justify-start dark:bg-black">
        {/* Top Logo Section*/}
        <div className="z-50 flex min-h-[56px] w-60 items-center justify-between  px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold dark:text-white">
            RELAY
          </div>
          {isSidebarCollapsed ? null : (
            <button className="cursor-pointer py-3"
                    onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
              <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}
        </div>

        {/* Team Section */}
        <div className="flex items-center gap-5 px-8 py-4 border-y-[1.5px] border-gray-200 dark:text-white dark:border-gray-700">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <div className="a">
            <h3 className="text-md font-bold tracking-wide">Relay Team</h3>
            <div className="flex gap-1">
              <LockIcon className="mt-[0.1rem] text-gray-500 h-3 w-3" />
              <span className="text-xs text-gray-500">Private</span>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="w-full border-b-1 border-gray-200 dark:border-gray-700">
          <SidebarLink href="/" icon={Home} label="Home" />
          <SidebarLink href="/timeline" icon={Calendar} label="Timeline" />
          <SidebarLink href="/tasks" icon={Clipboard} label="Tasks" />
          <SidebarLink href="/teams" icon={Users} label="Teams" />
        </nav>

        {/* Projects Section*/}
        <button className="w-full cursor-pointer flex items-center justify-between px-8 py-3 font-medium dark:text-white"
                onClick={() => setShowProjects((prev) => (!prev))}
        >
          <span className="">
            Projects
          </span>
          {showProjects ? (
            <ChevronUp className="h-5 w-5"/>
          ) : (
            <ChevronDown className="h-5 w-5"/>
          )}
        </button>
        
        {showProjects && projects?.map((project) => (
          
          <SidebarLink
            key={project.id}
            href={`/projects/${project.id}`}
            icon={Briefcase}
            label={project.name}
          />
        ))}
        
      </div>
    </div>
  );
};

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/");
  
  return (
    <Link href={href} className="w-full ">
      <div
        className={`relative flex items-center gap-3 px-8 py-3 transition-colors hover:bg-gray-100 dark:bg-black
                        ${isActive ? "bg-gray-100 text-white dark:bg-gray-600 " : ""}`}
      >
        {isActive && (
          <div className="absolute bg-orange-300 top-0 left-0 h-full w-[5px]"></div>
        )}
        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        <span className="font-medium text-gray-800 dark:text-gray-100">
          {label}
        </span>
      </div>
    </Link>
  );
};

export default Sidebar;
