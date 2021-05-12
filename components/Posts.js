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
        <div className="relative flex">
        {posts.map((post) => (
            <NextLink
                  as={linkResolver(post)}
                  href={hrefResolver(post)}
                >
            <a>
                <div className='inset-0 w-full h-screen'>
                    <img src={post.data.header_image.url} className='object-cover w-full h-full'/>
                </div>
                <div className=''>
                    <div className='w-full inset-0 relative text-center'>
                    <h1 className='text-4xl'>{RichText.asText(post.data.blog_title)}</h1>
                    </div>
                </div>
            </a>
            </NextLink>
            ))}
        </div>
    )
}

export default Posts
