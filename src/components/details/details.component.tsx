import { faCheck, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

interface DetailsProps{
  product:{
    id:number;
    name:string;
    img_name:string;
    img_src:string;
    rating:number;
    price:number;
    prevPrice:number;
  }
}

const Details:React.FC<DetailsProps> = ({product}) => {

  const { id, name, img_name, img_src, rating, price, prev_price } = product

  const [quantity,setQuantity] = useState<number>(1)

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
            const step = 20
            // if(typeof window !== undefined){
            //   if(document){
            //     const product = document.querySelector(`#details-${id}`) as HTMLDivElement
            //     const mask = product?.querySelector('.details__info-rating-mask') as HTMLDivElement
            //     if(mask){
            //       mask.style.left = step * r + - 9 + 'px'
            //     }
            //     return <FontAwesomeIcon icon={faStar} />
            //   }
            // }
        }
    })
  }

  const handleColor = (e:any) => {
    const colors = document.querySelectorAll('.details__info-color')
    colors.forEach(c => c.classList.remove('active'))
    e.target.classList.add('active')
  }
  const handleSizes = (e:any) => {
    // if(typeof window !== undefined){
    //   if(document){
    //     const sizes = document.querySelectorAll('.details__info-size')
    //     sizes.forEach(s => s.classList.remove('active'))
    //     e.target.classList.add('active')
    //   }
    // }
  }

  useEffect(()=>{
    handleRating()
    if(quantity < 1){
      setQuantity(1)
    }
  },[quantity])
  return (
    <div className='details__info' id={`details-${id}`}>
      <h2>{name}</h2>
      <div className="details__info-rating">
        <div className="details__info-rating-mask"></div>
        {handleRating()}
      </div>
      <p className='details__info-price'>${price} <span>{prev_price !== 0 ? '/$ ' + prev_price : null}</span> </p>
      <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
      <p className='details__info-title'>Select Colors</p>
      <div className="details__info-colors">
        <div className="details__info-color active" onClick={(e)=>handleColor(e)}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div className="details__info-color" onClick={(e)=>handleColor(e)}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div className="details__info-color" onClick={(e)=>handleColor(e)}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
      <div className="details__info-sizes">
        <p className='details__info-title'>Choose Size</p>
        <div className="details__info-size active" onClick={(e)=>handleSizes(e)}>Small</div>
        <div className="details__info-size" onClick={(e)=>handleSizes(e)}>Medium</div>
        <div className="details__info-size" onClick={(e)=>handleSizes(e)}>Large</div>
        <div className="details__info-size" onClick={(e)=>handleSizes(e)}>X-Large</div>
      </div>
      <div className="details__info-controls">
        <div className="details__info-quantity">
          <div className="details__info-quantity-item">
            <FontAwesomeIcon icon={faMinus} onClick={()=>setQuantity(quantity - 1)} />
          </div>
          <div className="details__info-quantity-item">
            {quantity}
          </div>
          <div className="details__info-quantity-item">
            <FontAwesomeIcon icon={faPlus} onClick={()=>setQuantity(quantity + 1)}/>
          </div>
        </div>
        <button className="details__info-btn">Add to cart</button>
      </div>
    </div>
  )
}

export default Details
