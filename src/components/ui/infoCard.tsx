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
        <div className='h-72 w-64 px-6 flex flex-col justify-center items-center gap-4 bg-brown dark:bg-lightOxford rounded-2xl text-whiteCrest dark:text-oxford'>
          {icon}
          <h1 className='font-daughter text-2xl'>{title}</h1>
          <p className='text-center'>{desc}</p>
        </div> :
        <div className='h-72 w-80 px-6 flex flex-col justify-center items-center gap-4 bg-whiteCrest dark:bg-oxford rounded-2xl text-brown dark:text-lightOxford'>
          <Quote className='text-toffee dark:text-aquamarine' />
          <p className='text-center'>{desc}</p>
          <h1 className='font-daughter text-toffee dark:text-aquamarine text-2xl'>{title}</h1>
        </div>
      }
    </>
    
  )
}

export default InfoCard