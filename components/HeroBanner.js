import React from 'react'

export default function HeroBanner({ banner }) {
    return (
        <div className="flex w-full h-screen items-center lg:h-screen bg-top bg-fixed bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${banner.url})`
            }}>
        </div>
    )
}
