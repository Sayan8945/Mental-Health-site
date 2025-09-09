import React from 'react'
import Home from '../componenets/Home'
import Services from '../componenets/Services'
import Resources from '../componenets/Resources'
import WorkingSteps from '../componenets/WorkingSteps'
import ChatAi from '../componenets/ChatAi'
import Quotes from '../componenets/Quotes'
import Contact from '../componenets/Contact'

const HomePage = () => {
  return (
    <div className='font-primary overflow-x-hidden'>
      <Home />
      <Services/>
      <Resources/>
      <WorkingSteps/>
      <ChatAi/>
      <Quotes/>
      <Contact/>
    </div>
  )
}

export default HomePage
