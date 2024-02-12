import React from "react";
function Icons(props) {
  return (
    <div>
      <img src={props.source} alt={props.name} width="40" height="40" />
    </div>
  );
}
export default Icons;