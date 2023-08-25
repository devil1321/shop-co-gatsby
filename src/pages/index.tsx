import * as React from "react"
import { GlobalComponents } from "../components/global"
import { HomeComponents } from "../components/home"

const IndexPage: React.FC = () => {
  return (
    <GlobalComponents.Layout title="Home" className='home' meta={[]}>
      <HomeComponents.Hero />
      <GlobalComponents.ProductSection title="NEW ARRIVALS" start={0} end={4} border={true} />
      <GlobalComponents.ProductSection title="TOP SELLING" start={4} end={8} />
      <HomeComponents.Browse title="BROWSE BY dress STYLE" />
      <HomeComponents.Customers title="OUT HAPPY CUSTOMERS" />
      <HomeComponents.Contact text="STAY UP TO DATE ABOUT OUR LATEST OFFERS" />
    </GlobalComponents.Layout>
  )
}

export default IndexPage

