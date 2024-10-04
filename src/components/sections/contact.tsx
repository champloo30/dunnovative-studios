'use client'

import React, { useState } from 'react'
import { Container } from '../ui/container'
import Form, { ContactData } from '../ui/form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function submit(formData: ContactData) {
    setIsLoading(true)
    axios.post(`/api/submit`, formData)
    .then(() => {
      toast.success('Your form has been submitted. We will reach out to you as soon as possible!')
      router.refresh()
    })
    .catch(() => {toast.error('Something went wrong')})
    .finally(() => {setIsLoading(false)})
  }

  return (
    <section aria-label='contact' id='contact' className='h-[calc(100vh-96px)] w-screen flex justify-center items-center bg-toffee dark:bg-aquamarine'>
      <Container>
        <Form onSubmit={submit} isLoading={isLoading} />
      </Container>
    </section>
    
  )
}

export default Contact