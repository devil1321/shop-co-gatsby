import React, { MutableRefObject, useRef, useState } from 'react'
import useImage from '../../hooks/useImage';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface ProductProps{
    id:number;
    imgName:string;
    title:string;
    rating:number;
    price:number;
    prevPrice:number;
}

const Product:React.FC<ProductProps> = ({id,imgName,title,rating,price,prevPrice}) => {

  const [image,setImage] = useImage(imgName)

  const handleRating = () =>{
    let tmp = []
    for(let i = 1; i <= Number(rating);i+=0.5){
        if(i % 1 === 0){
            tmp.push(i)
        }
        if(i === rating){
            tmp.push(i)
        }
    }
    return tmp.map((r,i)=>{
        if(r % 1 === 0){
            return <FontAwesomeIcon icon={faStar} />
        }else if(r % rating === 0){
            // const step = 20
            // const product = document.querySelector(`#product-${id}`) as HTMLDivElement
            // const mask = product?.querySelector('.product__rating-mask') as HTMLDivElement
            // if(mask){
            //     mask.style.left = step * r + 'px'
            // }
            // return <FontAwesomeIcon icon={faStar} />
        }
    })
  }

  return (
    <div className='product' id={'product-' + id}>
      <div className="product__img">
      {/* @ts-ignore */}
        {image && <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="product" />}
      </div>
      <h3>{title}</h3>
      <div className='product__rating'>
        <div className="product__rating-mask"></div>
        {handleRating()}
        <span>{rating} / 5</span>
      </div>
      <h3>${price} {prevPrice !== 0 && '/ $' + prevPrice}</h3>
    </div>
  )
}

export default Product
