import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'


import HomeContainer from './containers/HomeContainer'
import AboutContainer from './containers/AboutContainer'

import Navigation from './components/Navigation'


ReactDOM.render(
	 <BrowserRouter>
     	<div>
            <Navigation isAuthed={false} />
            <Route path='/' exact component={HomeContainer} />
      		<Route path='/about' component={AboutContainer} />
        </div>
    </BrowserRouter>,
document.getElementById('root'))

