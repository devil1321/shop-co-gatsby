import * as React from "react"
import { GlobalComponents } from "../components/global"
import { HomeComponents } from "../components/home"
import { products } from '../products-context'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ShopActions from '../controller/action-creators/shop.action-creators'

const IndexPage:React.FC = () => {

  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)

  React.useEffect(()=>{
    shopActions.handleSetProducts()
  },[])

  return (
    <GlobalComponents.Layout title="Home" className='home' meta={[]}>
      <HomeComponents.Hero />
      <GlobalComponents.ProductSection data={products} title="NEW ARRIVALS" start={0} end={4} border={true} />
      <GlobalComponents.ProductSection data={products} title="TOP SELLING" start={4} end={8} />
      <HomeComponents.Browse title="BROWSE BY dress STYLE" />
      <HomeComponents.Customers title="OUT HAPPY CUSTOMERS" />
      <HomeComponents.Contact text="STAY UP TO DATE ABOUT OUR LATEST OFFERS" />
    </GlobalComponents.Layout>
  )
}

export default IndexPage

