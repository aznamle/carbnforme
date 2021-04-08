import React from 'react'

const FullWidthImage = ({ slice }) => (
  <div className='flex-wrap content-center justify-center'>
    <div className="flex w-100 h-screen items-center md:bg-fixed bg-no-repeat bg-auto lg:bg-cover"
        style={{
          backgroundImage: `url(${slice.primary.banner.url})`
        }}>
    </div>
  </div>
)

export default FullWidthImage