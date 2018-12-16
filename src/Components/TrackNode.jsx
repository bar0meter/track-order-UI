import React from "react";
import "./TrackNode.css";

import ProgressBar from "./ProgessBar";
import TrackDetails from "./TrackDetails";

class TrackNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const info = this.props.info;
    const status = this.props.status;
    return (
      <div className="trackNode">
        <ProgressBar lastNode={this.props.lastNode} status={status} />
        <TrackDetails status={status} info={info} />
      </div>
    );
  }
}

export default TrackNode;
