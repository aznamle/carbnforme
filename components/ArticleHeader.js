import React from 'react'
import { RichText } from 'prismic-reactjs'

const ArticleHeader = ({title, date, image}) => {
    console.log(date)
    return (
        <div className='container mx-auto items-center justify-center max-w-6xl py-12 '>
            <h1 className='text-left text-5xl font-semibold py-6'>
                {RichText.asText(title)}
            </h1>
            <div className=''>
                <img className='object-center object-cover w-full h-full' src={image.url} />
            </div>
            <p className='py-4 text-lg'>{date}</p>
        </div>
    )
}

export default ArticleHeader
