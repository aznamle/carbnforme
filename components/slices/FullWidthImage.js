import React from 'react'
import { RichText } from 'prismic-reactjs'


const FullWidthImage = ({ slice }) => {
  return (
    <div>
      <div className="flex w-100 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${slice.primary.banner.url})`,
            height: '75vh',
          }}>
        <div className='w-1/4'/>
          <div className='flex max-w-3xl mx-auto items-center justify-center h-full w-3/4'>
            <div className='text-left px-4'>
              <h1 className='text-3xl md:text-4xl text-white tracking-wider py-2'>{RichText.asText(slice.primary.bannertitle)}</h1>
              <p className='text-md lg:text-lg text-white'>{RichText.asText(slice.primary.bannerdescription)}</p>
            </div>
          </div>
      </div>
      <div className='lg:flex h-full max-w-screen-xl mx-auto py-12 lg:py-24'>
        <div className='lg:w-1/3 text-center lg:text-justify p-6 lg:p-0'>
          <h1 className='text-4xl text-black'>
            HELLO TEST
          </h1>
          <div className='pt-6'>
            <a href='' target="_blank" className="border-2 border-black rounded-full font-normal text-black px-6 py-3 transition duration-300 ease-in-out hover:bg-black hover:text-white mr-6">
              Buy Now
            </a>
          </div>
        </div>
        
        <div className='lg:2/3 text-center lg:text-justify p-6 lg:p-0'>
          <p className='text-xl font-light'>{RichText.asText(slice.primary.bannerdescription)}</p>
        </div>
      </div>
    </div>
  )
}

export default FullWidthImage