import React from 'react'
import { RichText } from 'prismic-reactjs'

const ArticleHeader = ({title, date, image}) => {
    console.log(date)
    return (
        <div className=''>
            <h1 className='text-left text-6xl py-2'>
                {RichText.asText(title)}
            </h1>
            <p className='py-8 text-xl font-light text-gray-500'>{date}</p>
        </div>
    )
}

export default ArticleHeader
