import React, { Dispatch, SetStateAction } from 'react'
import { ThemeToggle } from '@/components/ui/themeToggler'
import Button from '@/components/ui/button'
import Link from 'next/link'

interface MenuProps {
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

const Menu:React.FC<MenuProps> = ({ setOpenMenu }) => {
  return (
    <div className='fixed xl:hidden h-[calc(100vh-80px)] lg:h-[calc(100vh-96px)] w-screen z-20 top-20 lg:top-24 flex'>
      <div className='h-full w-1/3 bg-whiteCrest/80 dark:bg-oxford/80' onClick={() => setOpenMenu(false)}></div>
      <div className='h-full w-2/3 flex justify-center items-center bg-whiteCrest dark:bg-oxford border-l-4 border-toffee dark:border-aquamarine'>
        <ul className='flex flex-col gap-16'>
          <li className='md:text-2xl lg:text-3xl' onClick={() => setOpenMenu(false)}><Link href='#home'>Home</Link></li>
          <li className='md:text-2xl lg:text-3xl' onClick={() => setOpenMenu(false)}><Link href='#about'>About</Link></li>
          <li className='md:text-2xl lg:text-3xl' onClick={() => setOpenMenu(false)}>Services</li>
          <li className='md:text-2xl lg:text-3xl' onClick={() => setOpenMenu(false)}><Link href='#portfolio'>Portfolio</Link></li>
          <li className='md:text-2xl lg:text-3xl' onClick={() => setOpenMenu(false)}><Link href='#contact'>Contact</Link></li>
          <li>
            <Button sm def>Sign In</Button>
          </li>
          <li className='cursor-pointer' onClick={() => setOpenMenu(false)}><ThemeToggle /></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu