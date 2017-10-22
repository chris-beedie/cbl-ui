import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './sharedStyles/semantic.min.css'

import HomeContainer from './containers/HomeContainer'
import TrackContainer from './containers/TrackContainer'

import Navigation from './components/Navigation'


import * as trackReducers from './redux/Tracks.js'


const store = createStore(combineReducers({...trackReducers }), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))


ReactDOM.render(
	<Provider store={store}>
		 <BrowserRouter>
	     	<div>
	            <Navigation isAuthed={false} />
	            <Route path='/' exact component={HomeContainer} />
	      		<Route path='/Tracks' component={TrackContainer} />
	        </div>
	    </BrowserRouter>
    </Provider>,
document.getElementById('root'))

