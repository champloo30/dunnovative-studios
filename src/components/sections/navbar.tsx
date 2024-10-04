'use client'

import React from 'react'
import { Container } from '@/components/ui/container'
import { ThemeToggle } from '@/components/ui/themeToggler'
import Button from '@/components/ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed h-24 w-screen z-20 flex justify-center bg-whiteCrest/50 dark:bg-oxford/50 backdrop-blur-sm drop-shadow-xl'>
      <Container>
        <div className='h-full flex items-center'>
          <ul className='flex flex-1 gap-4 2xl:text-lg'>
            <li className='cursor-pointer hover:text-toffee dark:hover:text-aquamarine transition-all duration-100'><Link href='#home'>Home</Link></li>
            <li className='cursor-pointer hover:text-toffee dark:hover:text-aquamarine transition-all duration-100'><Link href='#about'>About</Link></li>
            <li className='cursor-pointer hover:text-toffee dark:hover:text-aquamarine transition-all duration-100'>Services</li>
            <li className='cursor-pointer hover:text-toffee dark:hover:text-aquamarine transition-all duration-100'><Link href='#portfolio'>Portfolio</Link></li>
            <li className='cursor-pointer hover:text-toffee dark:hover:text-aquamarine transition-all duration-100'><Link href='#contact'>Contact</Link></li>
          </ul>
          <div className='flex flex-1 justify-center'>
            <Link className='flex flex-col justify-center items-center' href='/'>
              <h1 className='font-daughter text-toffee dark:text-aquamarine text-4xl leading-none'>Dunnovative Studios</h1>
              <p className='text-xl leading-none'>Where Innovation Gets DUNN</p>
            </Link>
          </div>
          <ul className='flex flex-1 justify-end items-center gap-4'>
            <li>
              <Button sm def>Sign In</Button>
            </li>
            <li className='cursor-pointer'><ThemeToggle /></li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Navbar