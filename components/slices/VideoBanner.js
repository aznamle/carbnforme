import React from 'react'
import { RichText } from 'prismic-reactjs'


const VideoBanner = ({ slice }) => {
    return (
        <div className="relative flex items-center justify-center h-100">
            <video src={RichText.asText(slice.primary.bannerurl)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
                className=" z-10 object-cover min-w-full min-h-full max-w-none"
                style={{height: "75vh"}}
            />

        </div>

        
    )
}

export default VideoBanner
