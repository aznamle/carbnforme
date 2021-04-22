import React from 'react'
import { RichText } from 'prismic-reactjs'

const Content = ({ slice }) => {
    return (
        <div className="max-w-max px-6 py-16 mx-auto">
            <div className="items-center justify-center py-16 w-100">
                <h1 className="text-6xl font-semibold">{RichText.asText(slice.primary.sectiontitle)}</h1>
            </div>

                <div className="">
                    {slice.items.map((content) => (
                    <div className="flex flex-wrap w-100">
                        <>
                            {content.leftalign === false ? 
                                <div className="items-center justify-center md:w-1/2">
                                    <img className="object-cover object-center w-full md:h-auto" src={content.contentimage.url} alt="right aligned"/>
                                </div>
                                : undefined
                            }
                        </>
                        
                        <div className="flex justify-center items-center md:w-1/2">
                            <div className="p-10 md:p-20 text-left">

                                <h1 className="text-3xl lg:text-6xl font-semibold ">
                                    {RichText.asText(content.contenttitle)}
                                </h1>
                                <p className="mt-4 whitespace-pre-line text-lg md:text-base lg:text-xl leading-relaxed text-gray-600">
                                    {RichText.asText(content.contentdescription)}
                                </p>
                            </div>
                        </div>

                        <>
                            {content.leftalign === true ? 
                                <div className="justify-center items-center w-full md:w-1/2">
                                    <img className="object-cover object-center h-full w-full" src={content.contentimage.url} alt="left aligned"/>
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