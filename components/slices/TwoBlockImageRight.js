import React from 'react'
import { RichText } from 'prismic-reactjs'

import Section from '../Section'

function TwoBlockImageRight ({ slice }) {

    const isUrlEmpty = slice.primary.url

    return (
    <div className="flex flex-wrap w-100">
        {/* Desktop Display */}        
        { RichText.asText(isUrlEmpty) == "" ? <img src={slice.primary.image.url} alt="background" className="lg:hidden object-cover object-center h-full w-full md:h-screen lg:w-1/2" />
            :
            <video src={RichText.asText(slice.primary.url)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
                className="lg:hidden object-cover object-center h-full w-full md:h-screen lg:w-1/2" 
            />
        }

        <div className="bg-white flex justify-center items-center lg:w-1/2 shadow-lg">
            <div className="p-10 md:p-36 text-left">
                <Section>
                <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                    {RichText.asText(slice.primary.blocktitle)}
                </h3>
                </Section>
                {slice.primary.blockdescription.map((text) => (
                <Section>
                    <p className="mt-4 whitespace-pre-line text-lg md:text-base font-light lg:text-xl leading-relaxed text-gray-600">
                        {text.text}
                    </p>
                </Section>
                ))}
            </div>
        </div>

        {/* 
            Mobile Display
            Only need one hidden block because of the pattern for ImageLeft slice.
        */}
        { RichText.asText(isUrlEmpty) !== "" ? <video src={RichText.asText(slice.primary.url)} type='video/mp4' autoPlay muted loop playsInline alt="video" 
                className="hidden lg:block object-cover object-center h-full w-full md:h-screen lg:w-1/2" 
            /> 
            :
            <img src={slice.primary.image.url} alt="background" className="hidden lg:block object-cover object-center h-full w-full md:h-screen lg:w-1/2" />
        }
    </div>
    )
}

export default TwoBlockImageRight