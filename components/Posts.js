import React from 'react'
import { default as NextLink } from 'next/link'
import { Date } from 'prismic-reactjs'

import { hrefResolver, linkResolver } from '../prismic-configuration'


const Posts = ({ posts }) => {

    const dateFormat = {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }

    // const displayDate = new Intl.DateTimeFormat('en-US', dateFormat).format(Date(posts.data.blog_date))

    return (
        <div className="flex w-full">
        {posts.map((post) => (
            <NextLink
                  as={linkResolver(post)}
                  href={hrefResolver(post)}
                >
                  <a>
            <div className='flex w-full bg-gray-100 relative overflow-hidden' key={post.id}>
                <img src={post.data.header_image.url} alt="background" className="object-cover object-center h-full w-full md:h-screen block transform duration-500 ease-out hover:scale-105" />
                <div className='text-center relative z-10 w-full'>
                    <h2 class="text-xl text-white font-medium title-font mb-2">Shooting Stars</h2>
                </div>
            </div>
            </a>
            </NextLink>
            ))}
        </div>
    )
}

export default Posts
