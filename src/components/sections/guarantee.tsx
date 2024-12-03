import React from 'react'
import { Container } from '../ui/container'
import InfoCard from '../ui/infoCard'
import { ConciergeBell, Gauge, Palette, Smartphone } from 'lucide-react'

const Guarantee = () => {
  return (
    <section aria-label='guarantee' id='guarantee' className='md:h-[960px] xl:h-[640px] w-screen flex justify-center items-center'>
      <Container>
        <div className='h-full w-full flex flex-col justify-center items-center gap-16'>
          <h1 className='font-daughter text-5xl text-toffee dark:text-aquamarine'>Our Guarantee</h1>
          <ul className='flex justify-center items-center gap-8 md:flex-wrap'>
            <InfoCard icon={<Smartphone className='h-8 w-8' />} title='Mobile Friendly' desc='All of our websites come with responsiveness in mind, so you can reach anyone with any device.' />
            <InfoCard icon={<Palette className='h-8 w-8' />} title='Custom Designs' desc='Whether it be minimal, modern, or abstract, all graphic and web designs will be tailored just for you.' />
            <InfoCard icon={<Gauge className='h-8 w-8' />} title='Fast & Secure' desc='We set all our websites up to be as  secure as possible and fast loading speeds are a non-negotiable.' />
            <InfoCard icon={<ConciergeBell className='h-8 w-8' />} title='24/7 Access' desc='You will always have access to your website to make any changes you need, and we are always here to help.' />
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Guarantee