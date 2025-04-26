import React, { useState } from 'react'

type Props = {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

const ProjectHeader = ({ activeTab, setActiveTab }: Props) => {
  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);

  return (
    <div className='px-4 xl:px-6'>
      <div className="a">
        
      </div>
    </div>
  )
}

export default ProjectHeader