import React from 'react'
import useImage from '../../../hooks/useImage';
import { GatsbyImage } from 'gatsby-plugin-image';

interface BrowseItemProps{
    title:string;
    imgName:string;
    width:string;
}

const BrowseItem:React.FC<BrowseItemProps> = ({title,imgName,width}) => {
  
  const [image,setImage] = useImage(imgName)

  return (
    <div className={`home__browse-item ${width}`}>
        <div className="home__browse-item-img">
            <h3>{title}</h3>
            {/* @ts-ignore */}
            {image && <GatsbyImage image={image[1].gatsbyImageData} alt="feature" />}
        </div>
    </div>
  )
}

export default BrowseItem
