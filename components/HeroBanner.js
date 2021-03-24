import React from 'react'

export default function HeroBanner({ slice }) {
    return (
        <div className="flex content-center justify-center">    
            <div className="w-full h-screen bg-top bg-fixed bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${slice})`
                }}>
            </div>
        </div>
    )
}
