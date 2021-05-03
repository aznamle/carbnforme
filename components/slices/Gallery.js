import React from 'react'
import Section from '../Section'

const Gallery = ({ slice }) => {
    return (
        <div className="lg:flex flex-wrap w-full justify-center items-center mx-auto py-6 md:px-12 md:py-12">

            {slice.items.map((content, i) => (
                <div className="items-center justify-center mx-auto md:p-4 p-1 lg:w-1/2">
                    <Section>
                        <img src={content.galleryimage.url}  className='w-full object-cover h-full object-center block'/>
                    </Section>
                </div>
            ))}
        </div>
    )
}

export default Gallery
