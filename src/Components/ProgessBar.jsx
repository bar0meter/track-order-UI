import React from "react";

import "./ProgressBar.css";

const ProgressBar = props => {
  const nodeClass = "node " + props.status;
  const barClass =
    props.status === "active" ? "bar active barActive" : "bar " + props.status;
  return (
    <div className="progress">
      <div className={nodeClass} />
      {!props.lastNode && <div className={barClass} />}
    </div>
  );
};

export default ProgressBar;
