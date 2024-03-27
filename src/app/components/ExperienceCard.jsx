import React from 'react'

const ExperienceCard = ({company, position, date}) => {
  return (
    <div className='my-4 rounded-lg p-4 shadow-md shadow-zinc-800 bg-gradient-to-r from-[#282828] to-[#181818] md:pr-40 dark:text-white'>
        <ul className=''>
            <li className='md:text-2xl'>{company}</li>
            <li className='text-[#a3a2a2] md:text-lg'>{position}</li>
            <li className='text-[#a3a2a2] md:text-lg'>{date}</li>
        </ul>
    </div>
  )
}

export default ExperienceCard