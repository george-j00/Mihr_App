import Image from 'next/image'
import React from 'react'
import CustomButton from '../global/button'
import Pagination from '../global/Pagination'

export default function Purification() {
  return (
    <section className='mx-auto max-w-7xl min-h-screen space-y-10 overflow-y-clip p-4'>
      <div className='flex justify-between items-center w-full'>
        <div>
          <h1 className='text-[#AD8330] text-5xl font-bold'>Our Processes</h1>
        </div>
        <div>
          <Image src={'/two.gif'} alt={'page number'} width={250} height={250} unoptimized />
        </div>
      </div>
      <div className='flex items-start justify-between w-full gap-x-6'>
        <div className=''>
          <Image src={'/purification.svg'} alt='Purification' width={480} height={510} />
        </div>
        <div className='grid justify-between h-full pt-4'>
          <div className='space-y-4'>
            <h1 className='text-[#AD8330] text-4xl font-bold'>Purification</h1>
            <h2 className='text-xl text-[#000] font-bold'>Removing impurities with precision.</h2>
            <p className='font-meta text-base max-w-[500px]'>
            Using advanced refining techniques, we meticulously remove impurities to achieve gold of the highest purity. Our cutting-edge technology ensures every batch is refined with unparalleled accuracy and care.
            </p>
            <div>
              <CustomButton>Explore More</CustomButton>
            </div>
          </div>
          <div className='mt-40'>
            <Pagination page={'02'} />
          </div>
        </div>
      </div>
    </section>
  )
}
