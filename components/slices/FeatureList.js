import React from 'react'
import { RichText } from 'prismic-reactjs'
import Image from 'next/image'
import Section from '../Section'

const FeatureList = ({ slice }) => {

    return (
        <div className="max-w-screen-2xl px-6 md:px-0 py-12 md:py-32 mx-auto">
            
            <Section>
                <div className="max-w-md lg:max-w-4xl items-center justify-center md:px-12 lg:px-0 py-4 md:pb-12 w-100 leading-none tracking-wider">
                    <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl font-bold">{RichText.asText(slice.primary.featurelisttitle)}</h1>
                </div>
            </Section>

            <Section>
                <div className="lg:flex">
                    <div className="items-center justify-center lg:w-4/6">
                        <img className="object-cover object-center w-full md:h-full" src={slice.primary.featurelistimage.url} alt="image"/>
                    </div>


                    <div className="lg:w-2/4 justify-center items-center">
                        {slice.items.map((content, i) => (
                            <div key={i} className="md:px-12 py-6 md:py-8 text-left">
                                <Section>
                                    <h1 className="uppercase text-3xl lg:text-3xl font-bold">
                                        {RichText.asText(content.featuretitle)}
                                    </h1>
                                    <p className="mt-1 whitespace-pre-line text-lg md:text-base lg:text-xl font-light leading-relaxed text-black">
                                        {RichText.asText(content.featuredescription)}
                                    </p>
                                </Section>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

        </div>
    )
}

export default FeatureList
