import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as trackActionCreators from '../redux/Tracks'
import Tracks from '../components/Tracks'




class TrackContainer extends React.Component {
  render () {
    return (
      <Tracks 
		tracks= {this.props.tracks}
		error={this.props.error}
        isFetching={this.props.isFetching}
      />
    )
  }

  componentDidMount() {
    this.props.fetchTracks()
  }
}

function mapStateToProps (state) {
  return {
    tracks: state.default.tracks,
    error: state.default.error,
    isFetching: state.default.isFetching
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(trackActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrackContainer)

TrackContainer.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchTracks: PropTypes.func.isRequired,
}