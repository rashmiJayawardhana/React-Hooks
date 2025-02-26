import React from "react";
import PropDrillingComp4 from "./propdrillingcomp4";

function PropDrillingComp3(props) {
  return (
    <div>
      <h2>Child 2</h2>

      {/* Passing props.user further down to the last child */}
      <PropDrillingComp4 user={props.user} />
    </div>
  );
}

export default PropDrillingComp3;
