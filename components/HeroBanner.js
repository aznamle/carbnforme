import React from 'react'
import { RichText } from 'prismic-reactjs';

export default function HeroBanner({ banner }) {

    const urlEmpty = banner.url

    return (
        <div>
        { urlEmpty !== undefined ? <div className="flex w-100 h-screen items-center bg-center bg-no-repeat bg-cover z-40"
                style={{
                  backgroundImage: `url(${banner.url})`
                }}>
            </div>
            :
            <video src={RichText.asText(banner.url)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
            className=" z-40 block object-cover object-center h-full w-full md:h-auto"
        />
        }
            <div class="absolute inset-0 z-20 flex items-end justify-center h-screen mt-20 w-full bg-gray-900 bg-opacity-30">
                <div className='text-center text-white pb-44'>
                    <p className='text-2xl'>Welcome</p>
                    <h1 className='text-7xl font-normal'>CARBNFORME is inspired by carbnforme</h1>
                    <div className='flex items-center justify-center pt-8'>
                    <a href='' target="_blank" className="border border-white font-light text-xl text-white px-6 py-3 transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6">
                        Design and Craft
                    </a>
                    <a href='' target="_blank" className="border border-white font-light text-xl text-white px-6 py-3 transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6">
                        Learn More
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
