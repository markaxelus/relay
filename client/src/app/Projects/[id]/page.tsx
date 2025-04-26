"use client"
import React, { useState, use } from 'react'
import ProjectHeader from '@/app/projects/ProjectHeader';

type Props = {
  params: Promise<{ id: string }>
}

const Project = ({ params }: Props) => {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("Board");


  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* {activeTab === "Board" && (
        <Board />
      )} */}
    </div>
  )
}

export default Project;