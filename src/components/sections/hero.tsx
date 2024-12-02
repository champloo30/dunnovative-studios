'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Container } from '../ui/container'

const Hero = () => {
  const { theme } = useTheme()
  return (
    <section aria-label='Home' id='home' className='h-screen w-full pt-20 flex justify-center items-center overflow-hidden'>
      <Container>
        <div className='h-full w-full flex justify-center items-center'>
          <div className='relative h-[480px] w-[960px]'>
            <h2 className={`absolute md:top-36 lg:top-20 xl:top-32 md:left-12 lg:left-16 xl:left-5 font-bold md:text-5xl lg:text-7xl xl:text-[5rem] ${theme === 'dark' ? 'text-gradient-dark' : 'text-gradient-light'} enter-left`}>Welcome</h2>
            <span className='absolute md:bottom-[15.5rem] lg:bottom-[17rem] xl:bottom-40 md:left-[12.5rem] lg:left-72 xl:left-52 font-bold md:text-3xl lg:text-[2.5rem] xl:text-[4rem] text-lightBrown dark:text-altOxford -rotate-90 enter-bottom'>to</span>
            <div className='absolute md:bottom-[13.75rem] lg:bottom-[15rem] xl:bottom-32 md:right-16 lg:right-12 xl:right-5 flex flex-col justify-center items-center fade-in'>
              <h1 className='font-daughter md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4.5rem] text-toffee dark:text-aquamarine leading-none'>Dunnovative Studios</h1>
              <p className='md:text-[1.5rem] lg:text-[1.9rem] xl:text-[2.5rem] leading-none'>Where Innovation Gets DUNN</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
