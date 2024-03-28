import React from 'react'
import ProjectsCard from './ProjectsCard'

export const ProjectsPage = () => {
  return (
    <div className='' id="projects">
        <div className='text-center text-5xl font-extrabold md:mb-10'>
            <h1>Projects</h1>
        </div>
        <div>
            <ProjectsCard/>
        </div>
    </div>
  )
}
