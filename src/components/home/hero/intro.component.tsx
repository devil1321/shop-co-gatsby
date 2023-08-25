import React from 'react'

interface IntroProps{
  title:string;
  desc:string;
  button:string;
}

const Intro:React.FC<IntroProps> = ({title,desc,button}) => {
  return (
    <div className='home__hero-intro'>
      <h1 className="home__hero-intro-title">{title}</h1>
      <p className="home__hero-intro-desc">{desc}</p>
      <button className="home__hero-intro-btn">{button}</button>
    </div>
  )
}

export default Intro
