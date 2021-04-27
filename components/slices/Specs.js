import React from 'react'
import { RichText } from 'prismic-reactjs'


const Specs = ({ slice }) => {
    return (
        <div className="z-30 relative items-center justify-center w-full h-full">


            <div className="flex inset-0 h-100 items-center bg-bottom bg-no-repeat bg-cover"
                style={{
                backgroundImage: `url(${slice.primary.specimage.url})`,
                height: "85vh"
                }}>
            </div>
            <div className='absolute inset-0 z-20 flex flex-col container mx-auto justify-center items-center mt-64 w-full text-white'>
                {slice.items.map((spec,i) => (
                <div className='p-4 w-40'>
                    <h1 className='border-t pt-1 text-xl font-bold border-white'>
                        {RichText.asText(spec.spectitle)}
                    </h1>
                    <p>
                        {RichText.asText(spec.specdescription)}
                    </p>
                </div>
                ))}
            </div>

        </div>
    )
}

export default Specs
