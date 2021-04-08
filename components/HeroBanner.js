import React from 'react'

export default function HeroBanner({ banner }) {
    return (
        <div className="flex w-100 h-auto items-center bg-top bg-fixed bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${banner.url})`,
              height: "100vh"
            }}>
        </div>
    )
}
