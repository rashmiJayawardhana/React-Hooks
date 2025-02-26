import React from 'react'
import '../App.css'
import PropDrillingComp1 from '../components/propdrilling/propdrillingcomp1'

// This is the top-level component that renders the first child.
function PropDrilling() {
  return (
    <div>
      <PropDrillingComp1/>
    </div>
  )
}

export default PropDrilling

{/*
Issue - Intermediate components (Comp2, Comp3) don't need user but still pass it
Better Alternative? useContext Hook (Removes need for passing props manually)
*/}
