import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react'
import useImage from '../../hooks/useImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector,useDispatch } from 'react-redux';
import { State } from '../../controller/reducers/root.reducer';
import { bindActionCreators } from 'redux';
import * as ShopActions from '../../controller/action-creators/shop.action-creators'

interface ItemProps{
    id:number;
    imgName:string;
    title:string;
    size:string;
    color:string;
    price:number;
    quantity:number;
}

const Item:React.FC<ItemProps> = ({id,imgName,title,size,color,price,quantity}) => {

  const { cart,products } = useSelector((state:State) => state.shop)
  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)

  const [image,setImage] = useImage(imgName)
  const [quan,setQuan] = useState<number>(quantity)

  useEffect(()=>{
    if(quan < 1){
        shopActions.handleRemoveFromCart(id,cart,products)
    }
    shopActions.handleSummary(cart)
  },[quan,cart])

  return (
    <div className='cart__item'>
        <div className="cart__item-img">
            {image && <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={image.name} />}
        </div>
        <div className="cart__item-info">
            <div className="cart__item-info-header">
                <h3>{title}</h3>
                <FontAwesomeIcon icon={faTrash} onClick={()=>{
                    shopActions.handleRemoveFromCart(id,cart,products)
                    shopActions.handleSummary(cart)
                }}/>
            </div>
            <p>Size:<span>{size}</span></p>
            <p>Color:<span>{color}</span></p>
            <div className="cart__item-info-footer">
                <h3>${price}</h3>
                <div className="cart__item-quantity">
                    <div onClick={()=>{
                         setQuan(prevQuan => {
                            const newQuan = prevQuan - 1;
                            shopActions.handleChangeCartQuantity(id, newQuan, cart, products);
                            return newQuan;
                        });
                    }}>-</div>
                    <div>{quan}</div>
                    <div onClick={()=>{
                         setQuan(prevQuan => {
                            const newQuan = prevQuan + 1;
                            shopActions.handleChangeCartQuantity(id, newQuan, cart, products);
                            return newQuan;
                        });
                    }}>+</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item
