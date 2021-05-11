import React from 'react'
import { RichText } from 'prismic-reactjs'
import Image from 'next/image'

const ArticleContent = ({ slice }) => {
    return (
        <div className='items-center justify-center max-w-5xl mx-auto pb-24'>
            {slice.items.map((content,i) => (
            <div key={i}>
                <img src={content.image.url} />
                <h1 className='text-5xl py-8'>{RichText.asText(content.sub_title)}</h1>
                <p className='text-lg font-light leading-relaxed'>{RichText.asText(content.sub_description)}</p>
            </div>
            ))}
        </div>
    )
}

export default ArticleContent