import React from 'react'
import { GlobalComponents } from '../components/global'
import { HomeComponents } from '../components/home'
import { DetailsComponents } from '../components/details'
import { you_may_also_like } from '../details-context'

const DetailsTemplate:React.FC<{pageContext:any}> = ({pageContext}) => {
  return (
    <GlobalComponents.Layout title="Details" className='details' meta={[]}>
        <GlobalComponents.Breadcrumb paths={['Home','Shop','Men','T-Shirt']}/>
        <div className="details__hero">
          <DetailsComponents.Images />
          <DetailsComponents.Details product={pageContext.p} />
        </div>
        <DetailsComponents.Tabs />
        <GlobalComponents.ProductSection data={you_may_also_like} start={0} end={4} title='You may also like' />
        <HomeComponents.Contact text='STAY UPTO DATE ABOUT OUR LATEST OFFERS'/>
    </GlobalComponents.Layout>
  )
}

export default DetailsTemplate
