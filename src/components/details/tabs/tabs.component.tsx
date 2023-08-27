import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Nav from './nav.component'
import TabsWrapper from './tabs-wrapper.component'

const Tabs = () => {
  return (
    <div className='details__tabs'>
      <Nav />
      <TabsWrapper />
    </div>
  )
}

export default Tabs
