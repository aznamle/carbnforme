import React from 'react'

export default function HeroBanner({ banner }) {
    return (
        <div className="flex w-100 h-screen items-center md:bg-fixed bg-no-repeat bg-auto lg:bg-cover"
            style={{
              backgroundImage: `url(${banner.url})`
            }}>
        </div>
    )
}
