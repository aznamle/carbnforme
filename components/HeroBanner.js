import React from 'react'
import { RichText } from 'prismic-reactjs';

export default function HeroBanner({ banner }) {
    const urlEmpty = banner.image.url

    return (
        <div>
        { urlEmpty !== undefined ? <div className="flex w-100 h-screen items-center bg-center bg-no-repeat bg-cover z-20"
                style={{
                  backgroundImage: `url(${banner.image.url})`
                }}>
            </div>
            :
            <video src={RichText.asText(banner.url)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
            className=" z-40 block object-cover object-center h-full w-full md:h-auto"
        />
        }
            <div className="flex absolute inset-0 z-10 items-end justify-center h-screen w-full bg-gray-900 bg-opacity-30 mt-20">
                <div className='text-center text-white pb-36'>
                    <p className='text-xl md:text-2xl'>{RichText.asText(banner.sub_title)}</p>
                    <h1 className='text-3xl md:text-6xl font-light'>{RichText.asText(banner.title)}</h1>
                    <div className='flex items-center justify-center pt-8'>
                    <a href='' target="_blank" className="border border-white font-light md:text-xl text-white px-6 py-3 transition duration-300 ease-in-out hover:bg-white hover:text-black">
                        Learn More
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
