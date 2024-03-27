import Link from 'next/link'
import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillMail} from "react-icons/ai" 
import ContactForm from './ContactForm'

const Footer = () => {

  return (
    <div className='p-3 bg-[#6969693d] w-full'>
        <div className='md:flex justify-center'>
            <div className='md:w-1/2 flex-col flex justify-center md:px-24'>
                <div className=''>
                    <p className='text-3xl mb-3'>Get in Touch</p>
                    <p className=''>If you have any questions, suggestions, or collaboration offers, please feel free to contact me using the following contact information. I will respond to you as soon as possible.</p>
                </div> 
                <div className='mt-5'>
                    <ul className='flex'>
                        <li className='lihover'>
                            <Link href="https://github.com/EcenurrKaya" target='_blank'><AiFillGithub/></Link>
                        </li>
                        <li className='lihover'>
                            <Link href="https://tr.linkedin.com/in/ecenurr-kaya" target='_blank'><AiFillLinkedin/></Link>
                        </li>
                        <li className='lihover'>
                            <Link href="mailto:kaya.ecenur02@gmail.com"><AiFillMail/></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Footer