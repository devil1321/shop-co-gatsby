import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

interface ReviewProps{
  id:number;
  rating:number;
  title:string;
  content:string;
  footer:string;
}

const Review:React.FC<ReviewProps> = ({id,rating,title,content,footer}) => {
  
  const handleRating = () =>{
    let tmp = []
    for(let i = 1; i <= Number(rating);i+=0.5){
        if(i % 1 === 0){
            tmp.push(i)
        }
        if(i === rating){
            tmp.push(i)
        }
    }
    return tmp.map((r,i)=>{
        if(r % 1 === 0){
            return <FontAwesomeIcon icon={faStar} />
        }else if(r % rating === 0){
            const step = 20
            if(typeof window !== undefined){
              if(document){
                const product = document.querySelector(`#details__review-${id}`) as HTMLDivElement
                const mask = product?.querySelector('.details__review-rating-mask') as HTMLDivElement
                if(mask){
                  mask.style.left = step * r + - 9 + 'px'
                }
                return <FontAwesomeIcon icon={faStar} />
              }
            }
        }
    })
  }

  useEffect(()=>{
    handleRating()
  },[])

  return (
    <div className="details__review" id={`details__review-${id}`}>
       <div className="details__review-rating">
        <div className="details__review-rating-mask"></div>
        {handleRating()}
      </div>
      <h3>
        {title} 
        <div className="details__review-check">
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </h3>
      <p>{content}</p>
      <p>{footer}</p>
    </div>
  )
}

export default Review
