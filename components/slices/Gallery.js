import React from 'react'
import Section from '../Section'

import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const Gallery = ({ slice }) => {

    const options = {
        buttons: {
            backgroundColor: 'rgba(30,30,36,0.1)',
            showCloseButton: false,
            showAutoplayButton: false,
            showCloseButton: true,
            showDownloadButton: false,
            showFullscreenButton: false,
            showNextButton: true,
            showPrevButton: true,
            showThumbnailsButton: false,
        }
    }

    return (
        <SimpleReactLightbox>
            <SRLWrapper options={options}>
                <div className="lg:flex flex-wrap justify-center items-center mx-auto py-2 ">

                    {slice.items.map((content, i) => (

                        <div key={i} className="overflow-hidden p-1 lg:w-1/2">
                            <Section>
                                <img src={content.galleryimage.url}  className='w-full object-cover h-full object-center block transform duration-500 ease-in-out hover:scale-105'/>
                            </Section>
                        </div>
                    ))}
                </div>
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}

export default Gallery
