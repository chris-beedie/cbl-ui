import React from 'react'
import { Button, Rating } from 'semantic-ui-react'

export default function Home () {
  return (
    <div>
      <p>{'CBL'}</p>
      <p>{'Music n stuff'}</p>
       <Button>
    Click Here!
  </Button>


  <Rating icon='star' rating={1} maxRating={5} />
    </div>
  )
}
