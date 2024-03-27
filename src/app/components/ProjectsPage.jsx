import Image from 'next/image'
import React from 'react'
import ProjectsCard from './ProjectsCard'

export const ProjectsPage = () => {
  return (
    <div className='h-screen' id="projects">
        <div className='text-center md:text-5xl text-3xl font-semibold md:mb-10'>
            <h1>Projects</h1>
        </div>
        <div>
            <ProjectsCard/>
        </div>
    </div>
  )
}
