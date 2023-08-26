import React, { useEffect, useId, useState } from 'react'
import useImage from '../../hooks/useImage'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

const Images = () => {

  const [activeImg,setActiveImage] = useState<any>(null)
   
  const [mainImg,setMainImg] = useImage('details-main')
  const [details_1,setDetails_1] = useImage('details-1')
  const [details_2,setDetails_2] = useImage('details-2')
  const [details_3,setDetails_3] = useImage('details-3')

  useEffect(()=>{
    setActiveImage(mainImg)
  },[mainImg])

  return (
    <div className='details__images'>
      <div className="details__images-imgs">
        <div className="details__images-img"  onClick={()=>setActiveImage(details_1)} >
          {details_1 && <GatsbyImage image={details_1.childImageSharp.gatsbyImageData} alt="details" />}
        </div>
        <div className="details__images-img" onClick={()=>setActiveImage(details_2)} >
          {details_3 && <GatsbyImage image={details_2.childImageSharp.gatsbyImageData} alt="details" />}
        </div>
        <div className="details__images-img" onClick={()=>setActiveImage(details_3)} >
          {details_2 && <GatsbyImage image={details_3.childImageSharp.gatsbyImageData} alt="details" />}
        </div>
      </div>
      <div className="details__images-main-img">
        {activeImg && <GatsbyImage image={activeImg.childImageSharp.gatsbyImageData} alt="details" />}
      </div>
    </div>
  )
}

export default Images
