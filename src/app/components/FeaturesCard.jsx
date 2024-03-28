"use client"
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';
import Link from 'next/link';


const TAB_DATA=[
    {
        title:"Features",
        id:"features",
        content:(
            <div>
                <ul className='md:flex border-spacing-4 border-white dark:text-white mr-2'>
                    <li className='flex-1 bg-[#282828] md:px-8 md:py-4 px-4 py-2 rounded-xl mb-5'>
                        <p className='md:text-2xl text-lg font-bold md:mb-5'>Web Developer</p>
                        <p className='md:text-lg text-sm'>I am developing web projects with ReactJS and NextJS.</p>
                    </li>
                    <li className='flex-1 bg-[#282828] md:px-8 md:py-4 px-4 py-2 rounded-xl'>
                        <p className='md:text-2xl text-lg font-bold md:mb-5'>Mobile Developer</p>
                        <p className='md:text-lg text-sm'>I am developing mobile projects with React Native CLI and Expo. I am sharing the information I have gained through medium and I am sharing some of my mobile projects via github (<Link href="https://github.com/EcenurrKaya" className='underline'>You can review Github</Link>)</p>
                    </li>
                </ul>
            </div>
        )
    },
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className='dark:text-black'>
                <li>
                    <div className='skills'>
                        <div className='skill'>
                            <div className='skill-name'>React Native</div>
                            <div className='skill-bar'>
                                <div className='skill-per' per="60%" style={{maxWidth:"60%"}}></div>
                            </div>
                        </div>
                    </div>
                </li>
                <li><div className='skills'>
                        <div className='skill'>
                            <div className='skill-name'>React JS</div>
                            <div className='skill-bar'>
                                <div className='skill-per' per="80%" style={{maxWidth:"80%"}}></div>
                            </div>
                        </div>
                    </div></li>
                <li>
                    <div className='skills'>
                        <div className='skill'>
                            <div className='skill-name'>Next Js</div>
                            <div className='skill-bar'>
                                <div className='skill-per' per="70%" style={{maxWidth:"70%"}}></div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='skills'>
                        <div className='skill'>
                            <div className='skill-name'>HTML/CSS</div>
                            <div className='skill-bar'>
                                <div className='skill-per' per="90%" style={{maxWidth:"90%"}}></div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='skills'>
                        <div className='skill'>
                            <div className='skill-name'>BootStrap/TailwindCSS</div>
                            <div className='skill-bar'>
                                <div className='skill-per' per="90%" style={{maxWidth:"90%"}}></div>
                            </div>
                        </div>
                    </div>
                </li>          
            </ul>
        )
    }
]

const FeaturesCard = () => {
    const [tab, setTab] = useState("features");
    const [isPending, startTransition] = useTransition();
    const handleTabChange=(id)=>{
        startTransition(()=>{
            setTab(id);
        })
    }
  return (
    <div className='md:flex'>
        <div className='w-1/4 flex md:flex-col'>
            <TabButton selectTab={()=>handleTabChange("features")} active={tab === "features"}>{" "}Features{" "}</TabButton>
            <TabButton selectTab={()=>handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
        </div>
        <div className='md:w-3/4'>{TAB_DATA.find((t)=>t.id===tab).content}</div>
    </div>
  )
}

export default FeaturesCard