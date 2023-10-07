import React from 'react'
import { GlobalComponents } from '.'
// @ts-ignore
import { Link } from 'gatsby'

interface SectionProps{
  data:any[];
  title:string;
  start:number;
  end:number;
  border?:boolean;
}

const ProductsSection:React.FC<SectionProps> = ({data,title,start,end,border}) => {
  return (
    <div className={`products-section ${border && 'products-section__border'}`}>
      <h2>{title}</h2>
      {data?.slice(start,end).map((p:any)=>{
         return <GlobalComponents.Product key={p.id} product={p} />
      })}
      <Link to="#">View All</Link>
    </div>
  )
}

export default ProductsSection
