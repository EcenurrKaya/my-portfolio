import Link from 'next/link'
import {AiFillLinkedin, AiFillGithub, AiFillMail} from "react-icons/ai"
import ToggleMenu from './ToggleMenu'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

  return (
    <div className='lg:mx-20 p-8 justify-between flex'>
        <div className='hidden md:block'>
           <ul className='flex'>
            <li className='lihover mr-5'>
                <Link href="/">Home</Link>
            </li>

            <li className='lihover mr-5'>
                <Link href="/#qualification">Qualification</Link>
            </li>

            <li className='lihover mr-5'>
                <Link href="/#features">Features</Link>
            </li>
            <li className='lihover'>
                <Link href="/#projects">Projects</Link>
            </li>
           </ul>
        </div>
        <div className='md:hidden ml-5'>
           <ToggleMenu/>
        </div>
        <div>
            <ul className='flex items-center'>
                <li className='lihover mr-5'>
                    <Link href="https://github.com/EcenurrKaya" target='_blank'><AiFillGithub/></Link>
                </li>
                <li className='lihover mr-5'>
                    <Link href="https://tr.linkedin.com/in/ecenurr-kaya" target='_blank'><AiFillLinkedin/></Link>
                </li>
                <li className='lihover mr-5'>
                    <Link href="mailto:kaya.ecenur02@gmail.com"><AiFillMail/></Link>
                </li>
                <li>
                    <ThemeToggle/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar