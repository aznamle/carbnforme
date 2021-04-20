import React from 'react'
import { RichText } from 'prismic-reactjs'


const VideoBanner = ({ slice }) => {
    return (
        <div className="relative flex items-center justify-center h-full">
            <video src={RichText.asText(slice.primary.bannerurl)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
                className=" z-10 object-cover h-screen w-full"
                // style={{height: "75vh"}}
            />
        </div>

        
    )
}

export default VideoBanner
