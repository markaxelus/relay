"use client"
import Sidebar from '@/components/Sidebar';
import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode;
}

const DashboardWrapper = ({ children }: Props) => {
  return (
    <div className='flex h-min-screen w-full'>
      {/* Sidebar */}
      <Sidebar />
      <main className={`dark:bg-dark-bg`}>
        {/* Navbar */}  
        {children}
      </main>

    </div>
  )
}

export default DashboardWrapper