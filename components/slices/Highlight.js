import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../Section'

const Highlight = ({ slice }) => {

    const isUrlEmpty = slice.primary.highlightvideourl

    return (
            <div className="bg-black py-12 md:py-36 lg:py-44 h-full">
                <Section>
                <div className="lg:max-w-screen-2xl mx-auto px-6 sm:px-12 lg:py-6 xl:py-0 relative flex flex-col sm:flex-row bg-black">
                    <div className="sm:w-1/2 sm:pt-8 lg:pt-0 pb-8 sm:pb-16 lg:pb-36 relative z-30">
                        <h1 className="uppercase font-black text-white leading-none tracking-wider mb-6 mt-4 text-3xl lg:text-6xl xl:text-8xl">
                            {RichText.asText(slice.primary.highlighttitle)}
                        </h1>
                        <p className="text-white text-lg font-medium sm:w-2/3 lg:w-3/4">
                            {RichText.asText(slice.primary.highlightdescription)}    
                        </p>
                        <div className='pt-10'>
                            <a href={slice.primary.buynow.url} target="_blank" className="border-2 border-white font-normal text-white px-6 py-3 transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6">
                                Buy Now
                            </a>
                        </div>
                    </div>
                    
                    
                    <div className="sm:w-1/2 md:w-2/3 relative md:absolute bottom-0 right-0 bg-gray-300">
                    {RichText.asText(isUrlEmpty) == "" ?
                        <img className="relative left-0 right-0 w-full h-full object-cover z-20" src={slice.primary.highlightimage.url} />
                        : 
                        <video src={RichText.asText(slice.primary.highlightvideourl)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
                        className="relative left-0 right-0 w-full h-full object-cover z-20" 
                    />
                    }
                    </div>
                </div>
                </Section>
            </div>

    )
}

export default Highlight
