import React from 'react'
import Button from './button'
import Image, { StaticImageData } from 'next/image'
import { Images } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface SiteCardProps {
  img?: StaticImageData,
  title: string,
  url: string
}

const SiteCard:React.FC<SiteCardProps> = ({ img, title, url }) => {
  const router = useRouter()

  return (
    <div className='h-72 md:w-64 lg:w-56 px-4 py-6 flex flex-col gap-4 bg-toffee dark:bg-aquamarine rounded-xl'>
      <div className='h-28 w-full flex justify-center items-center bg-whiteCrest dark:bg-oxford'>
        {img ? 
          <Image 
            src={img}
            className='h-full w-full'
            alt={title + 'website screenshot'}
            height={100}
            width={100}
          /> :
          <Images className='h-12 w-12 text-toffee' />
        }
      </div>
      <h2 className='font-daughter text-whiteCrest dark:text-oxford text-xl'>{title}</h2>
      <Button xs alt onClick={() => router.push('https://' + url)}>Visit</Button>
    </div>
  )
}

export default SiteCard