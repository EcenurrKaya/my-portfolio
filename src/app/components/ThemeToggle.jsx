"use client"
import React, { useEffect, useState } from 'react'
import {FaMoon} from "react-icons/fa"
import {BsSunFill} from "react-icons/bs"

const ThemeToggle = () => {
    const [darkMode, setDarkMode]=useState(false);
    useEffect(()=>{
        const theme = localStorage.getItem("theme")
        if (theme==="dark") setDarkMode(false)
    },[])

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    },[darkMode])
  return (
    <div className='relative w-12 h-6 flex items-center dark:bg-black bg-[#3cb371] cursor-pointer rounded-full p-1' onClick={()=>setDarkMode(!darkMode)}>
        <FaMoon className='text-white' size={16}/>
        <div className='absolute bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300'
        style={darkMode?{left:"2px"}:{right:"2px"}}></div>
        <BsSunFill className='ml-auto text-yellow-400' size={16}/>
    </div>
  )
}

export default ThemeToggle