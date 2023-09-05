import React from 'react'
import { GlobalComponents } from '../components/global'
import { HomeComponents } from '../components/home'
import { CartComponents } from '../components/cart'

const CartPage = () => {
  return (
    <GlobalComponents.Layout title="Cart" className='cart' meta={[]}>
        <GlobalComponents.Breadcrumb paths={["Home","Cart"]} />
        <h1>Your Cart</h1>
        <div className="cart__inner-wrapper">
          <div className="cart__items">
            <CartComponents.Item imgName='product-1' title="Gradient Graphic T-shirt" size="Large" color="white" price={145} quantity={1}/>
            <CartComponents.Item imgName='product-1' title="Gradient Graphic T-shirt" size="Large" color="white" price={145} quantity={1}/>
            <CartComponents.Item imgName='product-1' title="Gradient Graphic T-shirt" size="Large" color="white" price={145} quantity={1}/>
          </div>
          <CartComponents.Summary />
        </div>
        <HomeComponents.Contact text="STAY UPTO DATE ABOUT OUR LATEST OFFERS" />
    </GlobalComponents.Layout>
  )
}

export default CartPage
