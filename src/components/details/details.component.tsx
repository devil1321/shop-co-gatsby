import { faCheck, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../controller/reducers/root.reducer';
import { bindActionCreators } from 'redux';
import * as ShopActions from '../../controller/action-creators/shop.action-creators'

interface DetailsProps{
  id:number;
}

const Details:React.FC<DetailsProps> = ({id}) => {
  
  
  const [item,setItem] = useState<any>(null);
  
  const [quantity,setQuantity] = useState<number>(0)

  if(item?.id){
    var { id:itemId, name, rating, price, prev_price, inCart } = item
  }
  const { products, cart } = useSelector((state:State) => state.shop)

  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)

  const handleProduct = () =>{
    const item = products.find((p:any) => p.id === id)
    setItem(item)
  }

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

  const handleSetQuantity = () =>{
    if(item?.id && quantity === 0){
      setQuantity(1)
      shopActions.handleChangeCartQuantity(id,quantity,cart,products)
    }
  }
  const handleChangeQuantity = () =>{
    if(quantity < 0){
      setQuantity(0)
    }else{
      shopActions.handleChangeCartQuantity(id,quantity,cart,products)
    }
  }

  useEffect(()=>{
    handleRating()
    handleProduct()
    handleSetQuantity()
    handleChangeQuantity()
  },[quantity,products,item])
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
        {!inCart
          ? <button className="details__info-btn" onClick={()=>{
            shopActions.handleAddToCart(id,cart,products)
            setQuantity(1)
          }}>Add to cart</button>
          : <button style={{backgroundColor:'yellowgreen'}} className="details__info-btn">In cart</button>}
      </div>
    </div>
  )
}

export default Details
