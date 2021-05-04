import React from 'react'
import { RichText } from 'prismic-reactjs'


const ArticleContent = ({ slice }) => {
    return (
        <div className=''>
            {slice.items.map((content,i) => (
            <div>
                <img src={content.image.url} />
                <h1 className='text-5xl py-6'>{RichText.asText(content.sub_title)}</h1>
                <p className='text-lg font-light leading-relaxed'>{RichText.asText(content.sub_description)}</p>
            </div>
            ))}
        </div>
    )
}

export default ArticleContent
