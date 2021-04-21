import React from 'react'
import { RichText } from 'prismic-reactjs'

const Content = ({ slice }) => {
    return (
        <div className="flex h-full">
            <h1 className="font-semibold">{RichText.asText(slice.primary.sectiontitle)}</h1>
            <div>
                {slice.items.map((content) => (


                <div>
                    <h1>{RichText.asText(content.contenttitle)}</h1>
                    <p>{RichText.asText(content.contentdescription)}</p>
                {content.leftalign === true ? <img src={content.contentimage.url} alt="left aligned"/>
                    : <img src={content.contentimage.url} alt="right aligned" />
                }
                </div>



                ))}
            </div>
        </div>
    )
}

export default Content