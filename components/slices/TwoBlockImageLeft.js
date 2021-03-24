import React from 'react'

const TwoBlockImageLeft = ({ slice }) => (
    <div className="flex flex-wrap">
    <img src={slice.primary.image.url} alt="background" className="object-cover object-center h-full w-full md:h-auto lg:w-1/2" />
    <div className="bg-black flex flex-col justify-center items-center lg:w-1/2 shadow-lg">
        <div className="p-20 text-left">
            <h3 className="text-5xl lg:text-6xl font-semibold text-white">
                {slice.primary.blocktitle[0].text}
            </h3>
            {slice.primary.blockdescription.map((text) => (
                <p className="mt-4 whitespace-pre-line text-lg md:text-base lg:text-xl leading-relaxed text-white">
                    {text.text}       
                </p>
            ))}

        </div>
    </div>
</div>
)

export default TwoBlockImageLeft