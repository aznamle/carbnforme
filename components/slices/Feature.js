import React from 'react'
import { RichText } from 'prismic-reactjs'

const Feature = ({slice}) => {
    return (
        <div className='flex flex-wrap py-24 px-64 h-full justify-center content-center items-center bg-black'>
            <div className="lg:w-2/6 text-center">
                <h1 className="text-3xl lg:text-6xl font-semibold text-white">
                    {RichText.asText(slice.primary.featuretitle)}
                </h1>
            </div>

            <div className="lg:w-4/6 px-24">
            <p className="mt-4 whitespace-pre-line text-lg md:text-2xl font-semibold lg:text-2xl leading-relaxed text-white">
                {RichText.asText(slice.primary.featuredescription)}
            </p>
            </div>
        </div>
    )
}

export default Feature
