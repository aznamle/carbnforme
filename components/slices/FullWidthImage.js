import React from 'react'

const FullWidthImage = ({ slice }) => (
  <section className="flex content-center justify-center">    
  <div className="w-full h-screen bg-top bg-fixed bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${slice.primary.banner.url})`
      }}>
  </div>
</section>
)

export default FullWidthImage