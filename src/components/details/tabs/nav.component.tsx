import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Nav = () => {

  const handleTab = (e:any) =>{
    const tabs = document.querySelectorAll('.details__tabs-tab') as NodeListOf<HTMLDivElement>
    tabs.forEach((t:HTMLDivElement) => t.style.display = 'none')
    const target = document.querySelector(`#tab-${e.target.dataset.target}`) as HTMLDivElement
    target.style.display = 'block'
    const nav_items = document.querySelectorAll('.details__nav-item')
    nav_items.forEach(i => i.classList.remove('active'))
    e.target.classList.add('active')
  }

  return (
      <div className="details__nav">
        <div data-target="1" onClick={(e)=>handleTab(e)} className="details__nav-item">Product Details</div>
        <div data-target="2" onClick={(e)=>handleTab(e)} className="details__nav-item active">Rating & Reviews</div>
        <div data-target="3" onClick={(e)=>handleTab(e)} className="details__nav-item">FAQs</div>
      </div>
  )
}

export default Nav
