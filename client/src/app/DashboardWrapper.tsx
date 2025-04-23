"use client"
import Sidebar from '@/components/Sidebar';
import React, { useEffect } from 'react'
import StoreProvider from './redux';
import Navbar from '@/components/Navbar';

type Props = {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
      {/* Sidebar */}
      <Sidebar />
      <main className={`dark:bg-dark-bg w-full flex flex-col`}>
        {/* Navbar */}  
        <Navbar />
        {children}
      </main>

    </div>
  )
}

const DashboardWrapper = ({ children }: Props) => {
  return(
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper