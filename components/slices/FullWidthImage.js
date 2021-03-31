import React from 'react'

const FullWidthImage = ({ slice }) => (
  <section className="flex w-full h-screen items-center lg:h-screen bg-top bg-fixed bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${slice.primary.banner.url})`
      }}>
  </section>
)

export default FullWidthImage