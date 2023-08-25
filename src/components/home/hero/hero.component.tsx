import React from 'react'
import Intro from './intro.component'
import { useStaticQuery, graphql } from 'gatsby'
import { IGatsbyImageData, GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import Footer from './footer.component'
import Count from './count.component'

interface Image{
  childImageSharp:{
    gatsbyImageData:IGatsbyImageData;
  }
}

interface Data {
  hero:Image;
  vect:Image;
}

const Hero = () => {
  const data: Data = useStaticQuery(graphql`
  query {
    hero: file(name: { eq: "hero" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    vect: file(name: { eq: "vect" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`);
  
  const image = getImage(data.hero as any)
  const vectImage = getImage(data.vect as any)

  return (
    <div className='home__hero'>
      {/* @ts-ignore */}
      <div className="home__hero-inner-wrapper">
        <Intro 
          title="FIND CLOTHES THAT MATCHES YOUR STYLE" 
          desc="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style." 
          button="SHOP NOW" 
        />
        <div className="home__hero-counts">
          <Count count="200" desc='International Brands' />
          <Count count="2,000" desc='High-Quality Products' />
          <Count count="30,000" desc='Happy Customers' />
        </div>
        <div className="home__hero-vect-1">
            {vectImage && <GatsbyImage image={vectImage} alt="vect" />}
        </div>
        <div className="home__hero-vect-2">
            {vectImage && <GatsbyImage image={vectImage} alt="vect" />}
        </div>
        <div className="home__hero-img">
          {image && <GatsbyImage image={image} alt="hero" />}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Hero
