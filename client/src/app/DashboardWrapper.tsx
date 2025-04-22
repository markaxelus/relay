"use client"
import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode;
}

const DashboardWrapper = ({ children }: Props) => {
  return (
    <div className='h-min-screen w-full'>
      {/* Sidebar */}
      
      <main className={``}>
        {/* Navbar */}  
        {children}
      </main>

    </div>
  )
}

export default DashboardWrapper