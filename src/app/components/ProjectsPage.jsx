import React from 'react'
import ProjectsCard from './ProjectsCard'

export const ProjectsPage = () => {
  return (
    <div className='md:h-screen md:mt-0 mt-32' id="projects">
        <div className='text-center md:text-5xl text-3xl font-semibold md:mb-10'>
            <h1>Projects</h1>
        </div>
        <div>
            <ProjectsCard/>
        </div>
    </div>
  )
}
