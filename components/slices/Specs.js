import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../Section'


const Specs = ({ slice }) => {
    return (
        <Section>
        <div className="z-30 relative items-center justify-center w-full h-full">


            <div className="flex inset-0 h-100 items-center bg-bottom bg-no-repeat bg-cover"
                style={{
                backgroundImage: `url(${slice.primary.specimage.url})`,
                height: "85vh"
                }}>
            </div>
            <div className='absolute inset-0 z-20 flex flex-col justify-center items-center w-full mt-52 text-white'>
                {slice.items.map((spec,i) => (
                <div className='p-4 w-40'>
                    <div className="w-8 border-t"></div>
                    <h1 className='pt-1 text-xl font-bold border-white'>
                        {RichText.asText(spec.spectitle)}
                    </h1>
                    <p>
                        {RichText.asText(spec.specdescription)}
                    </p>
                </div>
                ))}
            </div>

        </div>
        </Section>
    )
}

export default Specs
