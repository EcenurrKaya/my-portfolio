import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fs from 'fs/promises'


export default async function ProjectsCard () {
    const file = await fs.readFile(process.cwd() + '/projeler.json', 'utf8');
    const data = JSON.parse(file);

  return (
        <div>
            <div className='md:flex'>   
            {
                data.items.map((datas) => {
                    return (
                        <Link href={`${datas.id}`} key={datas.id}>
                            <div className='justify-center items-center text-center md:w-96 m-3'>
                                <div className='flex justify-center h-48'>
                                    <Image src={`${datas.img}`} alt='software' width={290} height={290} className='rounded-lg'/>
                                </div>
                                <h1 className='md:text-xl text-lg font-semibold mb-1 mt-3'>{datas.title}</h1>                                        
                                <p className='line-clamp-2 md:text-base text-sm'>{datas.description}</p>
                            </div>
                        </Link> 
                    )
                })
            }

            </div>
        </div>
  )
}