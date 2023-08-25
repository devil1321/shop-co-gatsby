import React from 'react'
import { GlobalComponents } from '.'
// @ts-ignore
import { products } from '../../products-context'
import { Link } from 'gatsby'

interface SectionProps{
  title:string;
  start:number;
  end:number;
  border?:boolean;
}

const ProductsSection:React.FC<SectionProps> = ({title,start,end,border}) => {
  return (
    <div className={`products-section ${border && 'products-section__border'}`}>
      <h2>{title}</h2>
      {products.slice(start,end).map((p:any)=>{
         return <GlobalComponents.Product key={p.id} id={p.id} imgName={p.img_name} title={p.name} price={p.price} prevPrice={p.prev_price} rating={p.rating} />
      })}
      <Link to="#">View All</Link>
    </div>
  )
}

export default ProductsSection
