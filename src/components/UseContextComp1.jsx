import React, { createContext, useState } from "react";
import UseContextComp2 from "./UseContextComp2";

// Creating a context to share data (in this case, `username`)
export const UserApp = createContext();

function UseContextComp1() {
  const [username, setUsername] = useState("Guest"); // Manage the username state

  return (
    <div>
      {/* Wrapping child components with the Provider to share `username` */}
      <UserApp.Provider value={username}>
        <h2>Parent Component</h2>
        <p>Welcome {username === "" ? "Guest" : username}</p>
        
        {/* Input to change the username */}
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)} // Update username
        />

        {/* Passing down context through the component tree */}
        <UseContextComp2 />
      </UserApp.Provider>
    </div>
  );
}

export default UseContextComp1;

{/*
createContext() creates a context (in this case, UserApp) to hold the shared data.
UserApp.Provider wraps the child components, providing the username value.
UserApp.Provider is used to provide the value (i.e., username) to all child components that consume this context.
value={username} makes username available to all components wrapped by this provider.
UserApp is like a variable name. You can use any name for it.
*/}