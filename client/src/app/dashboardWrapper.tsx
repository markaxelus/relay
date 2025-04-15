import React from 'react'

type Props = {
    children: React.ReactNode;
}

const DashboardWrapper = ({ children } : Props) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900 border-amber-500'>
        {/* Sidebar */}
        Sidebar
        <main className={`flex w-full flex-col bg-gray-50 md:pl-64 dark:bg-dark-bg`}>
            {/* Navbar */}
            navbar
            {children}
        </main>
    </div>
  )
}

export default DashboardWrapper