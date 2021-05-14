import React from 'react'
import { RichText } from 'prismic-reactjs'

const IframeBlock = ({ slice }) => {

    return (
        <div className='w-100 h-100 items-center justify-center mx-auto max-w-5xl'>
            <iframe className='items-center mx-auto' src={RichText.asText(slice.primary.embed)} />
        </div>
    )
}

export default IframeBlock
