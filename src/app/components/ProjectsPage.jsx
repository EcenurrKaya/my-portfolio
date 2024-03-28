import React from 'react'
import ProjectsCard from './ProjectsCard'

export const ProjectsPage = () => {
  return (
    <div className='' id="projects">
        <div className='text-center md:text-5xl text-4xl font-semibold md:mb-10'>
            <h1>Projects</h1>
        </div>
        <div>
            <ProjectsCard/>
        </div>
    </div>
  )
}
