'use client'

import React from 'react'
import { Container } from '../ui/container'
import Button from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import graphArrowLight from '@/assets/graph-arrow-light.svg'
import graphArrowDark from '@/assets/graph-arrow-dark.svg'
import { useTheme } from 'next-themes'


const About = () => {
  const { theme } = useTheme()
  return (
    <section aria-label='about' id='about' className='h-screen w-screen flex justify-center items-center overflow-hidden'>
      <Container>
        <div className='h-full w-full flex justify-between items-center'>
          {/* left */}
          <div className="flex flex-1 flex-col gap-4">
            <h1 className='font-daughter text-5xl text-toffee dark:text-aquamarine'>Our Why</h1>
            <p className='w-[30rem] text-lg'>We have a passion for helping small businesses and churches grow. We want to help your passion innovate and redesign industries one page at a time. Our focus will always be fresh and new to help extend your reach well past expectations.</p>
            <Button lg def>Let&apos;s Chat <ArrowRight className='h-5 w-5' /></Button>
          </div>
          {/* right */}
          <div className='relative h-full w-full flex flex-1 items-center'>
            <div className='absolute h-[calc(100vh-96px)] w-[480px] bottom-0 md:-right-16 bg-toffee dark:bg-aquamarine'></div>
            <div className='absolute flex flex-col justify-center items-center'>
              <div className='h-[440px] w-[660px] z-10 flex justify-center items-center bg-brown dark:bg-lightOxford rounded-t-2xl'>
                <div className='h-[390px] w-[620px] flex justify-center items-center bg-whiteCrest dark:bg-oxford'>
                  <div className='relative h-[300px] w-[460px] px-8 pb-4 right-4 flex items-end border-l-4 border-b-4 border-brown dark:border-lightOxford'>
                    <ul className='flex items-end gap-12'>
                      <li className='h-16 w-4 bg-brown dark:bg-lightOxford'></li>
                      <li className='h-24 w-4 bg-brown dark:bg-lightOxford'></li>
                      <li className='h-32 w-4 bg-brown dark:bg-lightOxford'></li>
                      <li className='h-40 w-4 bg-brown dark:bg-lightOxford'></li>
                      <li className='h-48 w-4 bg-brown dark:bg-lightOxford'></li>
                      <li className='h-56 w-4 bg-brown dark:bg-lightOxford'></li>
                      <li className='h-64 w-4 bg-brown dark:bg-lightOxford'></li>
                    </ul>
                    <Image 
                      src={theme === 'dark' ? graphArrowDark : graphArrowLight}
                      className='absolute h-64 w-64 bottom-24 right-32'
                      alt='Bar Graph Arrow Up'
                    />
                  </div>
                </div>
              </div>
              <div className='h-6 w-[740px] flex justify-center bg-brown dark:bg-lightOxford rounded-b-2xl'>
                <div className='h-2 w-[100px] bg-lightBrown dark:bg-altOxford rounded-b-lg'></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
