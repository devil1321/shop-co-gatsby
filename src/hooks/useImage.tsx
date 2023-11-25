import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect, useState } from "react"

const useImage = (name:string) => {

  const [image,setImage] = useState<any>(null)

  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          original {
            src
          }
        }
      }
    }
  `)

  const handleImage = () => {
    const regex = new RegExp(`${name}`,'i')
    const image = data.allImageSharp.nodes.filter((image:any) => regex.test(image.original.src))
    setImage(image)
  }

  useEffect(()=>{
    handleImage()
  },[name])

  return [image,setImage]
}

export default useImage