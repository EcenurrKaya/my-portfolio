import React from 'react'
import ExperienceCard from './ExperienceCard'

export const Qualification = () => {
  return (
    <div className='h-screen' id="qualification">
      <div className='text-center mb-10'>
       <div className='md:text-5xl text-3xl font-extrabold md:mb-3'>Qualification</div>
       <span className='md:text-lg text-sm'>Education & Experience</span>
      </div>
      <div className='md:flex justify-between'>
        <div className='lg:w-1/2 flex justify-center'>
          <div>
          <h3 className='md:text-3xl text-2xl font-semibold mb-5'>Education</h3>
          <ul>
            <li>
             <ExperienceCard company="Software Engineering" position="Manisa Celal Bayar University" date="2020 - 2024"/>
            </li>
          </ul>
          </div>
        </div>

        <div className='lg:w-1/2 flex justify-center'>
          <div>
          <h3 className='md:text-3xl text-2xl font-semibold mb-5'>Experience</h3>
          <ul>
            <li>
              <ExperienceCard company="Anibal Bilişim" position="Intern" date="19/02/2024 - present"/>
              <ExperienceCard company="Protem A.Ş." position="Intern" date="02/02/2023 - 02/09/2023"/>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}
