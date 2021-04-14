import React from 'react'
import { RichText } from 'prismic-reactjs'


const VideoBanner = ({ slice }) => {
    return (
        <div className="flex flex-wrap h-1/4">
            <video src={RichText.asText(slice.primary.bannerurl)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
                className="object-cover object-center md:h-auto"
            />
        </div>
    )
}

export default VideoBanner
