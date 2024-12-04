'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/container'
import { ThemeToggle } from '@/components/ui/themeToggler'
import Button from '@/components/ui/button'
import Link from 'next/link'
import Menu from '../ui/modal/menu'
import { MenuIcon, X } from 'lucide-react'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <div className='fixed h-20 lg:h-24 w-screen z-30 flex justify-center bg-whiteCrest/50 dark:bg-oxford/50 backdrop-blur-sm drop-shadow-xl'>
        <Container>
          {/* laptop screens */}
          <div className='hidden xl:flex h-full items-center'>
            {/* left */}
            <ul className='flex flex-1 gap-4 2xl:text-lg'>
              <li className='cursor-pointer hover:text-toffee dark:hover:text-aquamarine transition-all duration-100'><Link href='#home'>Home</Link></li>
              <li className='cursor-pointer hover:text-toffee dark:hover:text-aquamarine transition-all duration-100'><Link href='#about'>About</Link></li>
              <li className='cursor-pointer hover:text-toffee dark:hover:text-aquamarine transition-all duration-100'>Services</li>
              <li className='cursor-pointer hover:text-toffee dark:hover:text-aquamarine transition-all duration-100'><Link href='#portfolio'>Portfolio</Link></li>
              <li className='cursor-pointer hover:text-toffee dark:hover:text-aquamarine transition-all duration-100'><Link href='#contact'>Contact</Link></li>
            </ul>
            {/* center */}
            <div className='flex flex-1 justify-center'>
              <Link className='flex flex-col justify-center items-center' href='#home'>
                <h1 className='font-daughter text-toffee dark:text-aquamarine text-4xl leading-none'>Dunnovative Studios</h1>
                <p className='text-xl leading-none'>Where Innovation Gets DUNN</p>
              </Link>
            </div>
            {/* right */}
            <ul className='flex flex-1 justify-end items-center gap-4'>
              <li>
                <Button sm def>Sign In</Button>
              </li>
              <li className='cursor-pointer'><ThemeToggle /></li>
            </ul>
          </div>
          {/* mobile screens */}
          <div className='xl:hidden h-full flex items-center'>
            {/* left */}
            <div className='flex flex-1 justify-start'>
              <Link className='flex flex-col justify-center items-center' href='#home' onClick={() => setOpenMenu(false)}>
                <h1 className='font-daughter text-toffee dark:text-aquamarine text-2xl sm:text-3xl lg:text-4xl leading-none'>Dunnovative Studios</h1>
                <p className='text-[0.8rem] sm:text-base lg:text-xl leading-none'>Where Innovation Gets DUNN</p>
              </Link>
            </div>
            {/* right */}
            <div>
              <div className='flex flex-col gap-2 cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <X size={32} /> : <MenuIcon size={32} />}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {openMenu && <Menu setOpenMenu={setOpenMenu} />}
    </>
  )
}

export default Navbar