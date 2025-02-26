import React from "react";
import UseContextComp3 from "./UseContextComp3";

// This component does not use the context but passes it down to the next child
function UseContextComp2() {
  return (
    <div>
      <h2>Child 1</h2>
      {/* Passing down the context to the next child */}
      <UseContextComp3 />
    </div>
  );
}

export default UseContextComp2;
