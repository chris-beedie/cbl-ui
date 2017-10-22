import React from 'react'
import { Loader } from 'semantic-ui-react'




export default function Tracks (props) {


  
  const isFetching = props.isFetching 

    console.log(isFetching)

  const listItems = props.tracks.map((track) =>
    <li key={track.Artist}>
      {track.Artist} {' - '} {track.Title} 
    </li>
  )

  return (
    <div>
  <Loader active={isFetching} >Loading</Loader>
<h1>Tracks</h1>
     <ul>{listItems}</ul> 

    </div>
  )
}


