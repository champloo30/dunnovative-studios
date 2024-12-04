import { Quote } from 'lucide-react'
import React from 'react'

interface InfoCardProps {
  test?: boolean,
  icon?: React.ReactNode,
  title: string,
  desc: string
}

const InfoCard:React.FC<InfoCardProps> = ({ test, icon, title, desc }) => {
  return (
    <>
      {!test ? 
        <div className='h-44 sm:h-72 w-full sm:w-64 px-4 md:px-6 flex flex-col justify-center items-center gap-2 md:gap-4 bg-brown dark:bg-lightOxford rounded-2xl text-whiteCrest dark:text-oxford'>
          {icon}
          <h1 className='font-daughter text-xl md:text-2xl'>{title}</h1>
          <p className='text-sm md:text-base text-center'>{desc}</p>
        </div> :
        <div className='h-64 md:h-96 lg:h-72 md:w-80 lg:w-[25rem] px-4 md:px-6 flex flex-col justify-center items-center gap-2 md:gap-12 lg:gap-4 bg-whiteCrest dark:bg-oxford rounded-2xl text-brown dark:text-lightOxford'>
          <Quote className='text-toffee dark:text-aquamarine' />
          <p className='h-36 md:h-36 flex items-center text-sm md:text-base text-center'>{desc}</p>
          <h1 className='font-daughter text-toffee dark:text-aquamarine text-xl md:text-2xl'>{title}</h1>
        </div>
      }
    </>
    
  )
}

export default InfoCard