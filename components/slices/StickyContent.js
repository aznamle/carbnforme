import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../Section'

const StickyContent = ({ slice }) => {
    console.log(slice)
    return (
        <div className='min-h-screen p-5 md:p-10'>
            <div className='max-w-screen mx-auto md:px-10 py-4 md:py-20 gap-y-32'>
                <section className='md:flex gap-x-36 items-start'>
                    <div className='md:w-1/3 md:sticky md:top-44 px-8 py-12 md:py-0'>
                        <p className='space-y-10 text-md font-light'>
                            {RichText.asText(slice.primary.sub_title)}
                        </p>
                        <h1 className='text-3xl font-light tracking-wide'>
                            {RichText.asText(slice.primary.sticky_title)}
                        </h1>
                        <p className='pt-2 text-md font-light leading-relaxed'>
                            {RichText.asText(slice.primary.sticky_description)}
                        </p>
                    </div>
                    <div className='md:w-2/3 space-y-12 md:space-y-24'>
                        {slice.items.map((content, index) => (
                            <div key={index} className=''>
                                <img src={content.content_image.url} className=''/>
                                <p className='text-sm font-light text-gray-500 py-2 w-4/5'>{RichText.asText(content.content_description)}</p>

                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    )
}

export default StickyContent
