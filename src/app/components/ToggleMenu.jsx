"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const ToggleMenu = () => {
    const [isClick, setClick] = useState(false)

    const toggleNav=()=>{
        setClick(!isClick);
    }
  return (
    <div>
         <button className='' onClick={toggleNav}>
                {isClick?(
                    <svg  className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"/>
                </svg>
                ):(
                    <svg  className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
                )}
                </button>

                {isClick && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3'>
                        <ul className=''>
                            <li className='block lihover'>
                                <Link href="#">Home</Link>
                            </li>

                            <li className='block lihover'>
                                <Link href="#qualification">Qualification</Link>
                            </li>

                            <li className='block lihover'>
                                <Link href="#features">Features</Link>
                            </li>
                            <li className='block lihover'>
                                <Link href="#projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
        )}
    </div>
  )
}

export default ToggleMenu