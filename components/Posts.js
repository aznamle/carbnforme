import React from 'react'
import { default as NextLink } from 'next/link'
import { Date } from 'prismic-reactjs'
import { RichText } from 'prismic-reactjs'

import { hrefResolver, linkResolver } from '../prismic-configuration'


const Posts = ({ posts }) => {

    const dateFormat = {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }

    // const displayDate = new Intl.DateTimeFormat('en-US', dateFormat).format(Date(posts.data.blog_date))
    return (
        <div className='lg:flex'>
        {posts.map((post, index) => (
             <NextLink
             key={index}
             as={linkResolver(post)}
             href={hrefResolver(post)}
           >      
        <div className='lg:w-1/3 overflow-hidden'>
            <div className="lg:flex w-100 bg-center bg-no-repeat bg-cover  block transform duration-500 ease-in-out hover:scale-105"
            style={{
            backgroundImage: `url(${post.data.header_image.url})`,
            height: '75vh'
            }}
            >
                <div className='flex lg:max-w-3xl items-end p-16 justify-start h-full'>
                    <div className='text-left'>
                            <h1 className='text-2xl font-light text-white tracking-wider py-2'>{RichText.asText(post.data.blog_title)}</h1>
                    </div>
                </div>
            </div>
        </div>
        </NextLink>
            ))}
        </div>
    )
}

export default Posts
