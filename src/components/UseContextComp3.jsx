import React, { useContext } from "react";
import { UserApp } from "./UseContextComp1";

// Accessing the shared context using useContext hook
function UseContextComp4() {
  const user = useContext(UserApp); // Consume the shared username context

  return (
    <div>
      <h2>Child 3 (Final Component)</h2>
      <p>Welcome {user === "" ? "Guest" : user}</p>
    </div>
  );
}

export default UseContextComp4;

{/*
useContext(UserApp): The useContext hook is used here to access the username from the context and display it. This avoids the need to pass the username through multiple layers of components.
*/}