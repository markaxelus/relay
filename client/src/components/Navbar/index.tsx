import React from 'react'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { Menu } from 'lucide-react';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  )
  const isDarkMode = useAppSelector(
    (state) => state.global.isDarkMode,
  )

  return (
    <div className=''>
      {/* Hamburger for Sidebar */}
      <div className="a">
        <Menu className='' />
      </div>
    </div>
  )
}

export default Navbar