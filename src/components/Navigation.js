import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

function NavLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><Link to='/' >{'Home'}</Link></li>
      </ul>
    : null
}

function ActionLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><Link to='/logout'>{'Logout'}</Link></li>
      </ul>
    : <ul>
        <li><Link to='/'>{'Home'}</Link></li>
        <li><Link to='/auth'>{'Authenticate'}</Link></li>
        <li><Link to='/about'>{'About'}</Link></li>
      </ul>
}

export default function Navigation ({isAuthed}) {
  return (
    <div>
      <nav>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  )
}
