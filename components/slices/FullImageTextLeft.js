import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../Section'

const FullImageTextLeft = ({ slice }) => {
    return (
        <div className="flex w-100 bg-center bg-no-repeat bg-cover"
            style={{
            backgroundImage: `url(${slice.primary.fullimage.url})`,
            height: '100vh'
            }}
        >
            <div className=''/>
                <div className='flex max-w-5xl mx-auto items-center justify-center h-full'>
                <div className='text-left w-3/5'>
                <Section>
                    <h1 className='text-3xl md:text-4xl text-white tracking-wider py-2'>{RichText.asText(slice.primary.block_title)}</h1>
                    <p className='text-md lg:text-lg text-white'>{RichText.asText(slice.primary.block_description)}</p>
                    <div className='pt-8'>
                        <a href={slice.primary.button_link.url} target="_blank" className="border-2 border-white rounded-full font-normal text-white px-6 py-3 transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6">
                            {RichText.asText(slice.primary.button_text)}
                        </a>
                    </div>
                </Section>
                </div>
                <div className='w-2/5'>
                </div>
            </div>
        </div>
    )
}

export default FullImageTextLeft
