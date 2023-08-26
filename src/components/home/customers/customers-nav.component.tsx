import React, { useEffect, useState } from 'react'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav:React.FC<{title:string}> = ({title}) => {

  const [move,setMove] = useState<number>(0)


  const handleNext = () =>{
    const item = document.querySelector('.home__customers-item') as HTMLDivElement
    setMove(move - (item.clientWidth + 40))
  }
  const handlePrev = () =>{
    const item = document.querySelector('.home__customers-item') as HTMLDivElement
    setMove(move + (item.clientWidth + 40))
  }

  const handleMove = () => {
    const view = document.querySelector('.home__customers-carousel-view') as HTMLDivElement
    const items = document.querySelectorAll('.home__customers-item') as NodeListOf<HTMLDivElement>
    const item = document.querySelector('.home__customers-item') as HTMLDivElement

    
   
    if(typeof window !== undefined){
      if(window.innerWidth < 768){
        if(move < -view.clientWidth + item.clientWidth){
          setMove(0)
        }
        if(move > 0){
          setMove(-view.clientWidth)
        }
      }else{
        if(move < -view.clientWidth + ((items.length - 2) * (item.clientWidth + 40))){
          setMove(0)
        }
        if(move > 0){
          setMove(-view.clientWidth + ((items.length - 2) * (item.clientWidth + 40)))
        }
      }
    }
    view.style.transform = `translate(${move}px)`
  }

  useEffect(()=>{
    handleMove()
  },[move])

  return (
    <div className="home__customers-nav">
        <h2>{title}</h2>
        <div className="home__customers-icons">
            <FontAwesomeIcon onClick={()=>handlePrev()} icon={faChevronLeft} />
            <FontAwesomeIcon onClick={()=> handleNext()} icon={faChevronRight} />
        </div>
    </div>
  )
}

export default Nav
