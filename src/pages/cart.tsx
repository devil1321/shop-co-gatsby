import React from 'react'
import { GlobalComponents } from '../components/global'
import { HomeComponents } from '../components/home'
import { CartComponents } from '../components/cart'
import { State } from '../controller/reducers/root.reducer'
import { useSelector } from 'react-redux'

const CartPage = () => {

  const { cart } = useSelector((state:State) => state.shop)

  return (
    <GlobalComponents.Layout title="Cart" className='cart' meta={[]}>
        <GlobalComponents.Breadcrumb paths={["Home","Cart"]} />
        <h1>Your Cart</h1>
        <div className="cart__inner-wrapper">
          <div className="cart__items" style={cart?.length > 0 ? {
            padding:'10px',
            border:'1px solid lightgrey'
          } : {}}>
            {cart.map((p:any)=>
              <CartComponents.Item 
                id={p.id}
                imgName={p.img_name} 
                title={p.name}
                size="Large" 
                color="white" 
                price={p.price} 
                quantity={p.quantity}/>
            )}
          </div>
          <CartComponents.Summary />
        </div>
        <HomeComponents.Contact text="STAY UPTO DATE ABOUT OUR LATEST OFFERS" />
    </GlobalComponents.Layout>
  )
}

export default CartPage
