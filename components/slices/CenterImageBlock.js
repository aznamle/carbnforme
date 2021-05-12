import React from 'react'
import { RichText } from 'prismic-reactjs'

const CenterImageBlock = ({ slice }) => {
    return (
        <div className='md:max-w-screen-2xl mx-auto pb-12 lg:pb-0 lg:py-12'>
            <img src={slice.primary.center_image.url} className='' />
            <div className='lg:flex w-full gap-x-24 items-center justify-center py-12 text-center lg:text-left px-12 lg:px-0'>
                <h1 className='text-4xl lg:1/3 py-4'>{RichText.asText(slice.primary.side_title)}</h1>
                <p className='text-lg font-light lg:w-2/3'>{RichText.asText(slice.primary.side_description)}</p>
            </div>
        </div>
    )
}

export default CenterImageBlock