import React from 'react'
import { RichText } from 'prismic-reactjs'

import Section from '../Section'

const Content = ({ slice }) => {
    return (
        <div className="max-w-screen-2xl px-6 md:px-0 py-16 mx-auto font-montserrat">
            <Section>
            <div className="max-w-md lg:max-w-4xl items-center justify-center md:px-12 py-4 md:py-8 w-100 leading-none tracking-wider">
                <h1 className="uppercase text-3xl md:text-4xl lg:text-6xl font-bold">{RichText.asText(slice.primary.sectiontitle)}</h1>
            </div>
            </Section>

                <div className="">
                    {slice.items.map((content, i) => (
                    <Section key={i}>
                        <div className="flex flex-wrap w-100 py-4 md:py-12">
                            <>
                                {content.leftalign === false ? 
                                    <div className="items-center justify-center md:w-3/5">
                                        <img className="object-cover object-center w-full md:h-full lg:h-100" src={content.contentimage.url} alt="image"/>
                                    </div>
                                    : null
                                }
                            </>
                            
                            <div className="flex justify-center items-center md:w-2/5">
                                <div className="md:px-12 py-6 md:py-16 text-left">
                                    <h1  className="uppercase text-3xl lg:text-3xl font-bold">
                                        {RichText.asText(content.contenttitle)}
                                    </h1>
                                    <p className="mt-4 whitespace-pre-line text-lg md:text-base lg:text-xl font-medium leading-relaxed text-black">
                                        {RichText.asText(content.contentdescription)}
                                    </p>
                                </div>
                            </div>

                            <>
                                {content.leftalign === true ? 
                                    <div className="justify-center items-center md:w-3/5">
                                        <img className="object-cover object-center w-full md:h-full lg:h-100" src={content.contentimage.url} alt="image"/>
                                    </div>
                                    : null
                                }
                            </>

                        </div>
                    </Section>
                    ))}
            </div>
        </div>    )
}

export default Content