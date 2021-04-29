import React from 'react'

const StickyBanner = ({ slice }) => {
    return (
        <header className="bg-black border-b border-gray-600 text-black h-16 z-30 fixed top-0 inset-x-0 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <p className="ml-3 text-xl">{slice.primary.stickytitle.text}</p>
                </a>
            </div>
        </header>
    )
}

export default StickyBanner
