import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../Section'


const Specs = ({ slice }) => {
    return (
        <div className="bg-black py-12 md:py-36 lg:py-44 h-full">


            <div className="lg:max-w-screen-xl mx-auto px-6 sm:px-12 lg:py-6 xl:py-0 relative flex flex-col sm:flex-row bg-black">


                <div className='lg:w-2/6 px-12 justify-center items-center'>
                    {slice.items.map((spec,i) => (
                        <Section>
                    <div className='px-12 py-4'>
                        <div className="w-8 border-b"></div>
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
                
                <div className="items-center justify-center lg:w-4/6">
                    <Section>
                    <img className="object-cover object-center w-full md:h-100" src={slice.primary.specimage.url} alt="image"/>
                    </Section>
                </div>

            </div>
        </div>
    )
}

export default Specs
