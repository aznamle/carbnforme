import React from 'react'
import { RichText } from 'prismic-reactjs'


const VideoBanner = ({ slice }) => {
    return (
        <div className="relative flex items-center justify-center w-100">
            <video src={RichText.asText(slice.primary.bannerurl)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
                className=" z-10 block object-cover object-center h-full w-full md:h-auto"
            />
        </div>

        
    )
}

export default VideoBanner
