'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import MintButton from '@/components/MintButton'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Header />
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <Image
          className='relative rounded-xl '
          src='/birddogholder.gif'
          alt='Birddog Placeholder Image'
          width={420}
          height={420}
          priority
          unoptimized
        />
        <MintButton />
      </div>
      <Footer />
    </div>
  )
}
