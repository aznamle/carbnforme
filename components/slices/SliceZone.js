import React from 'react'
import {
  TextSection,
  FullWidthImage,
  TwoBlockImageLeft,
  TwoBlockImageRight,
  Feature,
  VideoBanner,
  Content,
  Highlight,
  FeatureList,
  Specs,
  StickyBanner,
  Gallery,
  ArticleContent,
  FullImageTextLeft,
  FullImageTextTop,
  StickyContent,
  CenterImageBlock
} from './'

const SliceZone = ({ sliceZone }) => (
  <div>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('text'):
          return <TextSection slice={slice} key={`slice-${index}`} />
        case ('full_width_image'):
          return <FullWidthImage slice={slice} key={`slice-${index}`} />
        case('two_block_image_left'):
          return <TwoBlockImageLeft slice={slice} key={`slice-${index}`} />
        case('two_block_image_right'):
          return <TwoBlockImageRight slice={slice} key={`slice-${index}`} />
        case('feature'):
          return <Feature slice={slice} key={`slice-${index}`} />
        case('video_banner'):
          return <VideoBanner slice={slice} key={`slice-${index}`} />
        case('content'):
          return <Content slice={slice} key={`slice-${index}`} />
        case('highlight_block'):
          return <Highlight slice={slice} key={`slice-${index}`} />
        case('feature_list'):
          return <FeatureList slice={slice} key={`slice-${index}`} />
        case('specifications'):
          return <Specs slice={slice} key={`slice-${index}`} />
        case('sticky_header'):
          return <StickyBanner slice={slice} key={`slice-${index}`} />
        case('image_gallery'):
          return <Gallery slice={slice} key={`slice-${index}`} />
        case('article_content'):
          return <ArticleContent slice={slice} key={`slice-${index}`} />
        case('full_image_text_left'):
          return <FullImageTextLeft slice={slice} key={`slice-${index}`} />
        case('full_image_text_top'):
          return <FullImageTextTop slice={slice} key={`slice-${index}`} />
        case('sticky_content'):
          return <StickyContent slice={slice} key={`slice-${index}`} />
        case('center_image_block'):
          return <CenterImageBlock slice={slice} key={`slice-${index}`} />
        default:
          return null
      }
    })}
  </div>
)

export default SliceZone