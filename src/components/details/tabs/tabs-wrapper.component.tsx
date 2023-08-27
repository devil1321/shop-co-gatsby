import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Review from '../review.component'

const TabsWrapper = () => {

  return (
    <div className='details__tabs-tabs-wrapper'>
      <div id="tab-1" className="details__tabs-tab">Product Details</div>
      <div id="tab-2" className="details__tabs-tab">
        <div className="details__tabs-controls">
          <h3>All Reviews</h3>
          <div className="details__tabs-controls-icons">
            <div className="details__tabs-setting-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="details__tabs-menu-btn">
              <p>Latest</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="details__tabs-btn">
              <p>Write Review</p>
            </div>
          </div>
        </div>
        <div className="details__tabs-tab-revs">
          <Review id={1} rating={4.5} title="Samantha D." content="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." footer="Posted on August 14, 2023" />
          <Review id={2} rating={4} title="Ethan R." content="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." footer="Posted on August 16, 2023" />
          <Review id={3} rating={3.5} title="Ethan R." content="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." footer="Posted on August 16, 2023" />
          <Review id={4} rating={4} title="Olivia P." content="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out." footer="Posted on August 17, 2023" />
          <Review id={5} rating={4} title="Liam K." content="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion." footer="Posted on August 18, 2023" />
          <Review id={6} rating={4.5} title="Ava H." content="I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter." footer="Posted on August 19, 2023" />
        </div>
      </div>
      <div id="tab-3" className="details__tabs-tab">Faq</div>
    </div>
  )
}

export default TabsWrapper
