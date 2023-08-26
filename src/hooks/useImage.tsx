import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'

interface Image{
    name:string;
    childImageSharp:{
      gatsbyImageData:IGatsbyImageData;
    }
  }
  
  interface Data {
    allFile:{
        nodes:Image[];
    }
  }
  

const useImage = (name:string) => {
  const [image,setImage] = useState<Image>()

  const data:Data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            gatsbyImageData(formats: WEBP, placeholder: BLURRED, layout: CONSTRAINED)
          }
          name
        }
      }
    }
  `)

  const handleImage = (name:string) =>{
    const images = data.allFile.nodes 
    const image = images.find((n:Image) => n.name === name)
    setImage(image)
  }

  useEffect(()=>{
    handleImage(name)
  },[name])

  return [image,setImage]
}

export default useImage
