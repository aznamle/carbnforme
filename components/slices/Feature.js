import { RichText } from 'prismic-reactjs'
import React from 'react'

const Feature = ({slice}) => {
    return (
        <div className='flex flex-wrap h-auto justify-center content-center items-center'>
            {/* <h1 className="text-3xl lg:text-6xl font-semibold text-black">
                {RichText.asText(slice.primary.featuretitle)}
            </h1>
            <p className="mt-4 whitespace-pre-line text-lg md:text-base lg:text-xl leading-relaxed text-gray-600">
                {RichText.asText(slice.primary.featuredescription)}
            </p> */}
        </div>
    )
}

export default Feature
