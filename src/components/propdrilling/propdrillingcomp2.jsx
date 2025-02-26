import React from "react";
import PropDrillingComp3 from "./propdrillingcomp3";

function PropDrillingComp2(props) {
  return (
    <div>
      <h2>Child 1</h2>

      {/* Passing props.user further down to the next child */}
      <PropDrillingComp3 user={props.user} />
    </div>
  );
}

export default PropDrillingComp2;
