import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact:React.FC<{text:string}> = ({text}) => {
  return (
    <div className='home__contact'>
      <h2>{text}</h2>
      <div className="home__contact-form">
        <form action="">
          <div className="home__contact-field">
            <FontAwesomeIcon icon={faMessage} />
            <input type="text" placeholder='Enter your email address' />
          </div>
          <button className="home__contact-btn">Subscribe to Newsletter</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
