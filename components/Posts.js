import React from 'react'
import { Date } from 'prismic-reactjs'

const Posts = ({ posts }) => {

    const dateFormat = {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }

    // const displayDate = new Intl.DateTimeFormat('en-US', dateFormat).format(Date(posts.data.blog_date))

    return (
        <div className="flex overflow-hidden w-full">
        {posts.map((post) => (
            <div className='' key={post.id}>
                <div className="w-100 h-screen mx-auto items-center bg-center bg-no-repeat bg-cover block transform duration-500 ease-in-out hover:scale-105"
                style={{
                  backgroundImage: `url(${post.data.header_image.url})`
                }}>
                    <div className="flex absolute inset-0 z-10 items-end justify-center h-screen w-full bg-black bg-opacity-20 mt-20">
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Posts
