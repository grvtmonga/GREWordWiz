import React from "react";
function Icons(props) {
  return (
    <div>
      <img src={props.source} alt={props.name} width="50" height="50" />
    </div>
  );
}
export default Icons;