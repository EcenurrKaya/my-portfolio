"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const WordAnimation = () => {
  return (
    <div>
        <TypeAnimation
             sequence={[
                'FrontEnd Developer',
                1000,
                'Mobile Developer',
                1000,
                'Software Engineer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block'}}
              repeat={Infinity}
            />
    </div>
  )
}

export default WordAnimation