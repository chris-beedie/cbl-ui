import { getTracks } from '../helpers/api'

const FETCHING_TRACKS = 'FETCHING_TRACKS'
const FETCHING_TRACKS_ERROR = 'FETCHING_TRACKS_ERROR'
const FETCHING_TRACKS_SUCCESS = 'FETCHING_TRACKS_SUCCESS'
const REMOVE_FETCHING = 'REMOVE_FETCHING'

function fetchingTracks () {
  return {
    type: FETCHING_TRACKS,
  }
}

function fetchingTracksError (error) {
  return {
    type: FETCHING_TRACKS_ERROR,
    error: 'Error fetching Tracks',
  }
}

function fetchingTracksSuccess (tracks) {
  return {
    type: FETCHING_TRACKS_SUCCESS,
    tracks,
  }
}

export function fetchTracks() {
  return function (dispatch) {
    dispatch(fetchingTracks())
    getTracks()
      .then((tracks) => dispatch(fetchingTracksSuccess(tracks)))
      .catch((error) => dispatch(fetchingTracksError(error)))
  }
}


const initialState = {
  isFetching: true,
  error: '',
  tracks: []
}

export default function reduceTracks (state = initialState, action) {
  switch (action.type) {
    case FETCHING_TRACKS :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_TRACKS_SUCCESS :
      return {
        ...state,
        error: '',
        tracks: action.tracks,
        isFetching: false,
      }
    case FETCHING_TRACKS_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case REMOVE_FETCHING :
      return {
        ...state,
        isFetching: false,
        error: '',
      }
    default :
      return state
  }
}