import React from 'react'
import { RichText } from 'prismic-reactjs'

const ArticleHeader = ({title, date, image}) => {
    return (
        <div className=''>
        <div className="flex w-100 bg-center bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${image})`,
                height: '50vh',
        }}>
        </div>
        <div className='max-w-5xl mx-auto justify-center items-center pt-12'>
            <h1 className='text-left text-5xl py-2'>
                {RichText.asText(title)}
            </h1>
            <p className='text-left py-8 text-xl font-light text-gray-500'>{date}</p>
        </div>
        </div>
    )
}

export default ArticleHeader
