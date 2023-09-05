import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Summary = () => {
  return (
    <div className='cart__summary'>
      <h3>Order Summary</h3>
      <div className="cart__summary-items">
        <div className='cart__summary-item'>
          <p>Subtotal</p>
          <h3>$565</h3>
        </div>
        <div className='cart__summary-item'>
          <p>Discount -20%</p>
          <h3>-$113</h3>
        </div>
        <div className='cart__summary-item'>
          <p>Delivery Fee</p>
          <h3>$15</h3>
        </div>
      </div>
      <div className="cart__summary-footer">
        <p>Total</p>
        <h3>$467</h3>
      </div>
      <div className="cart__summary-code">
          <div className="cart__summary-field">
              <FontAwesomeIcon icon={faCheck} />
              <input type="text" placeholder='Add promo code' />
          </div>
          <button>Apply</button>
      </div>
      <button>Go To Checkout <FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
  )
}

export default Summary
