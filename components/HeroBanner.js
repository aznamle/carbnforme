import React from 'react'

export default function HeroBanner({ banner }) {

    const urlEmpty = banner

    return (
        <div>
        { urlEmpty == "" ? <div className="flex w-100 h-screen items-center bg-center md:bg-fixed bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${banner.url})`
                }}>
            </div>
            :
            <div>
                
            </div>
        }
        </div>
    )
}
