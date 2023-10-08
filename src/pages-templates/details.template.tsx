import React, { useEffect,useState } from 'react'
import { GlobalComponents } from '../components/global'
import { HomeComponents } from '../components/home'
import { DetailsComponents } from '../components/details'
import { you_may_also_like } from '../details-context'
import { bindActionCreators } from 'redux'
import { useDispatch,useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'
import * as ShopActions from '../controller/action-creators/shop.action-creators'

const DetailsTemplate:React.FC<{pageContext:any}> = ({pageContext}) => {

  
  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)
  const { products } = useSelector((state:State) => state.shop)

  const [item,setItem] = useState<any>(null)

  const handleProduct = () =>{
    const product = products.find((p:any) => p.id === pageContext.p.id)
    setItem(product)
  }

  useEffect(()=>{
    shopActions.handleSetProducts()
  },[])

  return (
    <GlobalComponents.Layout title="Details" className='details' meta={[]}>
        <GlobalComponents.Breadcrumb paths={['Home','Shop','Men','T-Shirt']}/>
        <div className="details__hero">
          <DetailsComponents.Images />
          <DetailsComponents.Details id={pageContext.p.id} />
        </div>
        <DetailsComponents.Tabs />
        <GlobalComponents.ProductSection data={you_may_also_like} start={0} end={4} title='You may also like' />
        <HomeComponents.Contact text='STAY UPTO DATE ABOUT OUR LATEST OFFERS'/>
    </GlobalComponents.Layout>
  )
}

export default DetailsTemplate
