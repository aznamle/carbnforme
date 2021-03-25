import React from 'react'
import { RichText } from 'prismic-reactjs'


function TwoBlockImageRight ({ slice }) {

    const isUrlEmpty = slice.primary.url.text === "";

    return (
    <div className="flex flex-wrap">
        <div className="bg-white flex justify-center items-center lg:w-1/2 shadow-lg">
            <div className="p-20 text-left">
                <h3 className="text-5xl lg:text-6xl font-semibold text-black">
                    {slice.primary.blocktitle[0].text}
                </h3>
                {slice.primary.blockdescription.map((text) => (
                    <p className="mt-4 whitespace-pre-line text-lg md:text-base lg:text-xl leading-relaxed text-gray-600">
                        {text.text}
                    </p>
                ))}
            </div>
        </div>
        { isUrlEmpty ? <img src={slice.primary.image.url} alt="background" className="object-cover object-center h-full w-full md:h-auto lg:w-1/2" />
        :
        <video src={slice.primary.url[0].text} type='video/mp4' autoPlay muted loop playsInline alt="video" 
            className="object-cover object-center h-full w-full md:h-auto lg:w-1/2" 
        />
        }
    </div>
    )
}

export default TwoBlockImageRight