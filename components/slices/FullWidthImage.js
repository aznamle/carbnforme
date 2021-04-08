import React from 'react'

const FullWidthImage = ({ slice }) => (
  <div className='flex-wrap content-center justify-center'>
    <div className="flex w-100 h-screen items-center bg-center md:bg-fixed bg-no-repeat lg:bg-cover"
        style={{
          backgroundImage: `url(${slice.primary.banner.url})`
        }}>
    </div>
  </div>
)

export default FullWidthImage