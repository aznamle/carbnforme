import React from 'react'
import { RichText } from 'prismic-reactjs'


function TwoBlockImageRight ({ slice }) {

    const isUrlEmpty = slice.primary.url

    return (
    <div className="flex flex-wrap w-100">
        
        {/* Desktop Display */}        
        { RichText.asText(isUrlEmpty) == "" ? <img src={slice.primary.image.url} alt="background" className="hidden md:block object-cover object-center h-full w-full md:h-auto lg:w-1/2" />
        :
        <video src={RichText.asText(slice.primary.url)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
            className="hidden md:block object-cover object-center h-full w-full md:h-auto lg:w-1/2" 
        />
        }
        <div className="bg-white flex justify-center items-center lg:w-1/2 shadow-lg">
            <div className="p-10 md:p-20 text-left">
                <h3 className="text-3xl lg:text-6xl font-semibold text-black">
                    {RichText.asText(slice.primary.blocktitle)}
                </h3>
                {slice.primary.blockdescription.map((text) => (
                    <p className="mt-4 whitespace-pre-line text-lg md:text-base lg:text-xl leading-relaxed text-gray-600">
                        {text.text}
                    </p>
                ))}
            </div>
        </div>

        {/* Mobile Display */}
        { RichText.asText(isUrlEmpty) == "" ? <img src={slice.primary.image.url} alt="background" className="md:hidden object-cover object-center h-full w-full md:h-auto lg:w-1/2" />
        :
        <video src={RichText.asText(slice.primary.url)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
            className="md:hidden object-cover object-center h-full w-full md:h-auto lg:w-1/2" 
        />
        }
    </div>
    )
}

export default TwoBlockImageRight