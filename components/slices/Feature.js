import React from 'react'
import { RichText } from 'prismic-reactjs'

const Feature = ({slice}) => {
    return (
        <div className='content-center items-center bg-black py-12 h-full w-full px-12'>
            <div className="w-full text-center">
                <h1 className="text-3xl lg:text-5xl font-bold text-white">
                    {RichText.asText(slice.primary.featuretitle)}
                </h1>
            </div>

            <div className="text-center justify-items-center border-t m-5 max-w-2xl mx-auto">
            <p className="mt-5 whitespace-pre-line text-lg md:text-2xl font-medium leading-relaxed text-white">
                {RichText.asText(slice.primary.featuredescription)}
            </p>
            </div>
        </div>
    )
}

export default Feature
