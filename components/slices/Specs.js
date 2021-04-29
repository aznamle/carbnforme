import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../Section'


const Specs = ({ slice }) => {
    return (
        <div className="bg-black py-12 md:py-24 lg:py-36 h-full">

            <div className='max-w-md lg:max-w-4xl mx-auto pb-4 lg:pb-16 items-center text-center justify-center'>
            <Section>
                <h1 className='uppercase text-white text-2xl md:text-4xl font-bold'>
                    Cool title here
                </h1>
            </Section>
            </div>


            <div className="lg:max-w-screen-xl mx-auto px-6 sm:px-12 lg:py-6 xl:py-0 relative lg:flex flex-col sm:flex-row bg-black">
                


                <div className='lg:w-1/4 justify-center items-center'>
                    <div className=''>
                        <Section>
                            <h1 className='font-bold text-center lg:text-justify text-3xl text-white'>
                                {RichText.asText(slice.primary.header_spec_title)}
                            </h1>
                        </Section>
                    </div>
                    {slice.items.map((spec,i) => (
                    <Section key={i}>
                        <div className='text-center md:text-justify py-4'>
                            <div className="lg:w-8 border-b"></div>
                            <h1 className='pt-1 text-xl font-bold text-white'>
                                {RichText.asText(spec.spectitle)}
                            </h1>
                            <p className='text-white'>
                                {RichText.asText(spec.specdescription)}
                            </p>
                        </div>
                    </Section>
                    ))}
                </div>
                
                <div className="items-center justify-center lg:w-3/4">
                    <Section>
                        <img className="object-cover object-center w-full md:h-100" src={slice.primary.specimage.url} alt="image"/>
                    </Section>
                </div>

            </div>
        </div>
    )
}

export default Specs
