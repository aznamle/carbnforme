import React from 'react'
import { RichText } from 'prismic-reactjs'

const Content = ({ slice }) => {
    return (
        <div className="h-full">
            <div className="items-center justify-items-center w-full">
                <h1 className="font-semibold">{RichText.asText(slice.primary.sectiontitle)}</h1>
            </div>
            <div>
                {slice.items.map((content) => (


                <div className="flex">

                    <>
                        {content.leftalign === false ? 
                            <div className="flex justify-center items-center lg:w-1/2">
                                <img className="mx-auto" src={content.contentimage.url} alt="right aligned"/>
                            </div>
                            : undefined
                        }
                    </>
                    
                    <div className="flex-wrap lg:w-1/2">
                        <h1 className="text-3xl">{RichText.asText(content.contenttitle)}</h1>
                        <p>{RichText.asText(content.contentdescription)}</p>
                    </div>

                    <>
                        {content.leftalign === true ? 
                            <div className="flex justify-center items-center lg:w-1/2">
                                <img className="object-cover object-center h-full w-full" src={content.contentimage.url} alt="left aligned"/>
                            </div>
                            : undefined
                        }
                    </>
                </div>



                ))}
            </div>
        </div>
    )
}

export default Content