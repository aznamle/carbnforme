import React from 'react'

const FullWidthImage = ({ slice }) => (
  <div className='flex-wrap content-center justify-center'>
    <div className="w-full h-auto bg-top bg-fixed bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${slice.primary.banner.url})`,
          height: "100vh"
        }}>
    </div>
  </div>
)

export default FullWidthImage