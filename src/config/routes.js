import React from 'react'
import { Route } from 'react-router-dom'

import HomeContainer from '../containers/HomeContainer'
import AboutContainer from '../containers/AboutContainer'

export default function getRoutes() {
  return (
      <div>
      <Route path='/' exact component={HomeContainer} />
      <Route path='/about' component={AboutContainer} />
     </div>
  )
}