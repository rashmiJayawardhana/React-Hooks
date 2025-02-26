import React, { useContext } from 'react'
import { UserApp } from './UseContextComp1'

function UseContextComp4() {
    const user = useContext(UserApp)
  return (
    <div>
      <h2>Chid 3</h2>
      <p>Welcome {user ==="" ? "Guest" : user}</p>
    </div>
  )
}

export default UseContextComp4

{/*
useContext(UserApp) allows UseContextComp4 to consume the value provided by the UserApp.Provider (i.e., the username).
No need to pass username through each intermediate child like we did in prop drilling.
*/}