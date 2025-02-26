import React, { useState } from "react";
import PropDrillingComp2 from "./propdrillingcomp2";

function PropDrillingComp1() {
  const [username, setUsername] = useState("Guest"); // State is managed here

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Welcome {username}</p>

      {/* Input field to update username */}
      <input
        type="text"
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Passing username as a prop to the next component */}
      <PropDrillingComp2 user={username} />
    </div>
  );
}

export default PropDrillingComp1;
