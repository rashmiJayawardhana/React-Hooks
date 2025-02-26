import React from 'react'
import '../App.css'
import UseContextComp1 from '../components/UseContextComp1'

// This is the top-level component that renders the first child.
function UseContext() {
  return (
    <div>
      <UseContextComp1/>
    </div>
  )
}

export default UseContext

{/*
How Data is Passed - Data is made available through Context Provider (UserApp.Provider) at the top level, and consumed anywhere in the component tree using useContext(UserApp)
Advantages - Avoids prop drilling, making data access easier and cleaner, especially in deeply nested component trees.
useContext allows you to share data (like the username in this example) across multiple components without having to pass it manually through each intermediate component.
You can achieve this by creating a Context with createContext() and then using useContext() to consume the context in any component that needs access to it.
Prop drilling passes props through each intermediate component, which can become cumbersome.
useContext allows direct access to data without needing to pass it down manually through every component.
Context Provider (UserApp.Provider): This component is where we define the value (e.g., username) and make it available to its children.
Context Consumer (useContext(UserApp)): Any component wrapped in the Provider can access the value using useContext without needing to explicitly pass it down.
*/}