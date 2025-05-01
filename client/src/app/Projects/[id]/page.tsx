"use client"
import React, { useState, use } from 'react'
import ProjectHeader from '@/app/projects/ProjectHeader';
import Board from '@/app/projects/Board';

type Props = {
  params: Promise<{ id: string }>
}

const Project = ({ params }: Props) => {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);


  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  )
}

export default Project;