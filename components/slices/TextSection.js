import React from 'react'
import { RichText } from 'prismic-reactjs'

const TextSection = ({ slice }) => {


  return (
    <section>
    <h1>
      <RichText
        render={slice.primary.text}
      />
      </h1>
    </section>
  )
}

export default TextSection