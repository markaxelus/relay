"use client"
import Sidebar from '@/components/Sidebar';
import React, { useEffect } from 'react'
import StoreProvider from './redux';

type Props = {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
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

const DashboardWrapper = ({ children }: Props) => {
  return(
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper