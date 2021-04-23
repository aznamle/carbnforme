import React from 'react'
import { RichText } from 'prismic-reactjs'

const Content = ({ slice }) => {
    return (
        <div className="max-w-screen-2xl px-6 py-16 mx-auto">
            
            <div className="max-w-md md:max-w-4xl items-center justify-center py-4 md:py-8 w-100 leading-none tracking-wider border-b border-black">
                <h1 className="uppercase text-3xl md:text-4xl lg:text-6xl font-bold">{RichText.asText(slice.primary.sectiontitle)}</h1>
            </div>

                <div className="">
                    {slice.items.map((content) => (
                    <div className="flex flex-wrap w-100 py-16">
                        <>
                            {content.leftalign === false ? 
                                <div className="items-center justify-center md:w-1/2">
                                    <img className="object-cover object-center w-full md:h-100" src={content.contentimage.url} alt="image"/>
                                </div>
                                : undefined
                            }
                        </>
                        
                        <div className="flex justify-center items-center md:w-1/2">
                            <div className="px-8 md:px-20 py-10 md:py-20 text-left">
                                <h1 className="text-3xl lg:text-5xl font-bold">
                                    {RichText.asText(content.contenttitle)}
                                </h1>
                                <p className="mt-4 whitespace-pre-line text-lg md:text-base lg:text-xl font-normal leading-relaxed text-gray-600">
                                    {RichText.asText(content.contentdescription)}
                                </p>
                            </div>
                        </div>

                        <>
                            {content.leftalign === true ? 
                                <div className="justify-center items-center md:w-1/2">
                                    <img className="object-cover object-center w-full md:h-100" src={content.contentimage.url} alt="image"/>
                                </div>
                                
                                : undefined
                            }
                        </>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default Content