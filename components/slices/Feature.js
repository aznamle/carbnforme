import React from 'react'
import { RichText } from 'prismic-reactjs'

const Feature = ({slice}) => {
    return (
        <div className='flex flex-wrap py-12 lg:py-24 md:px-16 lg:px-32 h-full justify-center content-center items-center bg-black'>
            <div className="lg:w-2/6 text-center">
                <h1 className="text-3xl lg:text-5xl font-semibold text-white">
                    {RichText.asText(slice.primary.featuretitle)}
                </h1>
            </div>

            <div className="text-center lg:text-left lg:w-4/6 lg:px-24">
            <p className="mt-4 whitespace-pre-line text-lg md:text-2xl font-semibold lg:text-2xl leading-relaxed text-white">
                {RichText.asText(slice.primary.featuredescription)}
            </p>
            </div>
        </div>
    )
}

export default Feature
