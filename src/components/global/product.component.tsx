import React from 'react'
import { Link } from 'gatsby'
import useImage from '../../hooks/useImage';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../controller/reducers/root.reducer';
import * as ShopActions from '../../controller/action-creators/shop.action-creators'

interface ProductProps{
  product:{
    id:number;
    img_name:string;
    name:string;
    rating:number;
    price:number;
    prev_price:number;
    inCart:boolean;
  }
}

const Product:React.FC<ProductProps> = ({product}) => {

  const { id,img_name,name,rating,price,prev_price,inCart } = product
  const { cart,products } = useSelector((state:State) => state.shop)

  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)

  const [image,setImage] = useImage(img_name)

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
        {image && <Link to={`/details/${id}`}><GatsbyImage image={image[0].gatsbyImageData} alt="product" /></Link>}
        {inCart 
        ?  <div style={{backgroundColor:'yellowgreen'}} className="product__in-cart">IN CART</div>
        :  <div style={{backgroundColor:'orange'}} className="product__in-cart" onClick={()=>shopActions.handleAddToCart(id,cart,products)}>BUY</div>}
      </div>
      <h3>{name}</h3>
      <div className='product__rating'>
        <div className="product__rating-mask"></div>
        {handleRating()}
        <span>{rating} / 5</span>
      </div>
      <h3>${price} {prev_price !== 0 && '/ $' + prev_price}</h3>
    </div>
  )
}

export default Product
