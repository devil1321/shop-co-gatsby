
import React from 'react'
import Nav from './customers-nav.component'
import CustomersItem from './customers-item.component'

const Customers:React.FC<{title:string}> = ({title}) => {
  return (
    <div className='home__customers'>
      <Nav title="OUR HAPPY CUSTOMERS" />
      <div className="home__customers-carousel">
        <div className="home__customers-carousel-view">
          <CustomersItem rating={5} title="Sarah M." content="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." />
          <CustomersItem rating={5} title="Sarah M." content="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." />
          <CustomersItem rating={5} title="Alex K."  content="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." />
          <CustomersItem rating={5} title="James L." content="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." />
          <CustomersItem rating={5} title="Mooen"    content="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." />
        </div>
      </div>
    </div>
  )
}

export default Customers
