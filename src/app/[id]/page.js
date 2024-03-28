import Image from 'next/image';
import React from 'react'
import Projeler from "/projeler.json"

export default async function Projects({params}) {
    const projeDetay = Projeler.items.find((proje)=>proje.id.toString() === params.id);
    if (!projeDetay) {
        return <div>Project not found!</div>;
    }
  return (
        <div className='lg:flex items-center md:p-10'>
            <div className='lg:w-1/3'>
                <Image src={`${projeDetay.img}`} alt='software' width={600} height={600} className='rounded-xl'/>
            </div>
            <div className='md:w-2/3 md:p-20 p-5'>
                <h3 className='md:text-3xl text-xl md:mt-0 mt-3 font-semibold md:mb-5 mb-2'>{projeDetay.title}</h3>
                <p>{projeDetay.description}</p>
            </div>
        </div>
  )
}
