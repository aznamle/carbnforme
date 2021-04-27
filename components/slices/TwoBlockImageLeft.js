import React from 'react'
import { RichText } from 'prismic-reactjs';

function TwoBlockImageLeft ({ slice }) {
    
    const isUrlEmpty = slice.primary.videourl
    
    return (
    <div className="flex flex-wrap w-100">
        {/* Desktop Display*/}
        { RichText.asText(isUrlEmpty) == "" ? <img src={slice.primary.image.url} alt="background" className="block object-cover object-center h-full w-full md:h-auto lg:w-1/2" />
            :
            <video src={RichText.asText(slice.primary.videourl)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
                className="block object-cover object-center h-full w-full md:h-auto lg:w-1/2" 
            />
        }

        <div className="bg-black flex flex-col justify-center items-center lg:w-1/2 shadow-lg">
            <div className="p-10 md:p-20 text-left">
                <h3 className="text-3xl lg:text-6xl font-semibold text-white">
                    {RichText.asText(slice.primary.blocktitle)}
                </h3>
                {slice.primary.blockdescription.map((text, i) => (
                    <p key={i} className="mt-4 whitespace-pre-line text-lg md:text-base lg:text-xl leading-relaxed text-white">
                        {text.text}       
                    </p>
                ))}

            </div>
        </div>
    </div>
    )
}

export default TwoBlockImageLeft