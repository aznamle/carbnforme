import React from 'react'

const TwoBlockImageRight = ({ slice }) => (
    <div className="flex flex-wrap">
        <div className="bg-white flex justify-center items-center lg:w-1/2 shadow-lg">
            <div className="p-20 text-left">
                <h3 className="text-lg lg:text-3xl font-semibold text-black">
                     {slice.primary.blocktitle[0].text}
                </h3>
                {slice.primary.blockdescription.map((text) => (
                    <p className="mt-4 whitespace-pre-line text-lg md:text-base lg:text-xl leading-relaxed text-gray-600">
                        {text.text}       
                    </p>
                ))}
            </div>
        </div>
        <video src={slice.primary.url[0].text} type='video/mp4' autoPlay muted loop playsInline alt="video" 
        className="object-cover object-center h-full w-full md:h-auto lg:w-1/2" 
        />
    </div>
)

export default TwoBlockImageRight