import React from 'react'

const VideoBanner = ({ slice }) => {
    return (
        <div className="flex flex-wrap">
            <video src={RichText.asText(slice.primary.bannerurl)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
                className="object-cover object-center h-3/4 w-full md:h-auto lg:w-1/2" 
            />
        </div>
    )
}

export default VideoBanner
