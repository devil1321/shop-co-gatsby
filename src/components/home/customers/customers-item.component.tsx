import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

interface CustomersItemProps{
    rating:number;
    title:string;
    content:string;
}

const CustomersItem:React.FC<CustomersItemProps> = ({rating,title,content}) => {
  
  const [stars,setStars] = useState<number[]>()
  
  const handleStars = () =>{
    let tmp = []
    for(let i = 1; i <= rating; i++){
        tmp.push(i)
    }
    setStars(tmp)
  }

  useEffect(()=>{
    handleStars()
  },[rating])
       
  return (
    <div className='home__customers-item'>
      {stars?.map(s => <FontAwesomeIcon icon={faStar} />)}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default CustomersItem
