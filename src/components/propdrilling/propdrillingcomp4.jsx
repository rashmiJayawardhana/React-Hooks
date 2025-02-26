import React from 'react'

function PropDrillingComp4(props) {
  return (
    <div>
      <h2>Chid 3</h2>

      {/* The prop is finally used here */}
      <p>Welcome {props.user}</p>
    </div>
  )
}

export default PropDrillingComp4
