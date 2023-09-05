import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react'
import useImage from '../../hooks/useImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface ItemProps{
    imgName:string;
    title:string;
    size:string;
    color:string;
    price:number;
    quantity:number;
}

const Item:React.FC<ItemProps> = ({imgName,title,size,color,price,quantity}) => {

  const [image,setImage] = useImage(imgName)
  const [quan,setQuan] = useState<number>(quantity)

  return (
    <div className='cart__item'>
        <div className="cart__item-img">
            {image && <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={image.name} />}
        </div>
        <div className="cart__item-info">
            <div className="cart__item-info-header">
                <h3>{title}</h3>
                <FontAwesomeIcon icon={faTrash} />
            </div>
            <p>Size:<span>{size}</span></p>
            <p>Color:<span>{color}</span></p>
            <div className="cart__item-info-footer">
                <h3>${price}</h3>
                <div className="cart__item-quantity">
                    <div onClick={()=>setQuan(quan - 1)}>-</div>
                    <div>{quan}</div>
                    <div onClick={()=>setQuan(quan + 1)}>+</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item
