import React from 'react'

interface CountProps{
  count:string;
  desc:string;
}

const Count:React.FC<CountProps> = ({count,desc}) => {
  return (
    <div className='home__hero-count'>
      <h3>{count}+</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Count
