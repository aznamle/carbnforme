import React,{ Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../Section'

const FullWidthImage = ({ slice }) => {
  console.log(slice)
  return (
    <div>
      <div className="flex w-100 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${slice.primary.banner.url})`,
            height: '100vh',
          }}>
        <div className='w-1/4'/>
          <div className='flex max-w-3xl mx-auto items-center justify-center h-full w-3/4'>
            <div className='text-left px-4'>
              <h1 className='text-3xl md:text-4xl text-white tracking-wider py-2'>{RichText.asText(slice.primary.bannertitle)}</h1>
              <p className='text-md lg:text-lg text-white'>{RichText.asText(slice.primary.bannerdescription)}</p>
            </div>
          </div>
      </div>
      { RichText.asText(slice.items[0].side_title) !== '' ?
      <div className='items-center justify-center mx-auto max-w-5xl py-12 lg:py-24'>
        {slice.items.map((content, i) => (
        <div key={i} className='lg:flex w-full'>
          <div className='text-center lg:text-left w-full lg:w-1/3 p-6 lg:py-0'>
            <h1 className='text-4xl text-black'>
              {RichText.asText(content.side_title)}
            </h1>
            <div className='pt-6'>
              <a href={content.side_link.url} target="_blank" className="border-2 border-black rounded-full font-normal text-black px-6 py-3 transition duration-300 ease-in-out hover:bg-black hover:text-white mr-6">
                Buy Now
              </a>
            </div>
          </div>
          
          <div className='text-center lg:text-left w-full lg:w-2/3 p-6 lg:py-0'>
            <p className='text-xl font-light'>
              {RichText.asText(content.side_description)}
            </p>
          </div>
        </div>
      ))}
      </div>
      : null
    }
    </div>
  )
}

export default FullWidthImage