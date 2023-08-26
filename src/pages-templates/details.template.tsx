import React from 'react'
import { GlobalComponents } from '../components/global'
import { HomeComponents } from '../components/home'
import { DetailsComponents } from '../components/details'
import { you_may_also_like } from '../details-context'

const DetailsTemplate:React.FC<{pageContext:any}> = ({pageContext}) => {
  const { id, name, img_name,img_src, rating, price,prevPrice } = pageContext.p
  return (
    <GlobalComponents.Layout title="Details" className='details' meta={[]}>
        <GlobalComponents.Breadcrumb />
        <div className="details__hero">
          <DetailsComponents.Images />
          <DetailsComponents.Details />
        </div>
        <DetailsComponents.Tabs />
        <GlobalComponents.ProductSection data={you_may_also_like} start={0} end={4} title='You may also like' />
        <HomeComponents.Contact text='STAY UPTO DATE ABOUT OUR LATEST OFFERS'/>
    </GlobalComponents.Layout>
  )
}

export default DetailsTemplate
