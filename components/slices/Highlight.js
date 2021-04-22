import React from 'react'
import { RichText } from 'prismic-reactjs'

const Highlight = ({ slice }) => {

    const isUrlEmpty = slice.primary.highlightvideourl

    return (
        <div className="bg-black py-12">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:py-6 xl:py-16 relative flex flex-col sm:flex-row bg-black">
                <div className="sm:w-1/2 sm:pt-8 lg:pt-16 pb-8 sm:pb-16 lg:pb-32 relative z-30">
                    <h1 className="uppercase font-black text-white leading-none tracking-wider mb-6 mt-4 text-5xl lg:text-6xl xl:text-8xl">
                        {RichText.asText(slice.primary.highlighttitle)}
                    </h1>
                    <p className="text-white text-lg sm:w-2/3 lg:w-23">
                        {RichText.asText(slice.primary.highlightdescription)}    
                    </p>
                </div>
                <div className="sm:w-1/2 lg:w-2/3 relative sm:absolute bottom-0 right-0 bg-gray-300">
                {RichText.asText(isUrlEmpty) == "" ?
                    <img className="relative left-0 right-0 w-full h-full object-cover z-20" src={slice.primary.highlightimage.url} />
                    : 
                    <video src={RichText.asText(slice.primary.highlightvideourl)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
                    className="relative left-0 right-0 w-full h-full object-cover z-20" 
                />
                }
                </div>
            </div>
        </div>
    )
}

export default Highlight
