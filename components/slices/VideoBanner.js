import React from 'react'

const VideoBanner = ({ slice }) => {
    return (
        <div className="flex flex-wrap">
            <video src={RichText.asText(slice.primary.videourl)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
                className="object-cover object-center h-full w-full md:h-auto lg:w-1/2" 
            />
        </div>
    )
}

export default VideoBanner
