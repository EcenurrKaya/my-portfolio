import Image from 'next/image'
import WordAnimation from './WordAnimation'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row'>
        <div className='w-full lg:w-2/3 sm:w-full mt-10 md:h-screen'>
            <h1 className='md:text-5xl text-3xl mb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700'>Hi, I&apos;m Ece</h1>
            <div className='flex mb-3 font-extrabold md:text-5xl text-2xl'>
                <span className='mr-3'>a</span>
                <WordAnimation/>
            </div>
            <p className='lg:mr-20 lg:mt-10 md:text-lg text-base'>Hi, I am a Software Engineering student at Manisa Celal Bayar University. I&apos;m doing my internship at Anibal as a FrontEnd Developer. I am interested in new technologies. I am trying to improve myself with the courses I follow from online course sites and with the software technology books I read. I am trying to develop projects.</p>
            <div className='lg:mt-20'>
                <Link href="mailto:kaya.ecenur02@gmail.com"><button className='p-2 dark:border-black md:mt-0 mt-5'>Contact with me</button></Link>
            </div>
        </div>
        <div className='w-full lg:w-1/3 sm:w-full flex justify-center items-center md:items-stretch'>
            <div className='bg-[#3cb371] rounded-full blur' style={{width:"400px", height: "400px"}}>
            </div>
            <div className='absolute md:top-1/2 top-1/3  transform md:-translate-y-1/2 -translate-y-1/4'>
                <Image src="/img/woman.png" alt='sof/tware' width={450} height={450}/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection